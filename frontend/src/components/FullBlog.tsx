import { Link, useNavigate } from "react-router-dom";
import { useProfile, useQuotes } from "../hooks";
import AppBar from "./AppBar";
import { Avatar } from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: string;
  published: boolean;
  category: string;
  createdAt: string;
  author: {
    name: string;
    id: string;
  };
}

interface publishBlog {
  id: string;
  content: string;
  title: string;
  category: string;
  authorId: string;
}

const FullBlog = ({ blog }: { blog: Blog }) => {
  const { quote, quoteLoading } = useQuotes();
  const { person, loading } = useProfile();

  const dateString = blog.createdAt;
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

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

  return (
    <div>
      <AppBar />
      {person == "admin" && blog.published == false ? (
        <ApproveRejectBtn
          id={blog.id}
          title={blog.title}
          content={blog.content}
          authorId={blog.author.id}
          category={blog.category}
        />
      ) : null}
      <div className="flex justify-center">
        <div className="grid grid-cols-12 pt-4 w-full px-10 max-w-screen-xl">
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
            <div className="text-slate-500 pt-3">
              Posted on {formattedDate} | Category: {blog.category}
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
                  {quoteLoading ? <BlogSkeleton /> : quote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ApproveRejectBtn({
  id,
  title,
  content,
  category,
  authorId,
}: publishBlog) {
  const navigate = useNavigate();
  return (
    <div className="pt-4 ml-40">
      <button
        onClick={async () => {
          const res = await axios.post(
            `${BACKEND_URL}/api/v1/admin-blog`,
            {
              id,
              title,
              content,
              category,
              authorId,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          await axios.post(
            `${BACKEND_URL}/api/v1/admin-blog/post-notification`,
            {
              notification: `Your blog with title ${title} has been approved!`,
              postId: res.data.id,
              userId: authorId,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          navigate(`/blog/${res.data.id}`);
        }}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Approve
      </button>
    </div>
  );
}

export default FullBlog;
