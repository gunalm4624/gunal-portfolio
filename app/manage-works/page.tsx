"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, PersonalWork } from '@/lib/supabase';
import { toast } from 'sonner';
import Image from 'next/image';
import {
  Edit as IconEdit,
  Trash2 as IconTrash,
  Plus as IconPlus,
  LogOut as IconLogout,
} from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

const PERSONAL_WORKS_PASSWORD = 'mypersonalworks';

export default function PersonalWorksManagePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [works, setWorks] = useState<PersonalWork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const router = useRouter();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PERSONAL_WORKS_PASSWORD) {
      setIsAuthenticated(true);
      toast.success('Access granted!');
    } else {
      toast.error('Incorrect password');
    }
  };

  const fetchWorks = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('personal_works')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching works:', error);
        toast.error('Failed to fetch works');
        return;
      }

      setWorks(data || []);
    } catch (error) {
      console.error('Error fetching works:', error);
      toast.error('Failed to fetch works');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteWork = async (workId: string) => {
    if (!confirm('Are you sure you want to delete this work? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(workId);
    try {
      // Delete from database
      const { error: dbError } = await supabase
        .from('personal_works')
        .delete()
        .eq('id', workId);

      if (dbError) {
        throw dbError;
      }

      // Delete image from storage bucket
      const { data: work } = await supabase
        .from('personal_works')
        .select('image_url')
        .eq('id', workId)
        .single();

      if (work?.image_url) {
        // Extract file path from URL
        if (work.image_url.includes('personal-works/')) {
          const filePath = work.image_url.split('personal-works/')[1];
          if (filePath) {
            await supabase.storage
              .from('personal-works')
              .remove([filePath]);
          }
        }
      }

      toast.success('Work deleted successfully!');
      fetchWorks(); // Refresh the list
    } catch (error) {
      console.error('Error deleting work:', error);
      toast.error('Failed to delete work');
    } finally {
      setIsDeleting(null);
    }
  };

  const editWork = (workId: string) => {
    router.push(`/personal-works-manage/edit/${workId}`);
  };

  const addNewWork = () => {
    router.push('/personal-works-manage/add');
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchWorks();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center gray-bg">
        <div className="max-w-md w-full mx-auto p-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black/90 transition-colors"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gray-bg py-8">
      <div className="max-w-8xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Personal Works Management</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={addNewWork}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <IconPlus size={16} />
                Add New Work
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <IconLogout size={16} />
                Logout
              </button>
            </div>
          </div>

          {/* Works Table */}
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading works...</p>
            </div>
          ) : works.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No works yet.</p>
              <button
                onClick={addNewWork}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Create Your First Work
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold">Image</th>
                    <th className="text-left py-3 px-4 font-semibold">Title</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                    <th className="text-left py-3 px-4 font-semibold">Grid Position</th>
                    <th className="text-left py-3 px-4 font-semibold">Created</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((work) => (
                    <tr key={work.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                          {work.image_url ? (
                            <img
                              src={work.image_url}
                              alt={work.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'flex';
                                }
                              }}
                            />
                          ) : null}
                          <div 
                            className="w-full h-full flex items-center justify-center text-gray-400 text-xs"
                            style={{ display: work.image_url ? 'none' : 'flex' }}
                          >
                            No Image
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="max-w-xs">
                          <p className="font-medium text-gray-900 truncate">{work.title}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="max-w-xs">
                          <p className="text-gray-600 text-sm line-clamp-2">{work.description}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                          {work.grid_position}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm text-gray-500">
                          {new Date(work.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => editWork(work.id)}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                            title="Edit work"
                          >
                            <IconEdit size={16} />
                            Edit
                          </button>
                          <button
                            onClick={() => deleteWork(work.id)}
                            disabled={isDeleting === work.id}
                            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors disabled:opacity-50"
                            title="Delete work"
                          >
                            <IconTrash size={16} />
                            {isDeleting === work.id ? 'Deleting...' : 'Delete'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Back Button - Sticky at bottom */}
      <BackButton />
    </div>
  );
} 