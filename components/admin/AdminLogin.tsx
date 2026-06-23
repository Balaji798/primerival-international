// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { signInAdmin } from '@/lib/firebase';

// interface AdminLoginProps {
//   onLogin: () => void;
// }

// export default function AdminLogin({ onLogin }: AdminLoginProps) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const result = await signInAdmin(email, password);
//       if (result.success) {
//         onLogin();
//       } else {
//         setError('Invalid credentials. Please try again.');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#800000] to-[#fa3035] flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
//       >
//         <div className="text-center mb-8">
//           <div className="text-4xl mb-4">🔐</div>
//           <h1 className="text-3xl font-bold text-[#800000] mb-2">Admin Login</h1>
//           <p className="text-gray-600">Access your dashboard</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
//               {error}
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-semibold text-[#800000] mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none text-gray-800 transition-colors"
//               placeholder="admin@Primerival International Pte Ltd.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-[#800000] mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#fa3035] focus:outline-none text-gray-800 transition-colors"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
//           >
//             {loading ? 'Signing In...' : 'Sign In'}
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <a href="/" className="text-[#fa3035] hover:underline text-sm">
//             ← Back to Website
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
import React from 'react'

const AdminLogin = () => {
  return (
    <div>AdminLogin</div>
  )
}

export default AdminLogin