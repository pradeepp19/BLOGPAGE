import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("Token being sent:", token);

      const res = await fetch(`${API_URL}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });
      

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      navigate("/blogs");
    } catch (err) {
      console.error("Error creating blog:", err);
    }
  };

  return (
    <div className="p-6">
    <form onSubmit={handleSubmit} className="space-y-4">
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-4xl font-bold dark:text-white mb-4">Create New Blog</h1>
         <button 
         type="submit" 
         className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700" >
         Publish Blog 
         </button> 
    </div>

      

        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-4xl font-bold border placeholder-gray-400 focus:outline-none bg-transparent p-6 rounded"
          required
        />

        
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[60vh] resize-none placeholder-gray-400 focus:outline-none mt-6 bg-transparent text-lg leading-relaxed text-gray-800"
          required
        />

     
    </form>
    </div>
    
  );
}
