// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { BlogPost } from '@/lib/firebase';

// interface BlogListProps {
//   blogs: BlogPost[];
// }

// export default function BlogList({ blogs }: BlogListProps) {
//   const featuredBlogs = blogs.filter(blog => blog.featured).slice(0, 3);
//   const regularBlogs = blogs.filter(blog => !blog.featured);

//   if (blogs.length === 0) {
//     return (
//       <section className="pt-32 pb-16 min-h-[60vh] flex items-center justify-center">
//         <div className="container mx-auto px-4 lg:px-8 text-center">
//           <div className="max-w-2xl mx-auto">
//             <div className="text-6xl mb-6">📝</div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pally">
//               No Blogs Yet
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               We&apos;re working on bringing you insightful content. Check back soon!
//             </p>
//             <Link 
//               href="/"
//               className="inline-block bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-pally"
//             >
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 bg-gradient-to-br from-[#fefcf6] via-white to-[#f6efaa]/10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-4xl mx-auto mb-16"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               className="inline-block bg-white border-2 border-gray-200 rounded-full px-6 py-3 mb-8 shadow-sm"
//             >
//               <span className="text-gray-700 font-semibold text-sm uppercase tracking-wider font-pally">
//                 Insights & Stories
//               </span>
//             </motion.div>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight font-pally">
//               Our <span className="bg-gradient-to-r from-[#fa3035] to-[#800000] bg-clip-text text-transparent">Blog</span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
//               Industry insights, latex nutrition facts, sustainability practices, and stories from the heart of Primerival International Pte Ltd.
//             </p>
//           </motion.div>

//           {/* Featured Blogs */}
//           {featuredBlogs.length > 0 && (
//             <div className="grid md:grid-cols-3 gap-8 mb-16">
//               {featuredBlogs.map((blog, index) => (
//                 <motion.div
//                   key={blog.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                 >
//                   <Link href={`/blogs/${blog.slug}`}>
//                     <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 h-full">
//                       <div className="relative h-64 overflow-hidden">
//                         <Image
//                           src={blog.coverImage}
//                           alt={blog.title}
//                           fill
//                           className="object-cover group-hover:scale-110 transition-transform duration-500"
//                         />
//                         <div className="absolute top-4 left-4">
//                           <span className="bg-[#fa3035] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
//                             Featured
//                           </span>
//                         </div>
//                       </div>
//                       <div className="p-6">
//                         <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
//                           <span>{blog.category}</span>
//                           <span>•</span>
//                           <span>{blog.readTime} min read</span>
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#fa3035] transition-colors font-pally">
//                           {blog.title}
//                         </h3>
//                         <p className="text-gray-600 mb-4 line-clamp-2">
//                           {blog.excerpt}
//                         </p>
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm text-gray-500">{blog.author}</span>
//                           <span className="text-[#fa3035] font-semibold group-hover:translate-x-2 transition-transform">
//                             Read More →
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Regular Blogs Grid */}
//       {regularBlogs.length > 0 && (
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4 lg:px-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-pally">
//               Latest Articles
//             </h2>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {regularBlogs.map((blog, index) => (
//                 <motion.div
//                   key={blog.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                 >
//                   <Link href={`/blogs/${blog.slug}`}>
//                     <div className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
//                       <div className="relative h-56 overflow-hidden">
//                         <Image
//                           src={blog.coverImage}
//                           alt={blog.title}
//                           fill
//                           className="object-cover group-hover:scale-110 transition-transform duration-500"
//                         />
//                       </div>
//                       <div className="p-6">
//                         <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
//                           <span className="bg-gray-100 px-3 py-1 rounded-full font-semibold">
//                             {blog.category}
//                           </span>
//                           <span>{blog.readTime} min</span>
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#fa3035] transition-colors font-pally line-clamp-2">
//                           {blog.title}
//                         </h3>
//                         <p className="text-gray-600 mb-4 line-clamp-3">
//                           {blog.excerpt}
//                         </p>
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-gray-500">{blog.author}</span>
//                           <span className="text-[#fa3035] font-semibold">Read →</span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }

import React from 'react'

const BlogList = () => {
  return (
    <div>BlogList</div>
  )
}

export default BlogList