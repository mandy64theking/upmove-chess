"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import CustomNavBar from "../customNavBar";

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  age: z.number().int().positive().min(3).max(100),
  phone: z.string().regex(/^\d{10}$/),
});

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      age: 0,
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const url = "https://mail-api-j7kb.onrender.com/demo-request";

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify(values),
      });
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#339D87]/5 via-transparent to-transparent">
      <CustomNavBar />

      {/* ================= CHESS BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left */}
        <div className="absolute top-20 left-10 text-7xl text-[#339D87]/25 upmove-fade">
          ♔
        </div>
        <div className="absolute top-44 left-24 text-5xl text-[#339D87]/20 upmove-fade">
          ♘
        </div>

        {/* Top Right */}
        <div className="absolute top-24 right-16 text-7xl text-[#339D87]/25 upmove-fade">
          ♕
        </div>
        <div className="absolute top-56 right-28 text-5xl text-[#339D87]/20 upmove-fade">
          ♖
        </div>

        {/* Center Ambient */}
        <div className="absolute top-1/2 left-1/3 text-8xl text-[#339D87]/10 upmove-fade">
          ♛
        </div>

        {/* Bottom */}
        <div className="absolute bottom-28 left-24 text-6xl text-[#339D87]/20 upmove-fade">
          ♟
        </div>
        <div className="absolute bottom-20 right-32 text-6xl text-[#339D87]/20 upmove-fade">
          ♝
        </div>
      </div>

      {/* ================= FORM SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center pt-[18vh] px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mb-10">
          <h1
            className="font-extrabold text-3xl sm:text-4xl tracking-tight
                       bg-gradient-to-r from-[#339D87] to-[#1f6f60]
                       bg-clip-text text-transparent"
          >
            Book a Free Trial
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Tell us a little about yourself and we’ll get in touch shortly.
          </p>
        </div>

        {/* Form Card */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              w-full max-w-md
              rounded-3xl border border-border
              bg-background/80 backdrop-blur-sm
              p-8 shadow-lg
              space-y-6
            "
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="10-digit mobile number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Age */}
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Student’s age"
                      value={field.value || ""}
                      onChange={(e) =>
                        form.setValue("age", Number(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tell us about your chess experience or goals"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormDescription className="text-sm">
              We’ll never share your details with anyone else.
            </FormDescription>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="
                w-full bg-gradient-to-r from-[#339D87] to-[#1f6f60]
                text-white font-semibold py-6 cursor-pointer
                hover:opacity-95 transition-all
              "
            >
              {isLoading ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
}
