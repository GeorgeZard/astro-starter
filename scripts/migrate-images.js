const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const { createWriteStream } = require('fs');

// Configuration
const CONFIG = {
  sourceProject: '../main-theme',
  targetProject: '.',
  directories: {
    photos: 'src/assets/img/photos',
    graphics: 'src/assets/img/graphics',
    fallback: 'public/fallback'
  },
  // Add known external images here
  externalImages: [
    {
      url: 'https://images.unsplash.com/photo-1621275471769-e6aa344546d5',
      filename: 'bayamo-hero.webp',
      directory: 'photos', // Will be placed in src/assets/img/photos
      altText: 'Bayamo Beach Bar'
    }
  ]
};

// Ensure directories exist
async function createDirectories() {
  for (const dir of Object.values(CONFIG.directories)) {
    const fullPath = path.join(CONFIG.targetProject, dir);
    try {
      await fs.access(fullPath);
      console.log(`Directory exists: ${fullPath}`);
    } catch {
      await fs.mkdir(fullPath, { recursive: true });
      console.log(`Created directory: ${fullPath}`);
    }
  }
}

// Download an image from a URL
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', err => {
        reject(err);
      });
    }).on('error', err => {
      reject(err);
    });
  });
}

// Process external images
async function processExternalImages() {
  for (const img of CONFIG.externalImages) {
    const targetDir = CONFIG.directories[img.directory];
    if (!targetDir) {
      console.error(`Invalid directory type: ${img.directory}`);
      continue;
    }

    const outputPath = path.join(CONFIG.targetProject, targetDir, img.filename);
    console.log(`Downloading ${img.url} to ${outputPath}...`);

    try {
      await downloadImage(img.url, outputPath);
      console.log(`Successfully downloaded: ${img.filename}`);
    } catch (err) {
      console.error(`Failed to download ${img.url}:`, err.message);
    }
  }
}

// Main execution
async function main() {
  try {
    console.log('Creating required directories...');
    await createDirectories();

    console.log('\nProcessing external images...');
    await processExternalImages();

    console.log('\nImage migration completed!');
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

main();