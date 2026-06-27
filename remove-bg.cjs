const Jimp = require('jimp');

async function removeBackground() {
  const image = await Jimp.read('src/assets/logo.png');
  
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  // We define "white-ish" as having R, G, and B all above 230
  // and the difference between them being small
  const threshold = 230;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const hex = image.getPixelColor(x, y);
      const rgba = Jimp.intToRGBA(hex);

      if (rgba.r > threshold && rgba.g > threshold && rgba.b > threshold) {
        // Calculate how close it is to pure white
        const min = Math.min(rgba.r, rgba.g, rgba.b);
        const max = Math.max(rgba.r, rgba.g, rgba.b);
        
        // If it's grayish/whiteish (not deeply tinted)
        if (max - min < 20) {
          image.setPixelColor(Jimp.rgbaToInt(rgba.r, rgba.g, rgba.b, 0), x, y);
        }
      }
    }
  }

  await image.writeAsync('src/assets/logo.png');
  console.log('Background removed successfully.');
}

removeBackground().catch(console.error);
