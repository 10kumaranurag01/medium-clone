import AdminAppbar from "../components/AdminAppbar";
import AdminBlogCard from "../components/AdminBlogCard";
import { useUnpublishedBlogs } from "../hooks";

const UnPublishedBlogs = () => {
  const { unpublishedBlogs, loading } = useUnpublishedBlogs();

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
    category: string;
    title: string;
    content: string;
    createdAt: string;
  }

return (
    <div>
        <AdminAppbar/>
        <div className="flex justify-center">
            <div className="">
                {unpublishedBlogs.map((blog: blogType) => (
                    <AdminBlogCard
                        id={blog.id}
                        category={blog.category}
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

export default UnPublishedBlogs;
