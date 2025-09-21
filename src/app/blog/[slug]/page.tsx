import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/ui/navbar";
import { FullScreenFooter } from "@/components/ui/full-screen-footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({
    where: { slug, published: true },
    include: {
      author: { select: { name: true, email: true } },
    },
  });

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} - Techlogies Blog`,
    description: post.excerpt || post.content.replace(/<[^>]*>?/gm, '').substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({
    where: { slug, published: true },
    include: {
      author: { select: { name: true, email: true } },
      tags: true,
      categories: true,
    },
  });

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      published: true,
      id: { not: post.id },
      OR: [
        { categories: { some: { id: { in: post.categories.map(c => c.id) } } } },
        { tags: { some: { id: { in: post.tags.map(t => t.id) } } } },
      ],
    },
    include: {
      author: { select: { name: true, email: true } },
      categories: true,
    },
    take: 3,
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="landing" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="text-white/80 hover:text-white inline-flex items-center text-sm font-medium mb-4"
            >
              ← Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span
                  key={category.id}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-white/90 text-sm mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold mr-4">
              {(post.author.name || post.author.email).charAt(0).toUpperCase()}
            </div>
            <div className="mr-6">
              <p className="font-semibold">{post.author.name || post.author.email}</p>
              <p className="text-white/70">
                Published {new Date(post.publishedAt!).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
          
          {post.excerpt && (
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#4A90E2] prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Tags */}
      {post.tags.length > 0 && (
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: tag.color + "20",
                      color: tag.color,
                    }}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <div className="w-16 h-1 bg-[#4A90E2] rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                    {relatedPost.coverImage ? (
                      <div className="aspect-video relative">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                      <div className="flex items-center mb-3">
                        {relatedPost.categories.map((category) => (
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
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#4A90E2] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt || relatedPost.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...'}
                      </p>
                      
                      <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                        <div className="w-6 h-6 bg-[#2EC4B6] rounded-full flex items-center justify-center text-white font-semibold text-xs mr-2">
                          {(relatedPost.author.name || relatedPost.author.email).charAt(0).toUpperCase()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {relatedPost.author.name || relatedPost.author.email} • {new Date(relatedPost.publishedAt!).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Enjoyed this article?
          </h2>
          <p className="text-xl leading-8 text-white/90 mb-10">
            Stay updated with more insights like this delivered to your inbox.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#4A90E2] hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <FullScreenFooter />
    </div>
  );
}