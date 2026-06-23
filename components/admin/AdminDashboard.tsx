// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { signOutAdmin, getContacts, getSubscribers, getBlogPosts, getPolicies } from '@/lib/firebase';
// import BlogManager from './BlogManager';
// import PolicyManager from './PolicyManager';

// interface Contact {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   message: string;
//   productInterest: string;
//   timestamp: any;
// }

// interface Subscriber {
//   id: string;
//   email: string;
//   timestamp: any;
//   subscribed: boolean;
// }

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState('blogs');
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
//   const [blogCount, setBlogCount] = useState(0);
//   const [policyCount, setPolicyCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setLoading(true);
    
//     const [contactsResult, subscribersResult, blogsResult, policiesResult] = await Promise.all([
//       getContacts(),
//       getSubscribers(),
//       getBlogPosts(),
//       getPolicies()
//     ]);

//     if (contactsResult.success) {
//       setContacts(contactsResult.data);
//     }

//     if (subscribersResult.success) {
//       setSubscribers(subscribersResult.data);
//     }

//     if (blogsResult.success) {
//       setBlogCount(blogsResult.blogs.length);
//     }

//     if (policiesResult.success) {
//       setPolicyCount(policiesResult.policies.length);
//     }

//     setLoading(false);
//   };

//   const handleSignOut = async () => {
//     await signOutAdmin();
//   };

//   const formatDate = (timestamp: any) => {
//     if (timestamp?.toDate) {
//       return timestamp.toDate().toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//       });
//     }
//     return 'N/A';
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-4xl mb-4">⏳</div>
//           <p className="text-gray-600">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b sticky top-0 z-50">
//         <div className="container mx-auto px-4 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold text-[#800000] font-pally">Admin Dashboard</h1>
//             <div className="flex items-center space-x-4">
//               <a href="/" className="text-[#fa3035] hover:underline font-semibold">
//                 Visit Website
//               </a>
//               <button
//                 onClick={handleSignOut}
//                 className="bg-[#fa3035] text-white px-6 py-2 rounded-full hover:bg-[#800000] transition-colors font-semibold"
//               >
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
//           >
//             <div className="flex items-center">
//               <div className="text-3xl mr-4">📝</div>
//               <div>
//                 <div className="text-2xl font-bold text-[#800000] font-pally">{blogCount}</div>
//                 <div className="text-gray-600 text-sm">Blog Posts</div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
//           >
//             <div className="flex items-center">
//               <div className="text-3xl mr-4">📧</div>
//               <div>
//                 <div className="text-2xl font-bold text-[#800000] font-pally">{contacts.length}</div>
//                 <div className="text-gray-600 text-sm">Contact Inquiries</div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
//           >
//             <div className="flex items-center">
//               <div className="text-3xl mr-4">📬</div>
//               <div>
//                 <div className="text-2xl font-bold text-[#800000] font-pally">{subscribers.length}</div>
//                 <div className="text-gray-600 text-sm">Subscribers</div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
//           >
//             <div className="flex items-center">
//               <div className="text-3xl mr-4">🔥</div>
//               <div>
//                 <div className="text-2xl font-bold text-[#800000] font-pally">{contacts.length + subscribers.length}</div>
//                 <div className="text-gray-600 text-sm">Total Leads</div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35 }}
//             className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
//           >
//             <div className="flex items-center">
//               <div className="text-3xl mr-4">📄</div>
//               <div>
//                 <div className="text-2xl font-bold text-[#800000] font-pally">{policyCount}</div>
//                 <div className="text-gray-600 text-sm">Policies</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
//           <div className="border-b border-gray-200">
//             <nav className="flex overflow-x-auto">
//               <button
//                 onClick={() => setActiveTab('blogs')}
//                 className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap font-pally ${
//                   activeTab === 'blogs'
//                     ? 'bg-[#fa3035] text-white'
//                     : 'text-gray-600 hover:text-[#fa3035] hover:bg-gray-50'
//                 }`}
//               >
//                 📝 Blog Posts ({blogCount})
//               </button>
//               <button
//                 onClick={() => setActiveTab('contacts')}
//                 className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap font-pally ${
//                   activeTab === 'contacts'
//                     ? 'bg-[#fa3035] text-white'
//                     : 'text-gray-600 hover:text-[#fa3035] hover:bg-gray-50'
//                 }`}
//               >
//                 📧 Contacts ({contacts.length})
//               </button>
//               <button
//                 onClick={() => setActiveTab('subscribers')}
//                 className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap font-pally ${
//                   activeTab === 'subscribers'
//                     ? 'bg-[#fa3035] text-white'
//                     : 'text-gray-600 hover:text-[#fa3035] hover:bg-gray-50'
//                 }`}
//               >
//                 📬 Subscribers ({subscribers.length})
//               </button>
//               <button
//                 onClick={() => setActiveTab('policies')}
//                 className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap font-pally ${
//                   activeTab === 'policies'
//                     ? 'bg-[#fa3035] text-white'
//                     : 'text-gray-600 hover:text-[#fa3035] hover:bg-gray-50'
//                 }`}
//               >
//                 📄 Policies ({policyCount})
//               </button>
//             </nav>
//           </div>

//           <div className="p-6">
//             {activeTab === 'blogs' && <BlogManager />}

//             {activeTab === 'contacts' && (
//               <div className="space-y-4">
//                 {contacts.length === 0 ? (
//                   <p className="text-gray-500 text-center py-8">No contact inquiries yet.</p>
//                 ) : (
//                   contacts.map((contact) => (
//                     <motion.div
//                       key={contact.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100"
//                     >
//                       <div className="grid md:grid-cols-2 gap-4">
//                         <div>
//                           <div className="font-semibold text-[#800000] text-lg font-pally">{contact.name}</div>
//                           <div className="text-gray-600">{contact.email}</div>
//                           <div className="text-gray-600">{contact.phone}</div>
//                           {contact.company && (
//                             <div className="text-gray-600">{contact.company}</div>
//                           )}
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm text-gray-500">{formatDate(contact.timestamp)}</div>
//                           {contact.productInterest && (
//                             <div className="text-sm bg-[#f6efaa] text-[#800000] px-3 py-1 rounded-full mt-2 inline-block font-semibold">
//                               {contact.productInterest}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       {contact.message && (
//                         <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
//                           <div className="text-sm font-semibold text-gray-700 mb-1">Message:</div>
//                           <div className="text-gray-700">{contact.message}</div>
//                         </div>
//                       )}
//                     </motion.div>
//                   ))
//                 )}
//               </div>
//             )}

//             {activeTab === 'subscribers' && (
//               <div className="space-y-4">
//                 {subscribers.length === 0 ? (
//                   <p className="text-gray-500 text-center py-8">No newsletter subscribers yet.</p>
//                 ) : (
//                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {subscribers.map((subscriber) => (
//                       <motion.div
//                         key={subscriber.id}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100"
//                       >
//                         <div className="font-semibold text-[#800000] font-pally">{subscriber.email}</div>
//                         <div className="text-sm text-gray-500">{formatDate(subscriber.timestamp)}</div>
//                         <div className="mt-2">
//                           <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
//                             ✓ Subscribed
//                           </span>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === 'policies' && <PolicyManager />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const AdminDashboard = () => {
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard