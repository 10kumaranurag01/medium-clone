import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface useEditBLog {
  updatedTitle: string;
  updatedContent: string;
  blogId: string;
}

export const useEditBLog = ({
  updatedTitle,
  updatedContent,
  blogId,
}: useEditBLog) => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const updateBlog = async () => {
      const res = await axios.put(`${BACKEND_URL}/api/v1/blog`, {
        id: blogId,
        title: updatedTitle,
        content: updatedContent,
      });
      setMsg(res.data.msg);
      setId(res.data.id);
      setLoading(false);
    };
    updateBlog();
  }, [updatedContent, updatedTitle, blogId]);

  return { loading, id, msg };
};

export const useQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const getQuotes = async () => {
      const res = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=humor",
        {
          headers: {
            "X-Api-Key": "fR4hqoFr5c7yh1UTDE14OA==sf9jDlQYx8xr7IHj",
          },
        }
      );
      setQuote(res.data[0].quote);
      setLoading(false);
    };
    getQuotes();
  }, []);

  return { quote, loading };
};

export const useBlog = ({ id }: { id: string | undefined }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlog(res.data.blog);
      setLoading(false);
    };

    getFunction();
  }, [id]);

  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs(res.data.blogs);
      setLoading(false);
    };

    getFunction();
  }, []);

  return {
    loading,
    blogs,
  };
};
