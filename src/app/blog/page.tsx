import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { FullScreenFooter } from "@/components/ui/full-screen-footer";

export const metadata = {
  title: "Blog - Techlogies | Technology Insights & Trends",
  description: "Stay updated with the latest technology trends, development insights, and industry best practices.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends in web development including AI integration, progressive web apps, and serverless architecture.",
    author: "John Smith",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Building Scalable E-commerce Solutions: A Complete Guide",
    excerpt: "Learn how to create robust e-commerce platforms that can handle high traffic and provide excellent user experience.",
    author: "Maria Davis",
    date: "December 10, 2024",
    readTime: "8 min read",
    category: "E-commerce",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "CRM Systems: How to Choose the Right Solution for Your Business",
    excerpt: "A comprehensive guide to selecting and implementing CRM systems that actually improve your business operations.",
    author: "Alex Johnson",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Business Tools",
    image: "/api/placeholder/600/400",
  },
  {
    id: 4,
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Essential SEO strategies that work in 2024, from technical optimization to content strategy.",
    author: "John Smith",
    date: "November 28, 2024",
    readTime: "7 min read",
    category: "SEO",
    image: "/api/placeholder/600/400",
  },
  {
    id: 5,
    title: "The Importance of Website Maintenance and Security",
    excerpt: "Why ongoing website maintenance is crucial for your business success and how to implement proper security measures.",
    author: "Maria Davis",
    date: "November 20, 2024",
    readTime: "4 min read",
    category: "Maintenance",
    image: "/api/placeholder/600/400",
  },
  {
    id: 6,
    title: "Custom Software vs Off-the-Shelf Solutions: Making the Right Choice",
    excerpt: "Understanding when to invest in custom software development and when existing solutions might be sufficient.",
    author: "Alex Johnson",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Software Development",
    image: "/api/placeholder/600/400",
  },
];

const categories = [
  "All Posts",
  "Web Development",
  "E-commerce",
  "Business Tools",
  "SEO",
  "Maintenance",
  "Software Development",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Technology Insights
          </h1>
          <p className="text-xl leading-8 text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from the world of technology.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <div className="w-16 h-1 bg-[#4A90E2] rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#4A90E2]/20 to-[#2EC4B6]/20 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <p className="text-sm">Featured Article Image</p>
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center mb-4">
                  <span className="bg-[#4A90E2]/10 text-[#4A90E2] px-3 py-1 rounded-full text-sm font-medium mr-4">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-[#4A90E2] transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                      <p className="text-sm text-gray-500">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    <Button className="bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] hover:from-[#2EC4B6] hover:to-[#4A90E2] text-white font-semibold px-6 py-2 rounded-xl">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  category === "All Posts"
                    ? "bg-[#4A90E2] text-white hover:bg-[#2EC4B6]"
                    : "border-gray-300 text-gray-700 hover:border-[#4A90E2] hover:text-[#4A90E2]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-[#4A90E2]/20 to-[#2EC4B6]/20 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <p className="text-xs">Article Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#2EC4B6]/10 text-[#2EC4B6] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#4A90E2] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2EC4B6] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white rounded-lg">
                        Read
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Stay Updated
          </h2>
          <p className="text-xl leading-8 text-white/90 mb-10">
            Get the latest technology insights and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <Button className="bg-white text-[#4A90E2] hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl">
              Subscribe
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      <FullScreenFooter />
    </div>
  );
}