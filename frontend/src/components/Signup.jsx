import React from "react";

const Signup = () => {
  return (
    <>
      <div className="SignupClass w-screen h-screen flex justify-center items-center">
        <div className="bg-white text-black w-96 h-auto px-6 py-5 flex flex-col border rounded-md">
          <h1 className="text-lg font-semibold mt-2">
            Welcome to BudgetBuddy! 💸
          </h1>
          <p className="text-sm mb-8 text-gray-500">Create your new profile</p>
          <form action="/signup" method="">
            <label htmlFor="name" className="pb-1 text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full h-10 border rounded-md text-sm mb-6 pl-2 "
            />
            <label htmlFor="email" className="pb-1 text-sm">
              Your Email Address
            </label>
            <input
              type="text"
              name="email"
              className="w-full h-10 border rounded-md text-sm mb-6 pl-2 "
            />
            <label htmlFor="name" className="pb-1 text-sm">
              Create Password
            </label>
            <input
              type="text"
              name="password"
              className="w-full h-10 border rounded-md text-sm mb-6 pl-2 outline-offset-1"
            />
            <label htmlFor="name" className="pb-1 text-sm">
              Confirm Password
            </label>
            <input
              type="text"
              name="confirmpassword"
              className="w-full h-10 border rounded-md text-sm mb-6 pl-2 "
            />
            <button className="w-full h-10 bg-[#1B262C] text-white rounded-md text-sm hover:opacity-95">
              Sign In
            </button>
          </form>
          <a href="" className="text-xs text-[#1B262C] mt-4">
            Already have a profile? Tap here
          </a>
        </div>
      </div>
    </>
  );
};

export default Signup;
