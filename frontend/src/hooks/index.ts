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
  const [quoteLoading, setQuoteLoading] = useState(true);
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
      setQuoteLoading(false);
    };
    getQuotes();
  }, []);

  return { quote, quoteLoading };
};

export interface Blog {
  content: string;
  title: string;
  published: boolean;
  id: string;
  category: string;
  createdAt: string;
  author: {
    name: string;
  };
}
export interface UnPublishedBlog {
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
export interface Profile {
  email: string;
  name: string;
  notifications: string[];
}

export const useBlog = ({ id }: { id: string | undefined }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState();

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
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs(res.data.blogs);
      setBlogLoading(false);
    };

    getFunction();
  }, []);

  return {
    blogLoading,
    blogs,
  };
};

export const useUnpublishedBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [unpublishedBlogs, setUnpublishedBlogs] = useState<UnPublishedBlog[]>(
    []
  );

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/admin-blog/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUnpublishedBlogs(res.data.blogs);

      setLoading(false);
    };

    getFunction();
  }, []);

  return {
    loading,
    unpublishedBlogs,
  };
};

export const useUnpublishedBlog = ({ id }: { id: string | undefined }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<UnPublishedBlog>();

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/admin-blog/${id}`, {
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

export const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>();
  const [person, setPerson] = useState("");

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const whoami = await axios.get(`${BACKEND_URL}/api/v1/whoami`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/${whoami.data.iam}/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(res.data.details);
      setPerson(whoami.data.iam);
      setLoading(false);
    };

    getFunction();
  }, []);

  return {
    loading,
    profile,
    person,
  };
};
export const useNotifications = () => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getFunction = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/user/notifications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotifications(res.data.notifications);
      setLoading(false);
    };

    getFunction();
  }, []);

  return {
    loading,
    notifications,
  };
};
