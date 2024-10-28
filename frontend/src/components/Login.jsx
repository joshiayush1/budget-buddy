import React from "react";

const Login = () => {
  return (
    <>
      <div className="LoginClass w-screen h-screen flex justify-center items-center">
        <div className="bg-white text-black w-96 h-auto px-6 py-5 flex flex-col border rounded-md">
          <h1 className="text-lg font-semibold mt-2">
            Welcome to BudgetBuddy! 💸
          </h1>
          <p className="text-sm mb-8 text-gray-500">Login to your profile</p>
          <form action="/signup" method="">
            <label htmlFor="email" className="pb-1 text-sm">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              className="w-full h-10 border rounded-md text-sm mb-6 pl-2 "
            />
            <label htmlFor="name" className="pb-1 text-sm">
              Password
            </label>
            <input
              type="text"
              name="password"
              className="w-full h-10 border rounded-md text-sm mb-6 pl-2 outline-offset-1"
            />
            <button className="w-full h-10 bg-[#1B262C] text-white rounded-md text-sm hover:opacity-95">
              Login
            </button>
          </form>
          <a href="" className="text-xs text-[#1B262C] mt-4">
            Don't have a profile? Tap here
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
