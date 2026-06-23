// // components/policies/PolicyDetail.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { Policy } from '@/lib/firebase';

// interface PolicyDetailProps {
//   policy: Policy;
// }

// export default function PolicyDetail({ policy }: PolicyDetailProps) {
//   const getCategoryIcon = (category: string) => {
//     const icons: Record<string, string> = {
//       privacy: '🔒',
//       terms: '📜',
//       shipping: '📦',
//       refund: '💰',
//       other: '📄',
//     };
//     return icons[category] || '📄';
//   };

//   return (
//     <section className="pt-32 pb-16 bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <div className="text-6xl mb-4">{getCategoryIcon(policy.category)}</div>
//             <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4 font-pally">
//               {policy.title}
//             </h1>
//             <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
//               <span className="bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-full font-semibold">
//                 Version {policy.version}
//               </span>
//               <span>
//                 Last Updated: {policy.lastUpdated.toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric'
//                 })}
//               </span>
//             </div>
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100"
//           >
//             <div
//               className="blog-content prose prose-lg max-w-none"
//               dangerouslySetInnerHTML={{ __html: policy.content }}
//             />
//           </motion.div>

//           {/* Footer */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-12 text-center"
//           >
//             <p className="text-gray-600 mb-6">
//               Have questions about this policy? We're here to help.
//             </p>
//             <a
//               href="/#contact"
//               className="inline-block bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               Contact Us
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react'

const PolicyDetail = () => {
  return (
    <div>PolicyDetail</div>
  )
}

export default PolicyDetail