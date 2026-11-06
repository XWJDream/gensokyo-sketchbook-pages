import { copyFile, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const destination = path.resolve(process.argv[2] ?? '_site');
if (destination === root || root.startsWith(destination + path.sep)) throw Error('Use a separate output directory.');

const rootFiles = (await readdir(root, { withFileTypes: true }))
  .filter(entry => entry.isFile() && (/^[a-z][a-z-]*\.(html|js|css)$/.test(entry.name)
    || ['.nojekyll', 'artwork-registry.json'].includes(entry.name)))
  .map(entry => entry.name);
const assetDir = path.join(root, 'assets');
const assetFiles = await readdir(assetDir);
const assetSet = new Set(assetFiles);
const sha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const rawBase = 'https://raw.githubusercontent.com/XWJDream/gensokyo-sketchbook-pages/' + sha + '/assets/';

const context = { window: {} };
for (const name of ['characters.js', 'scenes-data.js']) {
  vm.runInNewContext(await readFile(name, 'utf8'), context, { filename: name });
}
const { CHARACTERS, GENSOKYO_SCENES } = context.window;
const batches = new Map([
  ...CHARACTERS.map(c => [(c.artwork || c.id) + '.png', Number(c.batch) || 1]),
  ...GENSOKYO_SCENES.map(s => [s.image + '.png', Number(s.batch) || 1]),
]);
const newest = Math.max(...batches.values());
const pinned = new Set([
  ...CHARACTERS.slice(0, 8).map(c => (c.artwork || c.id) + '.png'),
  'houso.png', 'hairclip-kappa.png', 'mai-pc98.png', 'sara.png', 'yuki-v2.png',
  'scene-tokiko-reading.png', 'scene-houso-pinegate.png', 'scene-kappa-hillspring.png',
  'scene-bamboo-lantern-v2.png', 'scene-melon-shadow.png', 'scene-kanda-zelkova.png',
]);
const size = new Map(await Promise.all(assetFiles.map(async name => {
  const file = await stat(path.join(assetDir, name));
  if (!file.isFile()) throw Error('Unexpected asset directory: ' + name);
  return [name, file.size];
})));
const isOptional = name => name.endsWith('.png')
  && assetSet.has(name.replace(/\.png$/, '.webp'))
  && !/^(atlas-|world-)/.test(name)
  && !pinned.has(name)
  && (batches.get(name) ?? 0) < newest - 1;
const included = new Set(assetFiles.filter(name => !isOptional(name)));
const optional = assetFiles.filter(isOptional)
  .sort((a, b) => (batches.get(b) ?? 0) - (batches.get(a) ?? 0) || a.localeCompare(b));

const budget = 640 * 1024 * 1024;
let bytes = [...included].reduce((total, name) => total + size.get(name), 0);
for (const name of optional) {
  if (bytes + size.get(name) > budget) continue;
  included.add(name);
  bytes += size.get(name);
}
if (bytes > budget) throw Error('Required files exceed the Pages budget.');
const external = optional.filter(name => !included.has(name));

const from = (file, old, replacement) => {
  if (file.split(old).length !== 2) throw Error('Artwork integration point changed: ' + old);
  return file.replace(old, () => replacement);
};
const rewrites = {
  'index.html': [
    ['  <script src="app.js?v=', '  <script src="pages-artwork.js?v=' + sha.slice(0, 12) + '" defer></script>\n  <script src="app.js?v='],
  ],
  'app.js': [
    ['src="assets/${c.artwork||c.id}.png"', 'src="${window.pagesArtwork.preview(c.artwork||c.id)}"'],
    ['href="assets/${c.artwork||c.id}.png" download=', 'href="${window.pagesArtwork.original(c.artwork||c.id)}" download='],
  ],
  'scenes.js': [
    ['img.src=\x60assets/${s.image}.png\x60;', 'img.src=window.pagesArtwork.preview(s.image);'],
    ['download.href=\x60assets/${s.image}.png\x60;', 'download.href=window.pagesArtwork.original(s.image);'],
  ],
  'lore.js': [
    ["$('#lore-viewer-image').src=\x60assets/${c.image}.png\x60;", "$('#lore-viewer-image').src=window.pagesArtwork.preview(c.image);"],
    ["$('#lore-viewer-download').href=\x60assets/${c.image}.png\x60;", "$('#lore-viewer-download').href=window.pagesArtwork.original(c.image);"],
  ],
};

await mkdir(path.join(destination, 'assets'), { recursive: true });
for (const name of rootFiles) {
  const source = path.join(root, name);
  const target = path.join(destination, name);
  if (!rewrites[name]) {
    await copyFile(source, target);
    continue;
  }
  let contents = await readFile(source, 'utf8');
  for (const [old, replacement] of rewrites[name]) contents = from(contents, old, replacement);
  await writeFile(target, contents);
}
for (const name of included) {
  await copyFile(path.join(assetDir, name), path.join(destination, 'assets', name));
}
await writeFile(path.join(destination, 'pages-artwork.json'), JSON.stringify({ rawBase, external }) + '\n');
const helper = await readFile('scripts/pages-artwork.js', 'utf8');
await writeFile(path.join(destination, 'pages-artwork.js'),
  'window.pagesArtworkConfig=' + JSON.stringify({ rawBase, external }) + ';\n' + helper);
console.log('Pages assets: ' + included.size + ' local, ' + external.length +
  ' remote originals, ' + (bytes / 1024 ** 2).toFixed(1) + ' MiB local.');
