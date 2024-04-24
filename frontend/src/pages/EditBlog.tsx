import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";

const EditBlog = () => {
  const { id } = useParams();
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [loading, setLoading] = useState(true);

  interface ValidationError {
    msg: string;
    errors: Record<string, string[]>;
  }

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUpdatedTitle(res.data.blog.title);
      setUpdatedContent(res.data.blog.content);
      setLoading(false);
    };

    getFunction();
  }, [id]);

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

  if (!loading) {
    return (
      <div className="h-screen">
        <AppBar />
        <div className="flex justify-center w-full pt-8">
          <div className="flex flex-col max-w-screen-lg w-full">
            <div className="py-4">
              <input
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none"
                value={updatedTitle}
                placeholder="Title"
                onChange={(e) => {
                  setUpdatedTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-white rounded-t-lg">
                  <textarea
                    id="comment"
                    value={updatedContent}
                    className="w-full text-sm text-gray-900 bg-white border-0 focus:ring-0 h-44 outline-none"
                    placeholder="Content..."
                    onChange={(e) => {
                      setUpdatedContent(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t ">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-gray-700"
                    onClick={async () => {
                      try {
                        const res = await axios.put(
                          `${BACKEND_URL}/api/v1/user-blog`,
                          {
                            id,
                            title: updatedTitle,
                            content: updatedContent,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                          }
                        );
                        navigate(`/blog/${res.data.id}`);
                      } catch (error) {
                        if (axios.isAxiosError<ValidationError>(error)) {
                          setError(
                            error.response?.data.msg || "An error occurred"
                          );
                        } else {
                          console.error(error);
                          setError("An unexpected error occurred");
                        }
                      }
                    }}
                  >
                    Publish Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {error ? (
          <div className=" mx-44 mt-52 transition-opacity duration-500 ease-in-out opacity-0 animate-fade-in">
            <div
              role="alert"
              className="relative flex w-full px-4 py-4 text-base text-white bg-gray-900 rounded-lg font-regular"
              data-dismissible="alert"
            >
              <div className="mr-12 ">{error}</div>
              <button
                data-dismissible-target="alert"
                className="!absolute  top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                title="Close"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default EditBlog;
