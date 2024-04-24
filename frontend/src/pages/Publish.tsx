import axios from "axios";
import AppBar from "../components/AppBar";
import { BACKEND_URL, blogCategories } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(blogCategories[0].value);
  const navigate = useNavigate();

  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-8">
        <div className="flex flex-col max-w-screen-lg w-full">
          <div className="py-4">
            <input
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <select
              id="blogCategory"
              title="Blog Category"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block mt-2 p-2.5 outline-none"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {blogCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg">
                <textarea
                  id="comment"
                  className="w-full text-sm text-gray-900 bg-white border-0 focus:ring-0 h-44 outline-none"
                  placeholder="Content..."
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t ">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-gray-700"
                  onClick={async () => {
                    await axios.post(
                      `${BACKEND_URL}/api/v1/user-blog`,
                      {
                        title,
                        content,
                        category,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "token"
                          )}`,
                        },
                      }
                    );
                    navigate(`/blogs`);
                  }}
                >
                  Publish Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
