import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen bg-principal-bg bg-cover bg-no-repeat flex justify-center items-center">
      <div className="p-5 bg-white rounded-lg">
        <form action="" className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Email..." />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Password:</label>
            <input type="password" placeholder="Password..." />
          </div>

          <button className="px-5 py-2 bg-principal-bg text-white font-fontBold text-3xl rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
