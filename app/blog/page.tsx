"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  name: string;
  email: string;
  age: number;
  slug: string;
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3000/api/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: string | any) {
      setLoading(false);
      setError(error.message || "An unexpected error occurred");
    }
  };
  return (
    <div>
      <h1>Blog</h1>
      {/* loading */}
      {loading && <p>Loading...</p>}
      {/* error */}
      {error && <p>{error}</p>}
      {posts.length > 0 && (
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
