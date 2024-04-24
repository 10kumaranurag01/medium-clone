import { Link, useNavigate } from "react-router-dom";
import Inputbox from "./Inputbox";
import { useState } from "react";
import { SigninInput } from "@egotistic5629/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const AdminAuth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SigninInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/admin/${
          type === "signup" ? "signup" : "signin"
        }`,
        postInputs
      );
      const { jwt } = response.data;
      console.log(jwt);
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      //Alert the user
      alert(`Error while ${type === "signup" ? "signing up" : "signing in"}`);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col w-full">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              {type === "signup"
                ? "Create an admin account"
                : "Log in to admin account"}
            </div>
            <div className="text-slate-500 text-center pt-1">
              {type === "signup"
                ? "Already have an admin account?"
                : "Don't have an admin account?"}
              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/admin-signin" : "/admin-signup"}
              >
                {type === "signup" ? "SignIn" : "SignUp"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type === "signup" ? (
              <Inputbox
                label="Name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}

            <Inputbox
              label="Email"
              placeholder="Enter your email"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <Inputbox
              label="Password"
              placeholder="Enter your password"
              type={"password"}
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button
              onClick={sendRequest}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-8"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
            <Link to={"/signup"}>
              <button
                type="button"
                className="text-black bg-white border-solid border-2 border-black hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
              >
                Are you an user? Click here to sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
