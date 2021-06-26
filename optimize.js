const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs-extra');

const matches = glob.sync('src/images/**/*.{png,jpg,jpeg}');

console.log(matches);
const MAX_WIDTH = 2400;
const QUALITY = 100;

Promise.all(matches.map(async (match) => {
  const stream = sharp(match);
  const info = await stream.metadata();

  const optimizedName = match.replace(
    /(\..+)$/,
    (match, ext) => `-optimized${ext}`,
  );

  let s = stream;
  if (info.width > MAX_WIDTH) {
    s = await s.resize(MAX_WIDTH);
  }

  if (info.format === 'png') {
    s = await s.png({ quality: QUALITY });
  } else s = await s.jpeg({ quality: QUALITY });

  await s.toFile(optimizedName);

  return fs.rename(optimizedName, match);
})).then(() => console.log('compressed')).catch(console.log);
