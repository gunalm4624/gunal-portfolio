"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { supabase, PersonalWork } from '@/lib/supabase';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Works() {
  const [works, setWorks] = useState<PersonalWork[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 12;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const { data, error } = await supabase
          .from('personal_works')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching works:', error);
          setWorks([]);
          return;
        }

        setWorks(data || []);
      } catch (err) {
        console.error('Error fetching works:', err);
        setWorks([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(works.length / worksPerPage);
  const startIndex = (currentPage - 1) * worksPerPage;
  const endIndex = startIndex + worksPerPage;
  const currentWorks = works.slice(startIndex, endIndex);

  if (isLoading) {
    return (
      <div className='mt-16 lg:mt-24 px-4 lg:px-0'>
        <div className="text-center lg:text-left">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-medium'>Design Explorations Wall</h1>
          <p className='mt-2 text-sm sm:text-base text-gray-700 leading-6 lg:leading-8'>A collection of experiments and ideas showcasing my design process and creativity.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 lg:mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-[18px] p-3 animate-pulse">
              <div className="relative w-full pb-[125%] bg-gray-200 rounded-[14px]"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='mt-16 lg:mt-24 px-4 lg:px-0'>
      <div className="text-center lg:text-left">
        <h1 className='text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-tight lg:leading-14 font-medium'>Design Explorations Wall</h1>
        <p className='mt-2 text-sm sm:text-base text-gray-700 leading-6 lg:leading-8'>A collection of experiments and ideas showcasing my design process and creativity.</p>
      </div>
      
      {works.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No personal works yet.</p>
          <p className="text-gray-500 mt-2">Add some works through the management panel to see them here.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 lg:mt-12">
            {currentWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-[18px] p-2 hover:shadow-lg transition-shadow duration-700 group">
                <div className="relative w-full pb-[125%] bg-gray-100 rounded-[12px] overflow-hidden">
                  <Image 
                    src={work.image_url} 
                    alt={work.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className='object-cover scale-100 group-hover:scale-103 transition-all duration-700 ease-out'
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" 
                      style={{ transform: 'skewX(-15deg)' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft size={16} />
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      currentPage === page
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}