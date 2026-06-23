// 'use client';

// import { BlogPost } from '@/lib/firebase';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';

// interface BlogDetailProps {
//   blog: BlogPost;
// }

// export default function BlogDetail({ blog }: BlogDetailProps) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#fefcf6] via-white to-[#f6efaa]/10 pt-24 pb-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
//         {/* Back Button */}
//         <Link
//           href="/blogs"
//           className="inline-flex items-center gap-2 text-gray-600 hover:text-[#fa3035] mb-8 transition-colors group"
//         >
//           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//           <span className="font-semibold">Back to Blogs</span>
//         </Link>

//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Category Badge */}
//           <div className="mb-6">
//             <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#fa3035] to-[#800000] text-white rounded-full text-sm font-bold uppercase tracking-wider">
//               {blog.category}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-pally">
//             {blog.title}
//           </h1>

//           {/* Meta Info */}
//           <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
//             <div className="flex items-center gap-2">
//               <User className="w-5 h-5 text-[#fa3035]" />
//               <span className="font-medium">{blog.author}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Calendar className="w-5 h-5 text-[#fa3035]" />
//               <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { 
//                 year: 'numeric', 
//                 month: 'long', 
//                 day: 'numeric' 
//               })}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Clock className="w-5 h-5 text-[#fa3035]" />
//               <span>{blog.readTime} min read</span>
//             </div>
//           </div>

//           {/* Excerpt */}
//           <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-[#fa3035] mb-8">
//             <p className="text-xl text-gray-700 leading-relaxed font-medium">
//               {blog.excerpt}
//             </p>
//           </div>

//           {/* Cover Image */}
//           {blog.coverImage && (
//             <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
//               <Image
//                 src={blog.coverImage}
//                 alt={blog.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//             </div>
//           )}
//         </motion.div>

//         {/* Content */}
//         <motion.article
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="blog-content mb-12"
//         >
//           <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//         </motion.article>

//         {/* Tags */}
//         {blog.tags && blog.tags.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mb-12 pb-12 border-b border-gray-200"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <Tag className="w-5 h-5 text-[#fa3035]" />
//               <h3 className="text-lg font-bold text-gray-900 font-pally">Related Topics</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {blog.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-white border-2 border-gray-200 hover:border-[#fa3035] hover:bg-[#fa3035]/5 text-gray-700 hover:text-[#fa3035] rounded-full text-sm font-semibold transition-all cursor-pointer"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* CTA Section - Clean White Design */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           {/* Main CTA Card */}
//           <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-gray-100 text-center mb-8">
//             <span className="inline-block bg-[#fa3035] text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
//               Let's Connect
//             </span>
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-pally">
//               Interested in Our Premium{' '}
//               <span className="text-[#fa3035]">Latex Products?</span>
//             </h2>
            
//             <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
//               Discover our range of high-quality latex products trusted by food manufacturers and culinary professionals in over 15 countries worldwide.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Link href="/products">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-[#fa3035] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-[#fa3035]/90 transition-all duration-300"
//                 >
//                   View Products
//                 </motion.button>
//               </Link>
//               <Link href="/about">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-300"
//                 >
//                   Learn More About Us
//                 </motion.button>
//               </Link>
//             </div>
//           </div>

//           {/* Trust Indicators */}
//           <div className="grid grid-cols-3 gap-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-[#fa3035] transition-colors"
//             >
//               <div className="text-4xl font-bold text-[#fa3035] mb-2 font-pally">15+</div>
//               <div className="text-sm text-gray-600 font-semibold">Countries</div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-[#fa3035] transition-colors"
//             >
//               <div className="text-4xl font-bold text-[#fa3035] mb-2 font-pally">100%</div>
//               <div className="text-sm text-gray-600 font-semibold">Quality Assured</div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.0 }}
//               className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-[#fa3035] transition-colors"
//             >
//               <div className="text-4xl font-bold text-[#fa3035] mb-2 font-pally">8+</div>
//               <div className="text-sm text-gray-600 font-semibold">Certifications</div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Publish Date Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 1.2 }}
//           className="mt-12 text-center"
//         >
//           <p className="text-gray-500 text-sm">
//             Published on {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'long', 
//               day: 'numeric' 
//             })} • Last updated {new Date(blog.updatedAt).toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'long', 
//               day: 'numeric' 
//             })}
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import React from 'react'

const BlogDetail = () => {
  return (
    <div>BlogDetail</div>
  )
}

export default BlogDetail