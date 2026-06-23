// // components/admin/PolicyManager.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import RichTextEditor from './RichTextEditor';
// import { Policy, savePolicy, getPolicies, updatePolicy, deletePolicy, getPolicyById } from '@/lib/firebase';

// export default function PolicyManager() {
//   const [policies, setPolicies] = useState<Policy[]>([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingPolicy, setEditingPolicy] = useState<Policy | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [formData, setFormData] = useState({
//     title: '',
//     slug: '',
//     content: '',
//     category: 'other' as Policy['category'],
//     version: '1.0',
//     published: false,
//   });

//   useEffect(() => {
//     loadPolicies();
//   }, []);

//   const loadPolicies = async () => {
//     setLoading(true);
//     const result = await getPolicies();
//     if (result.success) {
//       setPolicies(result.policies);
//     }
//     setLoading(false);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     const policyData = {
//       ...formData,
//       lastUpdated: new Date(),
//     };

//     let result;
//     if (editingPolicy?.id) {
//       result = await updatePolicy(editingPolicy.id, policyData);
//     } else {
//       result = await savePolicy(policyData);
//     }

//     if (result.success) {
//       alert(editingPolicy ? 'Policy updated successfully!' : 'Policy created successfully!');
//       resetForm();
//       loadPolicies();
//     } else {
//       alert('Error saving policy: ' + result.error);
//     }

//     setSaving(false);
//   };

//   const handleEdit = async (policy: Policy) => {
//     if (policy.id) {
//       const result = await getPolicyById(policy.id);
//       if (result.success && result.policy) {
//         setEditingPolicy(result.policy);
//         setFormData({
//           title: result.policy.title,
//           slug: result.policy.slug,
//           content: result.policy.content,
//           category: result.policy.category,
//           version: result.policy.version,
//           published: result.policy.published,
//         });
//         setIsEditing(true);
//       }
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (confirm('Are you sure you want to delete this policy?')) {
//       const result = await deletePolicy(id);
//       if (result.success) {
//         alert('Policy deleted successfully!');
//         loadPolicies();
//       } else {
//         alert('Error deleting policy: ' + result.error);
//       }
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       slug: '',
//       content: '',
//       category: 'other',
//       version: '1.0',
//       published: false,
//     });
//     setEditingPolicy(null);
//     setIsEditing(false);
//   };

//   const generateSlug = (title: string) => {
//     return title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '');
//   };

//   const getCategoryBadge = (category: string) => {
//     const badges: Record<string, { bg: string; text: string; emoji: string }> = {
//       privacy: { bg: 'bg-blue-100', text: 'text-blue-700', emoji: '🔒' },
//       terms: { bg: 'bg-purple-100', text: 'text-purple-700', emoji: '📜' },
//       shipping: { bg: 'bg-green-100', text: 'text-green-700', emoji: '📦' },
//       refund: { bg: 'bg-orange-100', text: 'text-orange-700', emoji: '💰' },
//       other: { bg: 'bg-gray-100', text: 'text-gray-700', emoji: '📄' },
//     };
//     const badge = badges[category] || badges.other;
//     return (
//       <span className={`inline-flex items-center space-x-1 ${badge.bg} ${badge.text} px-3 py-1 rounded-full text-xs font-semibold`}>
//         <span>{badge.emoji}</span>
//         <span>{category}</span>
//       </span>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-12">
//         <div className="text-4xl mb-4">⏳</div>
//         <p className="text-gray-600">Loading policies...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-[#800000] font-pally">
//           {isEditing ? (editingPolicy ? 'Edit Policy' : 'Create New Policy') : 'Policies'}
//         </h2>
//         {!isEditing && (
//           <button
//             onClick={() => setIsEditing(true)}
//             className="bg-[#fa3035] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#800000] transition-colors flex items-center space-x-2"
//           >
//             <span>➕</span>
//             <span>Create Policy</span>
//           </button>
//         )}
//       </div>

//       {/* Form */}
//       {isEditing ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Policy Title *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => {
//                     setFormData({ ...formData, title: e.target.value });
//                     if (!editingPolicy) {
//                       setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) });
//                     }
//                   }}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fa3035] outline-none transition-colors"
//                   placeholder="e.g., Privacy Policy"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Slug *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.slug}
//                   onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fa3035] outline-none transition-colors"
//                   placeholder="privacy-policy"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Category *
//                 </label>
//                 <select
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value as Policy['category'] })}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fa3035] outline-none transition-colors"
//                   required
//                 >
//                   <option value="privacy">🔒 Privacy Policy</option>
//                   <option value="terms">📜 Terms & Conditions</option>
//                   <option value="shipping">📦 Shipping Policy</option>
//                   <option value="refund">💰 Refund Policy</option>
//                   <option value="other">📄 Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Version
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.version}
//                   onChange={(e) => setFormData({ ...formData, version: e.target.value })}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fa3035] outline-none transition-colors"
//                   placeholder="1.0"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Policy Content *
//               </label>
//               <RichTextEditor
//                 content={formData.content}
//                 onChange={(content) => setFormData({ ...formData, content })}
//               />
//             </div>

//             <div className="flex items-center space-x-3">
//               <input
//                 type="checkbox"
//                 id="published"
//                 checked={formData.published}
//                 onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
//                 className="w-5 h-5 text-[#fa3035] border-gray-300 rounded focus:ring-[#fa3035]"
//               />
//               <label htmlFor="published" className="text-sm font-semibold text-gray-700">
//                 Publish this policy (make it visible on the website)
//               </label>
//             </div>

//             <div className="flex space-x-4 pt-4">
//               <button
//                 type="submit"
//                 disabled={saving}
//                 className="bg-[#fa3035] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#800000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {saving ? 'Saving...' : (editingPolicy ? 'Update Policy' : 'Create Policy')}
//               </button>
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       ) : (
//         /* Policy List */
//         <div className="space-y-4">
//           {policies.length === 0 ? (
//             <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
//               <div className="text-6xl mb-4">📄</div>
//               <p className="text-gray-600 text-lg mb-4">No policies created yet</p>
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="bg-[#fa3035] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#800000] transition-colors"
//               >
//                 Create Your First Policy
//               </button>
//             </div>
//           ) : (
//             policies.map((policy) => (
//               <motion.div
//                 key={policy.id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-2">
//                       <h3 className="text-xl font-bold text-[#800000] font-pally">
//                         {policy.title}
//                       </h3>
//                       {getCategoryBadge(policy.category)}
//                       {policy.published ? (
//                         <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
//                           ✓ Published
//                         </span>
//                       ) : (
//                         <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
//                           Draft
//                         </span>
//                       )}
//                     </div>
//                     <p className="text-gray-600 text-sm mb-2">
//                       <span className="font-semibold">Slug:</span> /{policy.slug}
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       Version {policy.version} • Last updated: {policy.lastUpdated.toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                   <div className="flex space-x-2">
//                     {policy.published && (
//                       <a
//                         href={`/policies/${policy.slug}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors text-sm"
//                       >
//                         👁️ View
//                       </a>
//                     )}
//                     <button
//                       onClick={() => handleEdit(policy)}
//                       className="bg-[#f6efaa] text-[#800000] px-4 py-2 rounded-lg font-semibold hover:bg-[#e4d7bc] transition-colors text-sm"
//                     >
//                       ✏️ Edit
//                     </button>
//                     <button
//                       onClick={() => policy.id && handleDelete(policy.id)}
//                       className="bg-red-50 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors text-sm"
//                     >
//                       🗑️ Delete
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react'

export const PolicyManager = () => {
  return (
    <div>PolicyManager</div>
  )
}
