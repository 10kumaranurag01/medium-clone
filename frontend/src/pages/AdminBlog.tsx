import FullBlog from "../components/FullBlog";
import { useUnpublishedBlog } from "../hooks";
import { useParams } from "react-router-dom";

const AdminBlog = () => {
  const { id } = useParams();
  const { loading, blog } = useUnpublishedBlog({ id: id || "" });

  if (loading || !blog) {
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
      <FullBlog blog={blog} />
    </div>
  );
};

export default AdminBlog;
