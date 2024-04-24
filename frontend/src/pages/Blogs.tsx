import { useState, useEffect } from "react";
import AdminAppbar from "../components/AdminAppbar";
import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { blogCategories } from "../config";
import { useBlogs, useProfile } from "../hooks";

const Blogs = () => {
  const { blogLoading, blogs } = useBlogs();
  const { loading, person } = useProfile();
  const [category, setCategory] = useState("All");
  const [finalBlogs, setFinalBlogs] = useState(blogs);

  useEffect(() => {
    if (category === "All") {
      setFinalBlogs(blogs);
    } else {
      setFinalBlogs(blogs.filter(blog => blog.category === category));
    }
  }, [blogs, category]);

  if (loading || blogLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/448500/loading.svg"
          alt="Loading icon"
        ></img>
      </div>
    );
  }

  const renderAppBar = () => {
    return person === "user" ? <AppBar /> : <AdminAppbar />;
  };

  interface Author {
    name: string;
  }

  interface blogType {
    id: string;
    author: Author;
    title: string;
    content: string;
    category: string;
    createdAt: string;
  }

  return (
    <div>
      {renderAppBar()}
      <div className="w-full mx-96">
        <select
          id="blogCategory"
          title="Blog Category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block mt-2 p-2.5 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {blogCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <div className="">
          {finalBlogs.map((blog:blogType) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              category={blog.category}
              content={blog.content}
              publishDate={blog.createdAt}
              key={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
