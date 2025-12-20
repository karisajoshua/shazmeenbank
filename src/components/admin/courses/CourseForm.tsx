import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Loader2, Plus, X } from 'lucide-react';
import { courseFormSchema, CourseFormValues } from './CourseFormSchema';

interface CourseFormProps {
  courseId?: string;
  onBack: () => void;
  onSuccess: () => void;
}

export const CourseForm = ({ courseId, onBack, onSuccess }: CourseFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isEditing = !!courseId;
  const [newOutcome, setNewOutcome] = useState('');

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: '',
      subtitle: '',
      description: '',
      duration_text: '',
      image: '',
      total_modules: 0,
      learning_outcomes: [],
      cta_text: 'Enrollment opens soon. Get notified first when the course goes live.',
      status: 'draft',
    },
  });

  const { data: course, isLoading: isLoadingCourse } = useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) return null;
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: isEditing,
  });

  useEffect(() => {
    if (course) {
      form.reset({
        title: course.title,
        subtitle: (course as any).subtitle || '',
        description: course.description || '',
        duration_text: (course as any).duration_text || '',
        image: course.image || '',
        total_modules: course.total_modules || 0,
        learning_outcomes: (course as any).learning_outcomes || [],
        cta_text: (course as any).cta_text || 'Enrollment opens soon. Get notified first when the course goes live.',
        status: (course.status as 'draft' | 'published') || 'draft',
      });
    }
  }, [course, form]);

  const saveMutation = useMutation({
    mutationFn: async (values: CourseFormValues) => {
      const courseData = {
        title: values.title,
        subtitle: values.subtitle || null,
        description: values.description,
        duration_text: values.duration_text || null,
        image: values.image || null,
        total_modules: values.total_modules,
        learning_outcomes: values.learning_outcomes || [],
        cta_text: values.cta_text || null,
        status: values.status,
      };

      if (isEditing) {
        const { error } = await supabase
          .from('courses')
          .update(courseData as any)
          .eq('id', courseId);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('courses').insert(courseData as any);

        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-courses'] });
      queryClient.invalidateQueries({ queryKey: ['published-courses'] });
      toast({
        title: isEditing ? 'Course updated' : 'Course created',
        description: isEditing
          ? 'The course has been updated successfully.'
          : 'The course has been created successfully.',
      });
      onSuccess();
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (values: CourseFormValues) => {
    saveMutation.mutate(values);
  };

  const addOutcome = () => {
    if (newOutcome.trim()) {
      const currentOutcomes = form.getValues('learning_outcomes') || [];
      form.setValue('learning_outcomes', [...currentOutcomes, newOutcome.trim()]);
      setNewOutcome('');
    }
  };

  const removeOutcome = (index: number) => {
    const currentOutcomes = form.getValues('learning_outcomes') || [];
    form.setValue('learning_outcomes', currentOutcomes.filter((_, i) => i !== index));
  };

  if (isLoadingCourse) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle>{isEditing ? 'Edit Course' : 'Create New Course'}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Video + workbook + meditations • Instant access" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration Text</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 8-Week Course, 90-Minute Masterclass" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter course description"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="total_modules"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Modules *</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Learning Outcomes */}
            <div className="space-y-4">
              <FormLabel>Learning Outcomes ("You'll learn to...")</FormLabel>
              <div className="flex gap-2">
                <Input
                  value={newOutcome}
                  onChange={(e) => setNewOutcome(e.target.value)}
                  placeholder="Add a learning outcome"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addOutcome();
                    }
                  }}
                />
                <Button type="button" onClick={addOutcome} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {(form.watch('learning_outcomes') || []).map((outcome, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                    <span className="flex-1 text-sm">{outcome}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeOutcome(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="cta_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CTA Text</FormLabel>
                  <FormControl>
                    <Input placeholder="Enrollment opens soon..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="draft" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Draft</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="published" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Published</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="submit" disabled={saveMutation.isPending}>
                {saveMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isEditing ? 'Update Course' : 'Create Course'}
              </Button>
              <Button type="button" variant="outline" onClick={onBack}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
