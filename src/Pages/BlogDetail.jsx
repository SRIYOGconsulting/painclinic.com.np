import { useParams } from "react-router-dom";
import { blogs } from "./Blog";  

const BlogDetail = () => {
  const { path } = useParams();  // get `:path` from URL
  const blog = blogs.find((b) => b.path === path);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-[#234179]">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover mt-6 rounded-xl"
      />

      <p className="mt-6 text-lg text-gray-800">{blog.description}</p>

      <p className="mt-4 text-gray-600 font-medium">{blog.time}</p>

    </div>
  );
};

export default BlogDetail;
