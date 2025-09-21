"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import { useCallback } from "react"

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

const MenuBar = ({ editor }: { editor: any }) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL")
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    if (url === null) {
      return
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className="border-b border-gray-200 p-2 flex flex-wrap gap-1">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("bold") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("italic") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("strike") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("code") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Code
      </button>
      <div className="w-px bg-gray-300 mx-2"></div>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("heading", { level: 1 }) ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("heading", { level: 2 }) ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("heading", { level: 3 }) ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        H3
      </button>
      <div className="w-px bg-gray-300 mx-2"></div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("bulletList") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("orderedList") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Numbered List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("blockquote") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Quote
      </button>
      <div className="w-px bg-gray-300 mx-2"></div>
      <button
        onClick={setLink}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("link") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        }`}
      >
        Link
      </button>
      <button
        onClick={addImage}
        className="px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
      >
        Image
      </button>
      <div className="w-px bg-gray-300 mx-2"></div>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`px-3 py-1 rounded text-sm font-medium ${
          editor.isActive("highlight") ? "bg-yellow-100 text-yellow-700" : "hover:bg-gray-100"
        }`}
      >
        Highlight
      </button>
    </div>
  )
}

export function RichTextEditor({ content, onChange, placeholder = "Start writing..." }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      TextStyle,
      Color,
      Highlight,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none p-4 min-h-[300px]",
      },
    },
  })

  return (
    <div className="border border-gray-300 rounded-lg bg-white">
      <MenuBar editor={editor} />
      <EditorContent 
        editor={editor} 
        placeholder={placeholder}
      />
    </div>
  )
}