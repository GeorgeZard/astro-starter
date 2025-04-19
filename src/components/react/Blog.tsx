import React, { useState } from 'react';
import BlogPostCard from './BlogPostCard';
import { ChevronRightIcon, FilterIcon } from 'lucide-react';

/**
 * Interface for blog post data
 */
export interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

/**
 * Props for the Blog component
 */
export interface BlogProps {
  posts?: BlogPost[];
  title?: string;
  subtitle?: string;
  description?: string;
}

/**
 * Blog component displays a collection of blog posts with category filtering functionality.
 * This component serves as the main blog listing with interactive category filtering.
 * It uses the BlogPostCard component to display individual blog post previews.
 * 
 * @example
 * ```jsx
 * <Blog posts={blogPosts} />
 * ```
 */
export default function Blog({ 
  posts,
  title = "BLOG",
  subtitle = "LATEST STORIES",
  description = "Explore our collection of stories, insights and updates. Discover the experiences that make our content truly special."
}: BlogProps) {
  // Default posts if none are provided
  const defaultPosts: BlogPost[] = [{
    id: 1,
    title: "Understanding Astro Islands Architecture",
    excerpt: "Learn how Astro's Islands Architecture enables high-performance websites with optional JavaScript hydration for interactive components.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    date: "April 15, 2025",
    category: "Tutorials",
    slug: "understanding-astro-islands"
  }, {
    id: 2,
    title: "Building Accessible Web Applications",
    excerpt: "Discover best practices for creating web applications that are accessible to all users, including those with disabilities.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop",
    date: "April 10, 2025",
    category: "Accessibility",
    slug: "building-accessible-web-applications"
  }, {
    id: 3,
    title: "Getting Started with TypeScript in Astro",
    excerpt: "A comprehensive guide to implementing TypeScript in your Astro projects for better type safety and developer experience.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    date: "April 5, 2025",
    category: "TypeScript",
    slug: "getting-started-with-typescript-in-astro"
  }, {
    id: 4,
    title: "Optimizing Images in Astro Projects",
    excerpt: "Learn how to implement effective image optimization techniques to improve performance and user experience in Astro websites.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    date: "March 25, 2025",
    category: "Performance",
    slug: "optimizing-images-in-astro-projects"
  }, {
    id: 5,
    title: "Creating Dynamic Routes in Astro",
    excerpt: "A step-by-step guide to implementing dynamic routing in Astro for more flexible and powerful web applications.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2070&auto=format&fit=crop",
    date: "March 20, 2025",
    category: "Tutorials",
    slug: "creating-dynamic-routes-in-astro"
  }, {
    id: 6,
    title: "Integrating a Headless CMS with Astro",
    excerpt: "Explore different approaches to connecting your Astro site with popular headless CMS platforms for content management.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    date: "March 15, 2025",
    category: "CMS",
    slug: "integrating-headless-cms-with-astro"
  }];

  const blogPosts = posts || defaultPosts;
  
  // Extract unique categories from blog posts
  const uniqueCategories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-24 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-6">
            <h5 className="text-sm tracking-widest text-gray-500 mb-6">
              {title}
            </h5>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8">
              {subtitle}
            </h2>
            <div className="w-24 h-1 bg-blue-900 mb-8" />
            <p className="text-xl text-gray-700 mb-6 max-w-lg">
              {description}
            </p>
          </div>
          {/* Category Filter */}
          <div className="lg:col-span-6 flex items-end">
            <div className="w-full">
              <div className="flex items-center mb-4">
                <FilterIcon className="w-5 h-5 text-gray-500 mr-2" aria-hidden="true" />
                <span className="text-sm text-gray-500 tracking-widest">
                  FILTER BY
                </span>
              </div>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Category filter">
                {uniqueCategories.map(category => (
                  <button 
                    key={category} 
                    className={`px-6 py-2 text-sm tracking-wider transition-colors ${
                      activeCategory === category 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogPostCard key={post.id || post.slug} post={post} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center border-t border-b border-gray-300 py-3 px-4">
            <span className="text-sm tracking-widest text-gray-700 mr-4">
              01 / 02
            </span>
            <a 
              href="#" 
              className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
              aria-label="Next page"
            >
              <span className="text-sm tracking-widest mr-1">NEXT</span>
              <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}