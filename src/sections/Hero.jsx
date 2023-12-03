import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-orange-50 min-h-screen gap-5">
      <div className="bg-white px-4 py-2 mt-20 rounded-xl border-slate-200 border-2">
        <h1 className="text-5xl font-sans font-bold text-center tracking-wider text-violet-600">👋 WELCOME TO MANAGE WISE!</h1>
      </div>
      <h2 className="text-8xl font-bold tracking-wide text-center">
        Empower your business with <span className="text-coral-red"> Strategic </span> insights
      </h2>
      <p className="text-center text-2xl font-medium text-slate-400 my-4 w-1/2">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </p>
      <div className="flex  flex-wrap justify-center items-center gap-8">
        <button
          className="relative w-72 h-20 bg-violet-600 text-white font-bold text-3xl tracking-wider rounded-3xl transition duration-300 ease-in-out transform hover:translate-x-1 hover:shadow-md hover:border hover:border-violet-600"
        >
          <span className="relative z-10 transition duration-300 ease-in-out hover:-ml-4">Get Started</span>
        </button>
        <button className="w-72 h-20 bg-white text-black font-bold text-3xl tracking-wider  rounded-3xl border-solid border-2 border-slate-400 transition duration-300 ease-in-out hover:border-slate-900">
          Watch Demo
        </button>
      </div>
      
    </div>
  );
};

export default LandingPage;
