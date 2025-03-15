"use client";
import {
  Blog,
  BlogDescription,
  BlogImage,
  BlogText,
  BlogTitle,
} from "@/components/blog";
import CustomNavBar from "@/components/customNavBar";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface BlogData {
  title: string;
  description: string;
  imageUrl: string;
  blogText: string;
  author: string;
}

export default function Page() {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { blogId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/blogs/?id=${blogId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const json = await response.json();
        setBlogData(json.blogs[0]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Failed to load blog data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [blogId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogData) {
    return <div>No blog data found.</div>;
  }

  return (
    <div>
      <CustomNavBar />
      <div className="w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex flex-col justify-center items-center">
          <Blog>
            <BlogTitle>{blogData.title}</BlogTitle>
            <BlogDescription className="p-2">
              by {blogData.author}
              <br /> {blogData.description}
            </BlogDescription>
            <BlogImage
              imgLink={blogData.imageUrl}
              imgDescription="📷 People Playing Chess"
              className="p-2"
            />
            <BlogText>{blogData.blogText}</BlogText>
          </Blog>
        </div>
      </div>
    </div>
  );
}
