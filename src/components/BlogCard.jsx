// export default function BlogCard({ blog }) {
//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
//       <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//       <p className="text-gray-700 line-clamp-3">{blog.content}</p>
//       <p className="text-sm text-gray-500 mt-2">By: {blog.author?.name || "Unknown"}</p>
//     </div>
//   );
// }
// components/BlogCard.jsx
export default function BlogCard({ blog }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        {blog.content.substring(0, 100)}...
      </p>
      <p className="text-sm text-gray-500">
        By: {blog.author?.name || "Unknown"} | {new Date(blog.createdAt).toDateString()}
      </p>
      <div className="flex justify-between mt-3">
        <a
          href={`/blogs/${blog._id}`}
          className="text-blue-600 hover:underline"
        >
          Read More
        </a>
        {localStorage.getItem("userId") === blog.author?._id && (
          <button className="text-red-500 hover:underline">Delete</button>
        )}
      </div>
    </div>
  );
}
