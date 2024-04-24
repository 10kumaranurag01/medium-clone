const ProfileDetails = ({
  name,
  email,
}: {
  name: string | undefined;
  email: string | undefined;
}) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-24 h-24 text-gray-400 -left-2"
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
        <div className="text-center mt-4">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-gray-600 mt-2">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
