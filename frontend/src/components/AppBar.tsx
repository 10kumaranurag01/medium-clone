import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4 ">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer font-semibold"
      >
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path d="M15.777 12.927l-9.14-4.748C6.379 8.06 6.113 8.005 5.853 8.005c-.984 0-1.871.792-1.871 1.873v23.365c0 .774.425 1.486 1.107 1.854l9.6 5.72c.241.13.495.189.741.189.82 0 1.568-.658 1.568-1.569V14.839C17 14.017 16.523 13.271 15.777 12.927zM43.845 14.529c-.292-.966-.991-1.724-1.924-2.094l-7.337-4.187c-1.158-.551-2.551-.155-3.222.888l-8.61 12.538 8.582 12.952 12.012-17.211C43.965 16.578 44.146 15.525 43.845 14.529zM32.09 37.038l9.14 3.808C42.548 41.395 44 40.427 44 39V20l-.018-.001L32.09 37.038zM19 20L19 32 29.935 36.14z"></path>
          </svg>
          <div className="pl-2 text-lg">Medeum</div>
        </div>
      </Link>
      <div className="flex items-center">
        <Link to={"/publish"} className="">
          <button
            type="button"
            className="mr-4 mt-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Create Blog
          </button>
        </Link>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
