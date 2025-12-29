import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Upload } from "lucide-react";
import { resourceFormSchema, ResourceFormValues } from "./ResourceFormSchema";

const iconOptions = [
  { value: "Heart", label: "Heart" },
  { value: "BookOpen", label: "Book" },
  { value: "Brain", label: "Brain" },
  { value: "Download", label: "Download" },
  { value: "FileText", label: "Document" },
  { value: "Star", label: "Star" },
  { value: "Lightbulb", label: "Lightbulb" },
  { value: "Target", label: "Target" },
];

const ResourceForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(!!id);
  const [uploading, setUploading] = useState(false);

  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      icon_name: "Heart",
      file_url: "",
      status: "draft",
    },
  });

  useEffect(() => {
    if (id) {
      fetchResource();
    }
  }, [id]);

  const fetchResource = async () => {
    setIsFetching(true);
    const { data, error } = await supabase
      .from("free_resources")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      toast.error("Failed to fetch resource");
      navigate("/admin/resources");
      return;
    }

    form.reset({
      title: data.title,
      description: data.description || "",
      icon_name: data.icon_name || "Heart",
      file_url: data.file_url || "",
      status: data.status as "draft" | "published",
    });
    setIsFetching(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("admin-media")
      .upload(fileName, file);

    if (uploadError) {
      toast.error("Failed to upload file");
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from("admin-media")
      .getPublicUrl(fileName);

    form.setValue("file_url", publicUrl);
    toast.success("File uploaded successfully");
    setUploading(false);
  };

  const onSubmit = async (values: ResourceFormValues) => {
    setIsLoading(true);

    if (id) {
      const { error } = await supabase
        .from("free_resources")
        .update({
          title: values.title,
          description: values.description,
          icon_name: values.icon_name,
          file_url: values.file_url,
          status: values.status,
        })
        .eq("id", id);

      if (error) {
        toast.error("Failed to update resource");
        setIsLoading(false);
        return;
      }

      toast.success("Resource updated successfully");
    } else {
      const { error } = await supabase.from("free_resources").insert({
        title: values.title,
        description: values.description,
        icon_name: values.icon_name,
        file_url: values.file_url,
        status: values.status,
      });

      if (error) {
        toast.error("Failed to create resource");
        setIsLoading(false);
        return;
      }

      toast.success("Resource created successfully");
    }

    navigate("/admin/resources");
    setIsLoading(false);
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Button
        variant="outline"
        onClick={() => navigate("/admin/resources")}
        className="mb-6 bg-white text-gray-900 hover:bg-gray-100 border-gray-300"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Resources
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>{id ? "Edit Resource" : "Create New Resource"}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Resource title" {...field} />
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe what users will get from this resource"
                        rows={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="icon_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an icon" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {iconOptions.map((icon) => (
                          <SelectItem key={icon.value} value={icon.value}>
                            {icon.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <Label>Upload File</Label>
                <div className="flex items-center gap-4">
                  <Input
                    type="file"
                    onChange={handleFileUpload}
                    disabled={uploading}
                    accept=".pdf,.doc,.docx,.xlsx,.xls"
                  />
                  {uploading && <Loader2 className="h-4 w-4 animate-spin" />}
                </div>
                {form.watch("file_url") && (
                  <p className="text-sm text-green-600">
                    File uploaded: {form.watch("file_url")?.split("/").pop()}
                  </p>
                )}
              </div>

              <FormField
                control={form.control}
                name="file_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Or enter file URL manually</FormLabel>
                    <FormControl>
                      <Input placeholder="https://..." {...field} />
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
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {id ? "Update Resource" : "Create Resource"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin/resources")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceForm;
