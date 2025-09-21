"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { RichTextEditor } from "@/components/admin/RichTextEditor"
import { toast } from "react-hot-toast"

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  coverImage: string | null
  published: boolean
  author: {
    id: string
    name: string | null
    email: string
  }
}

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [loadingPost, setLoadingPost] = useState(true)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    coverImage: "",
    published: false,
  })

  useEffect(() => {
    fetchPost()
  }, [params.id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/admin/blog/${params.id}`)
      if (!response.ok) {
        throw new Error("Failed to fetch post")
      }
      
      const result = await response.json()
      const postData = result.data
      
      setPost(postData)
      setFormData({
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        excerpt: postData.excerpt || "",
        coverImage: postData.coverImage || "",
        published: postData.published,
      })
    } catch (error) {
      toast.error("Failed to load blog post")
      router.push("/admin/blog")
    } finally {
      setLoadingPost(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/admin/blog/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to update post")
      }

      toast.success("Blog post updated successfully!")
    } catch (error) {
      toast.error("Failed to update blog post")
      console.error("Error updating post:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`/api/admin/blog/${params.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete post")
      }

      toast.success("Blog post deleted successfully!")
      router.push("/admin/blog")
    } catch (error) {
      toast.error("Failed to delete blog post")
      console.error("Error deleting post:", error)
      setLoading(false)
    }
  }

  const handleSaveDraft = async () => {
    setFormData(prev => ({ ...prev, published: false }))
    const form = document.getElementById("blog-form") as HTMLFormElement
    form.requestSubmit()
  }

  const handlePublish = async () => {
    setFormData(prev => ({ ...prev, published: true }))
    const form = document.getElementById("blog-form") as HTMLFormElement
    form.requestSubmit()
  }

  if (loadingPost) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-lg text-gray-500">Loading blog post...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-lg text-gray-500">Blog post not found</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
          <p className="text-gray-600 mt-2">Update and manage your blog post</p>
        </div>
        
        <div className="flex space-x-3">
          {post.published && (
            <a
              href={`/blog/${post.slug}`}
              target="_blank"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Live
            </a>
          )}
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={loading}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={handlePublish}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:opacity-50"
          >
            {formData.published ? "Update" : "Publish"}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium disabled:opacity-50"
          >
            Delete
          </button>
        </div>
      </div>

      <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your blog post title"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
              Slug *
            </label>
            <input
              type="text"
              id="slug"
              required
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="post-url-slug"
            />
            <p className="text-sm text-gray-500 mt-1">
              This will be the URL: /blog/{formData.slug}
            </p>
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              rows={3}
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Brief description of your post (optional)"
            />
          </div>

          <div>
            <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-2">
              Cover Image URL
            </label>
            <input
              type="url"
              id="coverImage"
              value={formData.coverImage}
              onChange={(e) => setFormData(prev => ({ ...prev, coverImage: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Content *
          </label>
          <RichTextEditor
            content={formData.content}
            onChange={(content) => setFormData(prev => ({ ...prev, content }))}
            placeholder="Start writing your blog post..."
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Publishing Options</h3>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
              Published
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Uncheck to save as draft
          </p>
        </div>
      </form>
    </div>
  )
}