import React from "react";
import {
  buttonClass,
  formInputDivClass,
  inputClass,
  labelClass,
} from "../helpers/classes";

const Login = () => {
  return (
    <div className="w-full h-screen bg-principal-bg bg-cover bg-no-repeat flex justify-center items-center">
      <div className="py-5 px-8 bg-white rounded-lg">
        <form action="" className="flex flex-col gap-5 w-80">
          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Email:
            </label>
            <input type="email" placeholder="Email..." className={inputClass} />
          </div>

          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Password:
            </label>
            <input
              type="password"
              placeholder="Password..."
              className={inputClass}
            />
          </div>

          <button className={buttonClass}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
