// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { BlogPost, getBlogPosts, saveBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/firebase';
// import RichTextEditor from './RichTextEditor';

// export default function BlogManager() {
//   const [blogs, setBlogs] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showEditor, setShowEditor] = useState(false);
//   const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
//   const [saving, setSaving] = useState(false);

//   const [formData, setFormData] = useState({
//     title: '',
//     slug: '',
//     excerpt: '',
//     content: '',
//     coverImage: '',
//     author: 'Primerival International Pte Ltd Team',
//     category: 'Industry News',
//     tags: [] as string[],
//     featured: false,
//     readTime: 5,
//   });

//   const [tagInput, setTagInput] = useState('');

//   useEffect(() => {
//     loadBlogs();
//   }, []);

//   const loadBlogs = async () => {
//     setLoading(true);
//     const result = await getBlogPosts();
//     if (result.success) {
//       setBlogs(result.blogs);
//     }
//     setLoading(false);
//   };

//   const handleInputChange = (field: string, value: any) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
    
//     // Auto-generate slug from title
//     if (field === 'title') {
//       const slug = value.toLowerCase()
//         .replace(/[^a-z0-9]+/g, '-')
//         .replace(/(^-|-$)/g, '');
//       setFormData(prev => ({ ...prev, slug }));
//     }
//   };

//   const addTag = () => {
//     if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
//       setFormData(prev => ({
//         ...prev,
//         tags: [...prev.tags, tagInput.trim()]
//       }));
//       setTagInput('');
//     }
//   };

//   const removeTag = (tag: string) => {
//     setFormData(prev => ({
//       ...prev,
//       tags: prev.tags.filter(t => t !== tag)
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       const blogData = {
//         ...formData,
//         publishedAt: editingBlog?.publishedAt || new Date(),
//         updatedAt: new Date(),
//       };

//       let result;
//       if (editingBlog) {
//         result = await updateBlogPost(editingBlog.id!, blogData);
//       } else {
//         result = await saveBlogPost(blogData);
//       }

//       if (result.success) {
//         alert(editingBlog ? 'Blog updated successfully!' : 'Blog published successfully!');
//         resetForm();
//         loadBlogs();
//         setShowEditor(false);
//       } else {
//         alert('Error saving blog. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error saving blog. Please try again.');
//     }

//     setSaving(false);
//   };

//   const handleEdit = async (blog: BlogPost) => {
//     setEditingBlog(blog);
//     setFormData({
//       title: blog.title,
//       slug: blog.slug,
//       excerpt: blog.excerpt,
//       content: blog.content,
//       coverImage: blog.coverImage,
//       author: blog.author,
//       category: blog.category,
//       tags: blog.tags,
//       featured: blog.featured,
//       readTime: blog.readTime,
//     });
//     setShowEditor(true);
//   };

//   const handleDelete = async (id: string) => {
//     if (confirm('Are you sure you want to delete this blog post?')) {
//       const result = await deleteBlogPost(id);
//       if (result.success) {
//         alert('Blog deleted successfully!');
//         loadBlogs();
//       } else {
//         alert('Error deleting blog. Please try again.');
//       }
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       slug: '',
//       excerpt: '',
//       content: '',
//       coverImage: '',
//       author: 'Primerival International Pte Ltd Team',
//       category: 'Industry News',
//       tags: [],
//       featured: false,
//       readTime: 5,
//     });
//     setEditingBlog(null);
//     setTagInput('');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-12">
//         <div className="text-center">
//           <div className="text-4xl mb-4">⏳</div>
//           <p className="text-gray-600">Loading blogs...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-gray-900 font-pally">Blog Management</h2>
//         <button
//           onClick={() => {
//             resetForm();
//             setShowEditor(!showEditor);
//           }}
//           className="bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
//         >
//           {showEditor ? '✕ Cancel' : '+ New Blog Post'}
//         </button>
//       </div>

//       {/* Editor */}
//       <AnimatePresence>
//         {showEditor && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden"
//           >
//             <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 font-pally">
//                 {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
//               </h3>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 space-y-6">
//               {/* Title & Slug */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-800 mb-2">
//                     Title *
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.title}
//                     onChange={(e) => handleInputChange('title', e.target.value)}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none"
//                     placeholder="Enter blog title"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-800 mb-2">
//                     Slug *
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.slug}
//                     onChange={(e) => handleInputChange('slug', e.target.value)}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none"
//                     placeholder="blog-post-url"
//                   />
//                 </div>
//               </div>

//               {/* Excerpt */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-800 mb-2">
//                   Excerpt *
//                 </label>
//                 <textarea
//                   value={formData.excerpt}
//                   onChange={(e) => handleInputChange('excerpt', e.target.value)}
//                   required
//                   rows={3}
//                   className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none resize-none"
//                   placeholder="Brief description of the blog post"
//                 />
//               </div>

