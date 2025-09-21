import { prisma } from "@/lib/prisma"

export default async function AdminDashboard() {
  const stats = await Promise.all([
    prisma.blogPost.count(),
    prisma.blogPost.count({ where: { published: true } }),
    prisma.blogPost.count({ where: { published: false } }),
    prisma.blogTag.count(),
    prisma.blogCategory.count(),
  ])

  const [totalPosts, publishedPosts, draftPosts, totalTags, totalCategories] = stats

  const recentPosts = await prisma.blogPost.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      author: { select: { name: true, email: true } },
    },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your blog content and settings</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-blue-600">{totalPosts}</div>
          <div className="text-gray-600 text-sm">Total Posts</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-green-600">{publishedPosts}</div>
          <div className="text-gray-600 text-sm">Published</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-orange-600">{draftPosts}</div>
          <div className="text-gray-600 text-sm">Drafts</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-purple-600">{totalTags}</div>
          <div className="text-gray-600 text-sm">Tags</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-teal-600">{totalCategories}</div>
          <div className="text-gray-600 text-sm">Categories</div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {recentPosts.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              No blog posts yet. <a href="/admin/blog/new" className="text-blue-600 hover:underline">Create your first post</a>
            </div>
          ) : (
            recentPosts.map((post) => (
              <div key={post.id} className="px-6 py-4 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    By {post.author.name || post.author.email} • {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.published 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                  
                  <a 
                    href={`/admin/blog/edit/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Edit
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/admin/blog/new"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-6 text-center transition-colors"
        >
          <div className="text-2xl font-bold">Create New Post</div>
          <div className="text-blue-100 text-sm mt-1">Start writing a new blog post</div>
        </a>
        
        <a
          href="/admin/blog"
          className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg p-6 text-center transition-colors"
        >
          <div className="text-2xl font-bold">Manage Posts</div>
          <div className="text-gray-100 text-sm mt-1">View and edit existing posts</div>
        </a>
        
        <a
          href="/admin/categories"
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg p-6 text-center transition-colors"
        >
          <div className="text-2xl font-bold">Organize Content</div>
          <div className="text-teal-100 text-sm mt-1">Manage categories and tags</div>
        </a>
      </div>
    </div>
  )
}