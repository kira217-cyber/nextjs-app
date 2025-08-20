'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AddProductPage from './AddProductForm/AddProductForm';


export default function ProtectedAddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Loading state
  if (status === 'loading') return <div>Loading...</div>;

  // যদি ইউজার লগইন না থাকে, তাহলে /login এ পাঠিয়ে দিন
  if (!session) {
    router.push('/login');
    return null;
  }

  // ইউজার লগইন থাকলে AddProductForm দেখান
  return (
    <div>
        <AddProductPage></AddProductPage>
    </div>
  );
}