//               {/* Content - Rich Text Editor */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-800 mb-2">
//                   Content *
//                 </label>
//                 <RichTextEditor
//                   content={formData.content}
//                   onChange={(html) => handleInputChange('content', html)}
//                 />
//               </div>

//               {/* Cover Image, Author, Category */}
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-800 mb-2">
//                     Cover Image URL *
//                   </label>
//                   <input
//                     type="url"
//                     value={formData.coverImage}
//                     onChange={(e) => handleInputChange('coverImage', e.target.value)}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none"
//                     placeholder="https://..."
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-800 mb-2">
//                     Author *
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.author}
//                     onChange={(e) => handleInputChange('author', e.target.value)}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-800 mb-2">
//                     Category *
//                   </label>
//                   <select
//                     value={formData.category}
//                     onChange={(e) => handleInputChange('category', e.target.value)}
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none"
//                   >
//                     <option>Industry News</option>
//                     <option>Nutrition</option>
//                     <option>Sustainability</option>
//                     <option>Recipes</option>
//                     <option>Company Updates</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Read Time & Featured */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-800 mb-2">
//                     Read Time (minutes) *
//                   </label>
//                   <input
//                     type="number"
//                     value={formData.readTime}
//                     onChange={(e) => handleInputChange('readTime', parseInt(e.target.value))}
//                     required
//                     min="1"
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none"
//                   />
//                 </div>

//                 <div className="flex items-center">
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={formData.featured}
//                       onChange={(e) => handleInputChange('featured', e.target.checked)}
//                       className="w-5 h-5 text-[#fa3035] border-2 border-gray-300 rounded focus:ring-[#fa3035]"
//                     />
//                     <span className="ml-3 text-sm font-semibold text-gray-800">
//                       Featured Blog Post
//                     </span>
//                   </label>
//                 </div>
//               </div>

//               {/* Tags */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-800 mb-2">
//                   Tags
//                 </label>
//                 <div className="flex gap-2 mb-3">
//                   <input
//                     type="text"
//                     value={tagInput}
//                     onChange={(e) => setTagInput(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
//                     className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none"
//                     placeholder="Add a tag and press Enter"
//                   />
//                   <button
//                     type="button"
//                     onClick={addTag}
//                     className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-semibold transition-colors"
//                   >
//                     Add
//                   </button>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {formData.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-[#f6efaa] text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
//                     >
//                       #{tag}
//                       <button
//                         type="button"
//                         onClick={() => removeTag(tag)}
//                         className="text-red-600 hover:text-red-800 font-bold"
//                       >
//                         ×
//                       </button>
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Submit */}
//               <div className="flex gap-4 pt-4">
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="flex-1 bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-pally"
//                 >
//                   {saving ? 'Saving...' : (editingBlog ? 'Update Blog Post' : 'Publish Blog Post')}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     resetForm();
//                     setShowEditor(false);
//                   }}
//                   className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 font-pally"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Blog List */}
//       <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
//         <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-100">
//           <h3 className="text-xl font-bold text-gray-900 font-pally">
//             Published Blogs ({blogs.length})
//           </h3>
//         </div>

//         <div className="divide-y divide-gray-100">
//           {blogs.length === 0 ? (
//             <div className="p-12 text-center text-gray-500">
//               <div className="text-4xl mb-4">📝</div>
//               <p>No blog posts yet. Create your first one!</p>
//             </div>
//           ) : (
//             blogs.map((blog) => (
//               <motion.div
//                 key={blog.id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="p-6 hover:bg-gray-50 transition-colors"
//               >
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <div className="flex-1">
//                     <div className="flex items-start gap-3 mb-3">
//                       <h4 className="text-xl font-bold text-gray-900 font-pally flex-1">
//                         {blog.title}
//                       </h4>
//                       {blog.featured && (
//                         <span className="bg-[#fa3035] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
//                           Featured
//                         </span>
//                       )}
//                     </div>
//                     <p className="text-gray-600 mb-3 line-clamp-2">{blog.excerpt}</p>
//                     <div className="flex flex-wrap gap-4 text-sm text-gray-500">
//                       <span className="font-semibold">{blog.category}</span>
//                       <span>•</span>
//                       <span>{blog.author}</span>
//                       <span>•</span>
//                       <span>{blog.readTime} min read</span>
//                       <span>•</span>
//                       <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
//                     </div>
//                     {blog.tags.length > 0 && (
//                       <div className="flex flex-wrap gap-2 mt-3">
//                         {blog.tags.map((tag, idx) => (
//                           <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex md:flex-col gap-2">
//                     <button
//                       onClick={() => handleEdit(blog)}
//                       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold text-sm"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(blog.id!)}
//                       className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold text-sm"
//                     >
//                       Delete
//                     </button>
//                     <a
//                       href={`/blogs/${blog.slug}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-sm text-center"
//                     >
//                       View
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const BlogManager = () => {
  return (
    <div>BlogManager</div>
  )
}

export default BlogManager