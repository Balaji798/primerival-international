'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { TextStyleKit } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { useEffect } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#fa3035] underline hover:text-[#800000] cursor-pointer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-xl my-4',
        },
      }),
      TextStyleKit,
      Color,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptap-content',
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl);
    
    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-lg">
      {/* Toolbar */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200 p-3 flex flex-wrap gap-2">
        {/* Heading Buttons */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`px-4 py-2 rounded-lg font-bold text-base transition-all ${
              editor.isActive('heading', { level: 1 })
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Heading 1"
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`px-4 py-2 rounded-lg font-bold text-base transition-all ${
              editor.isActive('heading', { level: 2 })
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`px-4 py-2 rounded-lg font-bold text-base transition-all ${
              editor.isActive('heading', { level: 3 })
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Heading 3"
          >
            H3
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              editor.isActive('paragraph')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Paragraph"
          >
            P
          </button>
        </div>

        <div className="w-px h-10 bg-gray-300"></div>

        {/* Text Formatting */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-4 py-2 rounded-lg font-bold text-base transition-all ${
              editor.isActive('bold')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Bold"
          >
            B
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-4 py-2 rounded-lg italic text-base transition-all ${
              editor.isActive('italic')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Italic"
          >
            I
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`px-4 py-2 rounded-lg line-through text-base transition-all ${
              editor.isActive('strike')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Strikethrough"
          >
            S
          </button>
        </div>

        <div className="w-px h-10 bg-gray-300"></div>

        {/* Lists */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-4 py-2 rounded-lg text-base transition-all ${
              editor.isActive('bulletList')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Bullet List"
          >
            • List
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-4 py-2 rounded-lg text-base transition-all ${
              editor.isActive('orderedList')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Numbered List"
          >
            1. List
          </button>
        </div>

        <div className="w-px h-10 bg-gray-300"></div>

        {/* Links & Images */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={setLink}
            className={`px-4 py-2 rounded-lg text-base transition-all ${
              editor.isActive('link')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Add Link"
          >
            🔗 Link
          </button>
          {editor.isActive('link') && (
            <button
              type="button"
              onClick={() => editor.chain().focus().unsetLink().run()}
              className="px-4 py-2 rounded-lg text-base bg-red-100 hover:bg-red-200 text-red-700 border border-red-300 transition-all"
              title="Remove Link"
            >
              ✕
            </button>
          )}
          <button
            type="button"
            onClick={addImage}
            className="px-4 py-2 rounded-lg text-base bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-all"
            title="Add Image"
          >
            🖼️ Image
          </button>
        </div>

        <div className="w-px h-10 bg-gray-300"></div>

        {/* Quote & Horizontal Rule */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`px-4 py-2 rounded-lg text-base transition-all ${
              editor.isActive('blockquote')
                ? 'bg-[#fa3035] text-white shadow-lg scale-105'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
            title="Quote"
          >
            " Quote
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="px-4 py-2 rounded-lg text-base bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-all"
            title="Horizontal Line"
          >
            ―
          </button>
        </div>

        <div className="w-px h-10 bg-gray-300"></div>

        {/* Undo/Redo */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="px-4 py-2 rounded-lg text-base bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            title="Undo"
          >
            ↶
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="px-4 py-2 rounded-lg text-base bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            title="Redo"
          >
            ↷
          </button>
        </div>
      </div>

      {/* Editor Content Area with inline styles */}
      <div className="bg-white p-6 min-h-[300px]">
        <style jsx global>{`
          .tiptap-content {
            outline: none;
          }
          
          .tiptap-content h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #1f2937;
            font-family: 'Pally', sans-serif;
          }
          
          .tiptap-content h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-top: 1.75rem;
            margin-bottom: 0.875rem;
            color: #1f2937;
            font-family: 'Pally', sans-serif;
          }
          
          .tiptap-content h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: #1f2937;
            font-family: 'Pally', sans-serif;
          }
          
          .tiptap-content p {
            font-size: 1.125rem;
            line-height: 1.75;
            margin-bottom: 1rem;
            color: #374151;
          }
          
          .tiptap-content strong {
            font-weight: bold;
            color: #111827;
          }
          
          .tiptap-content em {
            font-style: italic;
          }
          
          .tiptap-content a {
            color: #fa3035;
            text-decoration: underline;
          }
          
          .tiptap-content a:hover {
            color: #800000;
          }
          
          .tiptap-content ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .tiptap-content ol {
            list-style-type: decimal;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .tiptap-content li {
            font-size: 1.125rem;
            line-height: 1.75;
            margin-bottom: 0.5rem;
            color: #374151;
          }
          
          .tiptap-content blockquote {
            border-left: 4px solid #fa3035;
            padding-left: 1.5rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            margin: 1.5rem 0;
            font-style: italic;
            color: #6b7280;
            background-color: #f9fafb;
            border-radius: 0 0.5rem 0.5rem 0;
          }
          
          .tiptap-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem 0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .tiptap-content hr {
            margin: 2rem 0;
            border: 0;
            border-top: 2px solid #e5e7eb;
          }
          
          .tiptap-content code {
            background-color: #f3f4f6;
            padding: 0.125rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            font-family: monospace;
            color: #fa3035;
          }
        `}</style>
        <EditorContent editor={editor} />
      </div>

      {/* Character Count Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-2 text-sm text-gray-500 flex justify-between items-center">
        <span>Click buttons above to format text</span>
        <span className="text-gray-400">Type to start writing...</span>
      </div>
    </div>
  );
}