"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase, PersonalWork, CreatePersonalWorkData } from '@/lib/supabase';
import { toast } from 'sonner';
import {
  ArrowLeft as IconArrowLeft,
  Save as IconSave,
  Upload as IconUpload,
} from 'lucide-react';
import { BackButton } from '@/components/ui/back-button';

export default function EditPersonalWorkPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWork, setIsLoadingWork] = useState(true);
  const [workData, setWorkData] = useState({
    title: '',
    description: '',
    grid_position: 'col-span-4',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>('');
  const [workId, setWorkId] = useState<string>('');
  const router = useRouter();
  const params = useParams();

  const gridPositionOptions = [
    { value: 'col-span-4', label: 'Small (1/3 width)' },
    { value: 'col-span-8', label: 'Large (2/3 width)' },
    { value: 'col-span-12', label: 'Full width' },
  ];

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `personal-works/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('personal-works')
      .upload(filePath, file);

    if (uploadError) {
      throw new Error('Error uploading image');
    }

    const { data } = supabase.storage
      .from('personal-works')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const fetchWork = async (id: string) => {
    try {
      const { data: work, error } = await supabase
        .from('personal_works')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !work) {
        toast.error('Work not found');
        router.push('/personal-works-manage');
        return;
      }

      setWorkId(work.id);
      setWorkData({
        title: work.title,
        description: work.description || '',
        grid_position: work.grid_position,
      });
      setCurrentImageUrl(work.image_url || '');
    } catch (error) {
      console.error('Error fetching work:', error);
      toast.error('Failed to load work');
      router.push('/personal-works-manage');
    } finally {
      setIsLoadingWork(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let imageUrl = currentImageUrl;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const workDataToSave: CreatePersonalWorkData = {
        title: workData.title,
        description: workData.description,
        image_url: imageUrl,
        grid_position: workData.grid_position,
      };

      const { error } = await supabase
        .from('personal_works')
        .update(workDataToSave)
        .eq('id', workId);

      if (error) throw error;

      toast.success('Personal work updated successfully!');
      router.push('/personal-works-manage');
    } catch (error) {
      console.error('Error updating work:', error);
      toast.error('Error updating personal work');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (params.id && typeof params.id === 'string') {
      fetchWork(params.id);
    }
  }, [params.id]);

  if (isLoadingWork) {
    return (
      <div className="min-h-screen gray-bg py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading work...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gray-bg py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/personal-works-manage')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <IconArrowLeft size={16} />
                Back to Personal Works Management
              </button>
              <h1 className="text-3xl font-bold">Edit Personal Work</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Title *
              </label>
              <input
                type="text"
                value={workData.title}
                onChange={(e) => setWorkData({ ...workData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter work title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={workData.description}
                onChange={(e) => setWorkData({ ...workData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Enter a description for the work"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grid Position *
              </label>
              <select
                value={workData.grid_position}
                onChange={(e) => setWorkData({ ...workData, grid_position: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                {gridPositionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Image *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {imageFile ? (
                  <div className="space-y-4">
                    <div className="relative mx-auto w-32 h-32">
                      <img
                        src={URL.createObjectURL(imageFile)}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-gray-600">{imageFile.name}</p>
                    <button
                      type="button"
                      onClick={() => setImageFile(null)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove New Image
                    </button>
                  </div>
                ) : currentImageUrl ? (
                  <div className="space-y-4">
                    <div className="relative mx-auto w-32 h-32">
                      <img
                        src={currentImageUrl}
                        alt="Current"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-gray-600">Current image</p>
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-800 font-medium">
                        Click to change image
                      </span>
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <IconUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div>
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-800 font-medium">
                          Click to upload
                        </span>
                        <span className="text-gray-500"> or drag and drop</span>
                      </label>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                        className="hidden"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => router.push('/personal-works-manage')}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-2 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <IconSave size={16} />
                {isLoading ? 'Updating...' : 'Update Work'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Back Button - Sticky at bottom */}
      <BackButton />
    </div>
  );
} 