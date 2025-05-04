# About Component

The About component is a responsive, configurable section that displays information about a company or organization. It features an image with a year established overlay, a title, subtitle, and two description columns.

## Features

- Responsive layout with a two-column grid on large screens
- Image display with "year established" overlay
- Support for multi-line titles
- Two-column description layout on medium and large screens
- Support for MDX content through content collections
- Image optimization using Astro's built-in capabilities

## Usage

### Basic Usage

```astro
---
import About from '../components/About.astro';
---

<About />
```

### With Custom Props

```astro
---
import About from '../components/About.astro';
---

<About 
  imageSrc="/assets/img/custom-image.jpg"
  imageAlt="Custom image description"
  yearEstablished="SINCE 2023"
  subtitle="OUR STORY"
  title="INNOVATION AND\nDEDICATION"
  description1="First column content goes here. You can add detailed information about your company or organization."
  description2="Second column content provides additional details or highlights special aspects of your business."
/>
```

### With Content Collections (MDX)

```astro
---
import { getCollection } from 'astro:content';
import About from '../components/About.astro';

// Get the about page content from the collection
const aboutPages = await getCollection('page', ({ id }) => {
  return id.includes('about');
});

// Get the first about page
const aboutPage = aboutPages.length > 0 ? aboutPages[0] : null;
---

{aboutPage ? (
  <About entry={aboutPage} />
) : (
  <About />
)}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageSrc` | string | "/assets/img/about-us.jpeg" | Path to the image |
| `imageAlt` | string | "About us image" | Alt text for the image |
| `yearEstablished` | string | "SINCE 2015" | Year established text |
| `subtitle` | string | "ABOUT US" | Subtitle text |
| `title` | string | "PREMIUM BEACHSIDE\nEXPERIENCE IN MANI" | Title text (use \n for line breaks) |
| `description1` | string | "Located in the heart of..." | First column description |
| `description2` | string | "Our dedicated team..." | Second column description |
| `entry` | object | null | Content collection entry object |

## Content Collection Integration

The component can extract information from a content collection entry with the following fields:

- `entry.data.aboutTitle` or `entry.data.title` → title
- `entry.data.aboutSubtitle` → subtitle
- `entry.data.aboutImage` or `entry.data.thumbnail` → image source
- `entry.data.aboutImageAlt` → image alt text
- `entry.data.aboutDescription1` → first column description
- `entry.data.aboutDescription2` → second column description
- `entry.data.yearEstablished` → year established text

## Styling

The component uses Tailwind CSS for styling and is fully responsive. The layout changes from a single column on mobile to a two-column grid on larger screens.

## Example Content Collection Schema

```js
// In your content.config.mjs
const page = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    aboutTitle: z.string().optional(),
    aboutSubtitle: z.string().optional(),
    aboutImage: z.string().optional(),
    aboutImageAlt: z.string().optional(),
    aboutDescription1: z.string().optional(),
    aboutDescription2: z.string().optional(),
    yearEstablished: z.string().optional(),
    // ... other fields
  })
})