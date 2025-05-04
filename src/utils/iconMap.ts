/**
 * Icon Mapping Utility for Astro-Starter
 * 
 * This utility maps lucide-react icon names (used in main-theme) to 
 * their equivalent MDI icons used in astro-starter via astro-icon.
 * 
 * Usage:
 *   import { getIconName } from '../utils/iconMap';
 *   
 *   // In Astro component
 *   const iconName = getIconName('ArrowRight');
 *   <Icon name={iconName} />
 * 
 * Or use directly with the IconMap component:
 *   import { IconMap } from '../components/IconMap.astro';
 *   
 *   <IconMap icon="ArrowRight" />
 */

// Type for lucide-react icon names
export type LucideIconName = 
  | 'ArrowRight'
  | 'ArrowLeft'
  | 'Calendar'
  | 'ChevronRight'
  | 'Filter'
  | 'MapPin'
  | 'Mail'
  | 'Phone'
  | 'Tag'
  | 'Share'
  | 'Menu'
  | 'X'
  | 'Facebook'
  | 'Instagram'
  | 'Twitter'
  | 'Briefcase'
  | 'Heart';

// Mapping between lucide-react icons and MDI icons
export const iconMap: Record<LucideIconName, string> = {
  // Navigation icons
  'ArrowRight': 'mdi:arrow-right',
  'ArrowLeft': 'mdi:arrow-left',
  'ChevronRight': 'mdi:chevron-right',
  'X': 'mdi:close',
  'Menu': 'mdi:menu',
  
  // Contact/info icons
  'MapPin': 'mdi:map-marker',
  'Phone': 'mdi:phone',
  'Mail': 'mdi:email',
  
  // Blog/content icons
  'Calendar': 'mdi:calendar',
  'Tag': 'mdi:tag',
  'Share': 'mdi:share-variant',
  'Filter': 'mdi:filter',
  
  // Social media icons
  'Facebook': 'mdi:facebook',
  'Instagram': 'mdi:instagram',
  'Twitter': 'mdi:twitter',
  
  // Service/feature icons
  'Briefcase': 'mdi:briefcase',
  'Heart': 'mdi:heart'
};

/**
 * Get the MDI icon name equivalent to a lucide-react icon name
 * 
 * @param lucideName - The name of the lucide-react icon
 * @returns The equivalent MDI icon name for use with astro-icon
 */
export function getIconName(lucideName: LucideIconName): string {
  // Check if the icon exists in our map
  if (iconMap[lucideName]) {
    return iconMap[lucideName];
  }
  
  // If not found, warn and return a default icon
  console.warn(`Icon "${lucideName}" not found in icon mapping. Using a default icon.`);
  return 'mdi:help-circle';
}

/**
 * Convert lucide-react prop name format to our LucideIconName format
 * For example: "MenuIcon" -> "Menu"
 * 
 * @param propName - The icon prop name (usually with "Icon" suffix)
 * @returns The normalized icon name for our mapping
 */
export function normalizeLucideIconName(propName: string): LucideIconName {
  // Remove the "Icon" suffix if present
  const normalizedName = propName.replace(/Icon$/, '') as LucideIconName;
  return normalizedName;
}