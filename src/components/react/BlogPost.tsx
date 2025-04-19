import React from 'react';
import { ArrowLeftIcon, CalendarIcon, TagIcon, ShareIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

/**
 * Interface for full blog post data
 */
interface BlogPostData {
  title: string;
  image: string;
  date: string;
  category: string;
  author: string;
  content: string;
  tags?: string[];
  relatedPosts?: RelatedPost[];
}

/**
 * Interface for related posts
 */
interface RelatedPost {
  id: number;
  title: string;
  image: string;
  slug: string;
}

/**
 * Props for the BlogPost component
 */
interface BlogPostProps {
  post: BlogPostData;
}

/**
 * BlogPost component displays a full blog post article with content.
 * This component is used in blog detail pages to show the complete post.
 * 
 * The component includes:
 * - Back to blog navigation
 * - Post metadata (date, category, author)
 * - Featured image
 * - Post content (rendered as HTML)
 * - Tags
 * - Social sharing
 * - Related posts (if provided)
 */
export default function BlogPost({ post }: BlogPostProps) {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back to blog */}
        <div className="mb-12">
          <a href="/blog" className="inline-flex items-center text-gray-700 hover:text-blue-900 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            <span className="text-sm tracking-widest">BACK TO BLOG</span>
          </a>
        </div>
        
        {/* Post header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-gray-500">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <TagIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.category}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-12">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <span className="text-gray-700">By {post.author}</span>
          </div>
          
          <div className="aspect-[16/9] mb-12">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Post content */}
        <div className="max-w-3xl mx-auto mb-16">
          <div 
            className="prose prose-lg" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
        
        {/* Share and tags */}
        <div className="max-w-3xl mx-auto mb-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            {post.tags && post.tags.length > 0 && (
              <div className="mb-4 md:mb-0">
                <span className="text-sm text-gray-500 tracking-widest mr-4">
                  TAGGED IN
                </span>
                {post.tags.map((tag, index) => (
                  <a 
                    key={index} 
                    href={`/blog/tag/${tag.toLowerCase()}`} 
                    className="inline-block bg-[#f5f3ee] px-4 py-2 text-sm text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            )}
            
            <div className="flex items-center">
              <span className="text-sm text-gray-500 tracking-widest mr-4">
                SHARE
              </span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-blue-900">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-900">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-900">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Related Stories
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {post.relatedPosts.map(relatedPost => (
                <a 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`} 
                  className="group"
                >
                  <div className="relative aspect-[16/9] mb-4 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="text-xl text-gray-900 group-hover:text-blue-900 transition-colors">
                    {relatedPost.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}