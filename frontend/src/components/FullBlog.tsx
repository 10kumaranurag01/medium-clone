import { Link } from "react-router-dom";
import { useQuotes } from "../hooks";
import AppBar from "./AppBar";
import { Avatar } from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";

interface Blog {
  content: string;
  title: string;
  id: string;
  createdAt: string;
  author: {
    name: string;
  };
}

const FullBlog = ({ blog }: { blog: Blog }) => {
  const { quote, loading } = useQuotes();

  const dateString = blog.createdAt;
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 pt-12 w-full px-10 max-w-screen-xl">
          <div className="col-span-8">
            <div className="flex">
              <div className="text-5xl font-extrabold">{blog.title}</div>
              <Link
                to={`/edit_blog/${blog.id}`}
                className="flex flex-col justify-end pl-4 cursor-pointer"
              >
                <svg
                  className="h-8 w-8 text-slate-500 hover:text-slate-800"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M12 20h9" />{" "}
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </Link>
            </div>
            <div className="text-slate-500 pt-2">
              Posted on {formattedDate}
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex pt-2">
              <div className="pr-4 pt-1 flex flex-col">
                <Avatar name={blog.author.name} size={8} />
              </div>
              <div>
                <div>
                  <div className="text-xl font-bold">{blog.author.name}</div>
                </div>
                <div className="pt-2 text-slate-500">
                  {loading ? <BlogSkeleton /> : quote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
