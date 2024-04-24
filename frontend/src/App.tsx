import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Publish from "./pages/Publish";
import EditBlog from "./pages/EditBlog";
import Main from "./pages/Main";
import AdminSignup from "./pages/AdminSignup";
import AdminSignin from "./pages/AdminSignin";
import Profile from "./pages/Profile";
import UnPublishedBlogs from "./pages/UnPublishedBlogs";
import AdminBlog from "./pages/AdminBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/admin-signin" element={<AdminSignin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/unpublished-blogs" element={<UnPublishedBlogs />} />
          <Route path="/admin-blog/:id" element={<AdminBlog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="edit_blog/:id" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
