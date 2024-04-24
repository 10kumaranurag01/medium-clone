import MainAppBar from "../components/MainAppBar";

const Main = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <MainAppBar />
      <div className="flex justify-center items-center w-full h-screen text-6xl">
        <div
          className="relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-white 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black"
        >
          Medeum - “Your Story, Our Platform”
        </div>
      </div>
    </div>
  );
};

export default Main;
