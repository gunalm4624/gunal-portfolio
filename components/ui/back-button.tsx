'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-8 left-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
      >
        <ArrowLeft size={16} />
        Back
      </button>
    </div>
  );
};
