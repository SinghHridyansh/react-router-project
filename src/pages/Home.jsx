import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleNavigation() {
    setTimeout(() => {
      navigate("/about");
    }, 500);
  }

  return (
    <div className="w-full h-[95vh] bg-gray-700 py-8 px-8 text-white">
      <h1 className="text-3xl font-medium ">Home page</h1>
      <br />
      <button
        className="bg-yellow-400 rounded hover:scale-105 transition  px-2 py-1 text-black"
        onClick={handleNavigation}
      >
        Take me to About Page
      </button>
    </div>
  );
};

export default Home;
