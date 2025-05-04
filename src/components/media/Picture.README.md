# Picture Component

The `Picture` component is a versatile image handling solution that supports both local images (processed by Astro's built-in image optimization) and external image URLs. It provides various layout options and integrates seamlessly with Astro's image optimization features.

## Features

- **Supports both local and external images**
- **Multiple layout modes**: constrained, fullWidth, fixed
- **Automatic format conversion** to WebP and AVIF
- **Responsive image handling** with appropriate srcset
- **Configurable quality settings**
- **Aspect ratio calculations**
- **Proper loading attributes** for performance optimization
- **Accessibility support** with required alt text

## Basic Usage

### Local Images (from src/assets/)

```astro
---
import { Picture } from '../components/media/Picture.astro';
import myImage from '../assets/img/my-image.jpg';
---

<Picture 
  src={myImage} 
  alt="My descriptive alt text" 
  width={800} 
  height={600} 
/>
```

### External URLs

```astro
---
import Picture from '../components/media/Picture.astro';
---

<Picture 
  src="https://example.com/image.jpg" 
  alt="External image" 
  width={800} 
  height={600} 
/>
```

### Local Path String

```astro
---
import Picture from '../components/media/Picture.astro';
---

<Picture 
  src="/img/products/product-1.jpg" 
  alt="Product image" 
  width={800} 
  height={600} 
/>
```

## Layout Modes

### Constrained (default)

Constrains the image to a maximum width while maintaining aspect ratio.

```astro
<Picture 
  src={myImage} 
  alt="Constrained image" 
  width={800} 
  height={600} 
  layout="constrained" 
/>
```

### Full Width

Spans the full width of the container, useful for hero images or banners.

```astro
<Picture 
  src={myImage} 
  alt="Full width image" 
  width={1200} 
  height={600} 
  layout="fullWidth" 
/>
```

### Fixed

Uses exact dimensions without responsive sizing.

```astro
<Picture 
  src={myImage} 
  alt="Fixed size image" 
  width={400} 
  height={300} 
  layout="fixed" 
/>
```

## Advanced Options

### Using Aspect Ratio

Automatically calculates height based on the provided aspect ratio.

```astro
<Picture 
  src={myImage} 
  alt="Image with aspect ratio" 
  width={800} 
  aspect={16/9} 
  layout="constrained" 
/>
```

### Custom Quality and Format

```astro
<Picture 
  src={myImage} 
  alt="High quality image" 
  width={800} 
  height={600} 
  quality={90} 
  format="avif" 
/>
```

### Image Fit

Control how the image fills its container.

```astro
<Picture 
  src={myImage} 
  alt="Image with specific fit" 
  width={800} 
  height={600} 
  fit="contain" 
/>
```

Available fit options:
- `cover` (default): Scales the image to cover the entire container
- `contain`: Scales the image to fit within the container
- `fill`: Stretches the image to fill the container

### Custom CSS Classes

```astro
<Picture 
  src={myImage} 
  alt="Image with custom class" 
  width={800} 
  height={600} 
  class="rounded-lg shadow-md" 
/>
```

## Full Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string \| ImageMetadata` | (required) | Image source (URL, path, or imported image) |
| `alt` | `string` | (required) | Alt text for accessibility |
| `width` | `number` | `800` | Desired image width |
| `height` | `number` | (calculated) | Desired image height |
| `aspect` | `number` | (none) | Aspect ratio for automatic height calculation |
| `layout` | `string` | `"constrained"` | Layout mode (constrained, fullWidth, fixed) |
| `loading` | `string` | `"lazy"` | Image loading strategy (lazy, eager) |
| `sizes` | `string` | `"100vw"` | Size attribute for responsive images |
| `widths` | `number[]` | `[240, 320, 480, ...]` | Widths for responsive image srcset |
| `format` | `string` | `"webp"` | Primary image format (webp, avif, jpeg, png) |
| `quality` | `number` | `80` | Image quality (1-100) |
| `class` | `string` | `""` | Additional CSS classes |
| `fit` | `string` | `"cover"` | Object-fit property (cover, contain, fill) |

## Integration with Content Collections

The Picture component works seamlessly with Astro Content Collections:

```astro
---
import Picture from '../components/media/Picture.astro';
import { getEntry } from 'astro:content';

const post = await getEntry('blog', Astro.params.slug);
const { Content } = await post.render();

// Get image from content collection
const imageUrl = post.data.image;
---

<article>
  <Picture 
    src={imageUrl} 
    alt={post.data.imageAlt || post.data.title} 
    width={1200} 
    height={600} 
    layout="fullWidth" 
  />
  <h1>{post.data.title}</h1>
  <Content />
</article>