# Image Migration Script

This script handles the migration of images from `main-theme` to `astro-starter`, including downloading external images and organizing them according to the asset handling strategy.

## Directory Structure

Images are organized into the following directories:

```
astro-starter/
├── src/
│   └── assets/
│       └── img/
│           ├── photos/    # Photographic content
│           └── graphics/  # Illustrations and graphics
└── public/
    └── fallback/         # Fallback and non-optimized images
```

## Usage

1. Ensure Node.js is installed on your system
2. Navigate to the `astro-starter` directory
3. Run the script:

```bash
node scripts/migrate-images.js
```

## Configuration

The script uses a configuration object in `migrate-images.js` that can be modified to add new images:

```javascript
const CONFIG = {
  // ... other config ...
  externalImages: [
    {
      url: 'https://example.com/image.jpg',
      filename: 'local-name.webp',  // Will be saved with this name
      directory: 'photos',          // 'photos', 'graphics', or 'fallback'
      altText: 'Description'        // For documentation purposes
    }
  ]
};
```

### Adding New Images

1. Open `scripts/migrate-images.js`
2. Add a new entry to the `externalImages` array
3. Specify:
   - `url`: The source URL of the image
   - `filename`: Desired filename (preferably with .webp extension)
   - `directory`: Target directory ('photos', 'graphics', or 'fallback')
   - `altText`: Description of the image

## Error Handling

- The script creates directories if they don't exist
- Failed downloads are logged but don't stop the script
- Each operation is logged for debugging purposes

## Notes

- Images in `src/assets/img/` will be optimized by Astro's image optimization
- Use `public/fallback/` only for images that shouldn't be processed by Astro
- The script automatically converts all images to WebP format for better performance