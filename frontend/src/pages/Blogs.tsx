import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
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

  interface Author {
    name: string;
  }

  interface blogType {
    id: string;
    author: Author;
    title: string;
    content: string;
    createdAt: string;
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog: blogType) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishDate={blog.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
