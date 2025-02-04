
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  teamName: z.string().min(2, "Team name must be at least 2 characters"),
  sportType: z.string().min(2, "Sport type must be at least 2 characters"),
  idNumber: z.string().min(6, "ID number must be at least 6 characters"),
  idDocument: z
    .any()
    .refine((file) => file?.length > 0, "ID document is required")
    .refine(
      (file) => file?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.[0]?.type),
      "Only .pdf, .jpg, and .png files are accepted"
    ),
  contractDocument: z
    .any()
    .refine((file) => file?.length > 0, "Contract document is required")
    .refine(
      (file) => file?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.[0]?.type),
      "Only .pdf, .jpg, and .png files are accepted"
    ),
});

export const AthleteVerificationForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      teamName: "",
      sportType: "",
      idNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // In a real app, this would upload the files and verify the athlete
      console.log("Verification submission:", {
        ...values,
        idDocument: values.idDocument[0],
        contractDocument: values.contractDocument[0],
      });
      toast.success("Verification submitted successfully!");
      navigate("/artist");
    } catch (error) {
      toast.error("Verification submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Athlete Verification</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teamName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Lakers" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sportType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sport</FormLabel>
                <FormControl>
                  <Input placeholder="Basketball" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="idNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Player ID Number</FormLabel>
                <FormControl>
                  <Input placeholder="123456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="idDocument"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel>ID Document</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => onChange(e.target.files)}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Upload a valid ID document (max 5MB, PDF, JPG, or PNG)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contractDocument"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel>Contract/Team Document</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => onChange(e.target.files)}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Upload your current contract or team affiliation document (max 5MB, PDF, JPG, or PNG)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit for Verification"}
          </Button>
        </form>
      </Form>
    </Card>
  );
};
