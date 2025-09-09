import { useEffect,useState } from "react";
import BlogCard from "../components/BlogCard";
import { API_URL } from "../config";

export default function BlogPage() {
    const [blogs,setBlogs] = useState([]);

    useEffect(() =>{
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem("token");
                    const res = await fetch(`${API_URL}/api/v1/blogs`, {
                    headers : {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                setBlogs(data);
            } catch(err){
                console.error("Error fetching blogs", err); 
            }
        };
        fetchBlogs();
    },[]);

    
    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}