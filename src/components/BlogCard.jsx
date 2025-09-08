export default function BlogCard({ blog }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-gray-700 line-clamp-3">{blog.content}</p>
      <p className="text-sm text-gray-500 mt-2">By: {blog.author?.name || "Unknown"}</p>
    </div>
  );
}
