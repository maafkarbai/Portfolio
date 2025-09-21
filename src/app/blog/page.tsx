import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { FullScreenFooter } from "@/components/ui/full-screen-footer";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Blog - Techlogies | Technology Insights & Trends",
  description: "Stay updated with the latest technology trends, development insights, and industry best practices.",
};

export default async function BlogPage() {
  const [posts, categories, tags] = await Promise.all([
    prisma.blogPost.findMany({
      where: { published: true },
      include: {
        author: { select: { name: true, email: true } },
        tags: true,
        categories: true,
      },
      orderBy: { publishedAt: "desc" },
    }),
    prisma.blogCategory.findMany({
      include: { _count: { select: { posts: true } } },
    }),
    prisma.blogTag.findMany({
      include: { _count: { select: { posts: true } } },
    }),
  ]);

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

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

      {posts.length === 0 ? (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="text-gray-500 text-lg mb-2">No blog posts yet</div>
            <p className="text-gray-400">Check back soon for new content!</p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
                  <div className="w-16 h-1 bg-[#4A90E2] rounded-full"></div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover-lift">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {featuredPost.coverImage ? (
                      <div className="aspect-video lg:aspect-auto relative">
                        <Image
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#4A90E2]/20 to-[#2EC4B6]/20 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                          <p className="text-sm">Featured Article</p>
                        </div>
                      </div>
                    )}
                    <div className="p-10">
                      <div className="flex items-center mb-4">
                        {featuredPost.categories.map((category) => (
                          <span
                            key={category.id}
                            className="px-3 py-1 rounded-full text-sm font-medium mr-2"
                            style={{
                              backgroundColor: category.color + "20",
                              color: category.color,
                            }}
                          >
                            {category.name}
                          </span>
                        ))}
                        <span className="text-gray-500 text-sm ml-2">
                          {featuredPost.publishedAt ? new Date(featuredPost.publishedAt).toLocaleDateString() : ""}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-[#4A90E2] transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt || featuredPost.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...'}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                            {(featuredPost.author.name || featuredPost.author.email).charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{featuredPost.author.name || featuredPost.author.email}</p>
                            <p className="text-sm text-gray-500">{new Date(featuredPost.publishedAt!).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <Link href={`/blog/${featuredPost.slug}`}>
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
          )}

          {/* Categories Filter */}
          {categories.length > 0 && (
            <section className="py-8 border-t border-gray-100">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    variant="default"
                    className="rounded-full px-6 py-2 font-medium transition-all duration-300 bg-[#4A90E2] text-white hover:bg-[#2EC4B6]"
                  >
                    All Posts
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="outline"
                      className="rounded-full px-6 py-2 font-medium transition-all duration-300 border-gray-300 text-gray-700 hover:border-[#4A90E2] hover:text-[#4A90E2]"
                      style={{ borderColor: category.color + "50", color: category.color }}
                    >
                      {category.name} ({category._count.posts})
                    </Button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          {regularPosts.length > 0 && (
            <section className="py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {post.coverImage ? (
                        <div className="aspect-video relative">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-[#4A90E2]/20 to-[#2EC4B6]/20 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <p className="text-xs">Article Image</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          {post.categories.map((category) => (
                            <span
                              key={category.id}
                              className="px-3 py-1 rounded-full text-sm font-medium"
                              style={{
                                backgroundColor: category.color + "20",
                                color: category.color,
                              }}
                            >
                              {category.name}
                            </span>
                          ))}
                          <span className="text-gray-500 text-sm">
                            {new Date(post.publishedAt!).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#4A90E2] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {post.excerpt || post.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...'}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2EC4B6] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                              {(post.author.name || post.author.email).charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">{post.author.name || post.author.email}</p>
                              <p className="text-xs text-gray-500">{new Date(post.publishedAt!).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
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
          )}
        </>
      )}

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