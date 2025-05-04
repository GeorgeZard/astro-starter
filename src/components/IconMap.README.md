# Icon Mapping System

This system provides a way to map icon names from `lucide-react` (used in `main-theme`) to the appropriate Material Design Icons (MDI) used in `astro-starter` via the `astro-icon` package. This mapping simplifies component migration and ensures visual consistency.

## Components & Utilities

The icon mapping system consists of two main parts:

1. **IconMap Component**: An Astro component that handles icon rendering with proper mapping
2. **iconMap Utility**: A TypeScript utility that maps lucide-react icon names to MDI icon names

## Basic Usage

### Using the IconMap Component

The easiest way to replace lucide-react icons is to use the IconMap component:

```astro
---
import IconMap from '../components/IconMap.astro';
---

<IconMap icon="ArrowRight" class="w-5 h-5" />
```

### Migrating from lucide-react Icons

#### Before (in main-theme):
```jsx
import { ArrowRightIcon } from 'lucide-react';

// In JSX:
<ArrowRightIcon className="w-5 h-5" />
```

#### After (in astro-starter):
```astro
---
import IconMap from '../components/IconMap.astro';
---

<IconMap icon="ArrowRight" class="w-5 h-5" />
```

### Using Size Prop

The `size` prop provides a convenient way to set both width and height:

```astro
<IconMap icon="ArrowRight" size={20} />
```

This is equivalent to setting `class="w-5 h-5"` (size divided by 4 for Tailwind classes).

## Accessibility

### Icons with Labels

When an icon is used as a standalone interactive element, provide an `ariaLabel`:

```astro
<button>
  <IconMap icon="ArrowRight" ariaLabel="Next page" />
</button>
```

### Decorative Icons

For decorative icons that should be hidden from screen readers:

```astro
<div class="flex items-center">
  <IconMap icon="Calendar" ariaHidden={true} />
  <span>Event Date</span>
</div>
```

## Advanced Usage

### Direct Use of Icon Mapping

You can also use the utility functions directly with astro-icon:

```astro
---
import { Icon } from 'astro-icon/components';
import { getIconName } from '../utils/iconMap';

const arrowIconName = getIconName('ArrowRight');
---

<Icon name={arrowIconName} class="w-5 h-5" />
```

### Normalizing Icon Names

If you have icon names in the format `MenuIcon` (with "Icon" suffix), use the normalization utility:

```astro
---
import { normalizeLucideIconName, getIconName } from '../utils/iconMap';

// Convert "MenuIcon" to "Menu", then get MDI equivalent
const iconName = getIconName(normalizeLucideIconName("MenuIcon"));
---
```

## Available Icon Mappings

The following icons are currently mapped from lucide-react to MDI:

| Lucide Icon Name | MDI Icon Name |
|------------------|---------------|
| ArrowRight | mdi:arrow-right |
| ArrowLeft | mdi:arrow-left |
| Calendar | mdi:calendar |
| ChevronRight | mdi:chevron-right |
| Filter | mdi:filter |
| MapPin | mdi:map-marker |
| Mail | mdi:email |
| Phone | mdi:phone |
| Tag | mdi:tag |
| Share | mdi:share-variant |
| Menu | mdi:menu |
| X | mdi:close |
| Facebook | mdi:facebook |
| Instagram | mdi:instagram |
| Twitter | mdi:twitter |
| Briefcase | mdi:briefcase |
| Heart | mdi:heart |

If you need to map additional icons, you can extend the `iconMap` object in `src/utils/iconMap.ts`.

## Examples in Component Migration

### Example 1: Contact Component

#### Before (in main-theme):
```jsx
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

<div className="flex items-start">
  <MapPinIcon className="w-6 h-6 text-blue-900 mr-4 mt-1" />
  <div>
    <p className="text-lg font-medium text-gray-900 mb-1">Location</p>
    <p className="text-gray-700">Gythio, Mani (Lakonia), Greece</p>
  </div>
</div>
```

#### After (in astro-starter):
```astro
---
import IconMap from '../components/IconMap.astro';
---

<div class="flex items-start">
  <IconMap icon="MapPin" class="w-6 h-6 text-blue-900 mr-4 mt-1" ariaHidden={true} />
  <div>
    <p class="text-lg font-medium text-gray-900 mb-1">Location</p>
    <p class="text-gray-700">Gythio, Mani (Lakonia), Greece</p>
  </div>
</div>
```

### Example 2: Footer Social Icons

#### Before (in main-theme):
```jsx
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

<div className="flex space-x-6 md:justify-center">
  <a href="#" className="hover:text-blue-200 transition-colors">
    <FacebookIcon className="w-5 h-5" />
  </a>
  <a href="#" className="hover:text-blue-200 transition-colors">
    <InstagramIcon className="w-5 h-5" />
  </a>
  <a href="#" className="hover:text-blue-200 transition-colors">
    <TwitterIcon className="w-5 h-5" />
  </a>
</div>
```

#### After (in astro-starter):
```astro
---
import IconMap from '../components/IconMap.astro';
---

<div class="flex space-x-6 md:justify-center">
  <a href="#" class="hover:text-blue-200 transition-colors" aria-label="Facebook">
    <IconMap icon="Facebook" class="w-5 h-5" />
  </a>
  <a href="#" class="hover:text-blue-200 transition-colors" aria-label="Instagram">
    <IconMap icon="Instagram" class="w-5 h-5" />
  </a>
  <a href="#" class="hover:text-blue-200 transition-colors" aria-label="Twitter">
    <IconMap icon="Twitter" class="w-5 h-5" />
  </a>
</div>