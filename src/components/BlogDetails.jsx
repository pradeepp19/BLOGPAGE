import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const  { id } = useParams();;
    const [blog,setBlog] = useState(null);

useEffect(() => {
    const fetchBlog = async () => {
    try {
        const res = await fetch(`${API_URL}/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
    } catch(err) {
        console.error("Error Fetching Blog:",err);
    }
};
fetchBlog();
}, [id]);
if (!blog) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">By {blog.author?.username}</p>
      <div className="text-lg leading-relaxed">{blog.content}</div>
    </div>
  );
}
