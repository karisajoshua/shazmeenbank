import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { blogFormSchema, type BlogFormValues } from './BlogFormSchema';
import { RichTextEditor } from '@/components/ui/rich-text-editor';

interface BlogFormProps {
  postId?: string;
  onBack: () => void;
  onSuccess: () => void;
}

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const BlogForm = ({ postId, onBack, onSuccess }: BlogFormProps) => {
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const isEditing = !!postId;

  const { data: existingPost } = useQuery({
    queryKey: ['blog-post', postId],
    queryFn: async () => {
      if (!postId) return null;
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!postId,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featured_image: '',
      tags: '',
      meta_description: '',
      status: 'draft',
    },
  });

  useEffect(() => {
    if (existingPost) {
      setValue('title', existingPost.title);
      setValue('slug', existingPost.slug);
      setValue('excerpt', existingPost.excerpt || '');
      setValue('content', existingPost.content);
      setValue('featured_image', existingPost.featured_image || '');
      setValue('tags', existingPost.tags?.join(', ') || '');
      setValue('meta_description', existingPost.meta_description || '');
      setValue('status', existingPost.status as 'draft' | 'published');
      setStatus(existingPost.status as 'draft' | 'published');
    }
  }, [existingPost, setValue]);

  const title = watch('title');
  useEffect(() => {
    if (!isEditing && title) {
      setValue('slug', generateSlug(title));
    }
  }, [title, isEditing, setValue]);

  const saveMutation = useMutation({
    mutationFn: async (data: BlogFormValues) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const tags = data.tags ? data.tags.split(',').map(t => t.trim()).filter(Boolean) : [];
      const postData = {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt || null,
        content: data.content,
        featured_image: data.featured_image || null,
        tags,
        meta_description: data.meta_description || null,
        status: data.status,
        author_id: user.id,
        published_at: data.status === 'published' ? new Date().toISOString() : null,
      };

      if (isEditing) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', postId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert(postData);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(isEditing ? 'Post updated successfully' : 'Post created successfully');
      onSuccess();
    },
    onError: (error) => {
      toast.error('Failed to save post: ' + error.message);
    },
  });

  const onSubmit = (data: BlogFormValues) => {
    saveMutation.mutate(data);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="text-gray-900 hover:bg-gray-100">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to List
        </Button>
        <h2 className="text-3xl font-bold text-gray-900">
          {isEditing ? 'Edit Post' : 'Create New Post'}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl">
        <div>
          <Label htmlFor="title" className="text-gray-700 font-medium">Title *</Label>
          <Input id="title" {...register('title')} className="bg-white border-gray-300 text-gray-900" />
          {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <Label htmlFor="slug" className="text-gray-700 font-medium">Slug *</Label>
          <Input id="slug" {...register('slug')} className="bg-white border-gray-300 text-gray-900" />
          {errors.slug && <p className="text-sm text-red-600 mt-1">{errors.slug.message}</p>}
        </div>

        <div>
          <Label htmlFor="excerpt" className="text-gray-700 font-medium">Excerpt</Label>
          <Textarea id="excerpt" {...register('excerpt')} rows={3} className="bg-white border-gray-300 text-gray-900" />
          {errors.excerpt && <p className="text-sm text-red-600 mt-1">{errors.excerpt.message}</p>}
        </div>

        <div>
          <Label htmlFor="content" className="text-gray-700 font-medium">Content *</Label>
          <RichTextEditor
            value={watch('content')}
            onChange={(value) => setValue('content', value)}
            placeholder="Write your blog content here..."
          />
          {errors.content && <p className="text-sm text-red-600 mt-1">{errors.content.message}</p>}
        </div>

        <div>
          <Label htmlFor="featured_image" className="text-gray-700 font-medium">Featured Image URL</Label>
          <Input id="featured_image" {...register('featured_image')} placeholder="https://..." className="bg-white border-gray-300 text-gray-900" />
          {errors.featured_image && <p className="text-sm text-red-600 mt-1">{errors.featured_image.message}</p>}
        </div>

        <div>
          <Label htmlFor="tags" className="text-gray-700 font-medium">Tags (comma-separated)</Label>
          <Input id="tags" {...register('tags')} placeholder="mindset, growth, transformation" className="bg-white border-gray-300 text-gray-900" />
          {errors.tags && <p className="text-sm text-red-600 mt-1">{errors.tags.message}</p>}
        </div>

        <div>
          <Label htmlFor="meta_description" className="text-gray-700 font-medium">Meta Description (SEO)</Label>
          <Textarea id="meta_description" {...register('meta_description')} rows={2} className="bg-white border-gray-300 text-gray-900" />
          {errors.meta_description && <p className="text-sm text-red-600 mt-1">{errors.meta_description.message}</p>}
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Status</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                value="draft"
                {...register('status')}
                onChange={() => setStatus('draft')}
                className="text-primary"
              />
              <span>Draft</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                value="published"
                {...register('status')}
                onChange={() => setStatus('published')}
                className="text-primary"
              />
              <span>Published</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="submit" disabled={saveMutation.isPending}>
            {saveMutation.isPending ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
          </Button>
          <Button type="button" variant="outline" onClick={onBack} className="border-gray-300 text-gray-700 hover:bg-gray-100">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
