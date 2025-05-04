# Component Documentation

## Hero Component

The `Hero` component is a versatile hero section that can be used at the top of landing pages or feature pages.

### Usage

```astro
---
import Hero from '../components/Hero.astro';
---

<!-- Default usage with no props (uses default values) -->
<Hero />

<!-- Customized usage with props -->
<Hero
  heading="COASTAL<span class='font-normal'>VIEWS</span>"
  subheading="OCEAN PARADISE"
  description="Experience the beauty of the Mediterranean coastline."
  tagline="since 2010"
  imageUrl="/path/to/image.jpg"
  imageAlt="Description of the image"
  testimonialQuote="An amazing experience!"
  testimonialSource="Happy Customer"
/>
```

### Props

| Prop               | Type   | Default                                                                 | Description                               |
|--------------------|--------|-------------------------------------------------------------------------|-------------------------------------------|
| heading            | string | "BAY<span class='font-normal'>AMO</span>"                               | Main heading with optional HTML           |
| subheading         | string | "SEASIDE EXPERIENCE"                                                    | Smaller text above the heading            |
| description        | string | "Curated beachside experiences..."                                      | Main descriptive paragraph                |
| tagline            | string | "established 2015"                                                       | Small text below the description          |
| imageUrl           | string | "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixlib=rb-4.0.3" | URL for the hero image                    |
| imageAlt           | string | "Bayamo Beach Bar"                                                      | Alt text for the image                    |
| testimonialQuote   | string | "The most aesthetically pleasing beach bar on the coast"                | Quote text for testimonial                |
| testimonialSource  | string | "Mani Travel Magazine"                                                  | Source of the testimonial                 |

### Structure

The component is structured as a full-width section with a two-column layout:
- Left column: Typography (headings, description, tagline)
- Right column: Image with an optional testimonial overlay

### Styling

The component uses Tailwind CSS for styling with a clean, minimal aesthetic featuring:
- Light background color (#f5f3ee)
- Responsive grid layout (single column on mobile, two columns on desktop)
- Responsive typography (larger headings on desktop)
- Blue accent line below the heading