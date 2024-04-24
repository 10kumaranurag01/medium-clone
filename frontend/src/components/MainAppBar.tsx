import { Link } from "react-router-dom";

const MainAppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-3 bg-white">
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
      <div className="flex items-center justify-center">
        <Link to={"/admin-signup"} className="mx-2">
          <button
            className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Admin
          </button>
        </Link>
        <Link to={"/signup"} className="mx-2">
          <button
            className="flex justify-center items-center select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            User
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 pl-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainAppBar;
