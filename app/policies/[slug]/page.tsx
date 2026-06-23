// // app/policies/[slug]/page.tsx
// import { notFound } from 'next/navigation';
// import { getPolicyBySlug } from '@/lib/firebase';
// import PolicyDetail from '@/components/policies/PolicyDetail';

// export default async function PolicyPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const { policy } = await getPolicyBySlug(slug);

//   if (!policy) {
//     notFound();
//   }

//   return <PolicyDetail policy={policy} />;
// }

import React from 'react'

const PolicyPage = () => {
  return (
    <div>PolicyPage</div>
  )
}

export default PolicyPage