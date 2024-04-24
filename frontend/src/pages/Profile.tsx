import { Link } from "react-router-dom";
import Notifications from "../components/Notifications";
import ProfileDetails from "../components/ProfileDetails";
import { useProfile } from "../hooks";
import AppBar from "../components/AppBar";
import AdminAppbar from "../components/AdminAppbar";

const Profile = () => {
  const { loading, profile, person } = useProfile();

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
      {person == "user" ? <AppBar /> : <AdminAppbar />}
      <div className="w-full h-screen bg-gray-200 grid grid-cols-2">
        <div className="col-span-1 bg-black flex justify-center items-center">
          <ProfileDetails name={profile?.name} email={profile?.email} />
        </div>
        <div className="col-span-1 flex justify-center items-center bg-white">
          {person == "user" ? <Notifications /> : <UnPublishedBlogsBtn />}
        </div>
      </div>
    </div>
  );
};

function UnPublishedBlogsBtn() {
  return (
    <div>
      <Link to={"/unpublished-blogs"} className="mx-2">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Review Blogs
        </button>
      </Link>
    </div>
  );
}

export default Profile;
