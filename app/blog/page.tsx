"use client";
import CustomNavBar from "@/components/customNavBar";
import BlogView from "@/components/blogView";
import { JSX, useEffect, useState } from "react";

interface BlogData {
  map(arg0: (blog: any) => JSX.Element): import("react").ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  blogText: string;
}

export default function Page() {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/blogs/`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const json = await response.json();
        setBlogData(json.blogs);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Failed to load blog data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogData) {
    return <div>No blogs found.</div>;
  }

  return (
    <div>
      <CustomNavBar />
      <div className="w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-4">
            {blogData.map((blog) => (
              <BlogView
                key={blog._id}
                title={blog.title}
                description={blog.description}
                imgLink={blog.imageUrl}
                href={`/blog/${blog._id}`}
                className="transition-all hover-scale"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
