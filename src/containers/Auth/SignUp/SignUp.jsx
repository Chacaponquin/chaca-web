import React, { useContext, useState } from "react";
import { usePost } from "../../../shared/hooks/usePost";
import { apiRoutes } from "../../../shared/routes/api/apiRoutes";
import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../../shared/context/UserContext";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../shared/routes/app/appRoutes";

import OtherOptionsSection from "../components/OtherOptionsSection";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });

  const { handleSignIn } = useContext(UserContext);

  const [signUpUser, { loading }] = usePost({
    url: apiRoutes.AUTH_ROUTES.SIGN_UP,
    onCompleted: ({ userToken }) => {
      handleSignIn(userToken);
    },
    onError: (error) => {
      if (error?.response?.data) toast.error(error?.response?.data?.error);
      else toast.error("Hubo un error en la creacion del usuario");
    },
    body: signUpData,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (signUpData.password === signUpData.comfirmPassword) {
        signUpUser();
      } else throw new Error("No coinciden sus dos contraseñas");
    } catch (error) {
      toast.error(error.message, {});
    }
  };

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "py-2 px-5 font-fontRegular text-base esm:px-3 esm:py-1 esm:text-sm";
  const labelClass = "text-lg font-fontBold";

  return (
    <div className="w-full h-screen flex">
      <ToastContainer />
      <div className="py-5 px-20 esm:px-5 flex justify-center items-center xl:w-[50%] w-full">
        <div>
          <div className="flex justify-start w-full text-lg mb-6">
            <p className="inline mb-0 whitespace-nowrap">You have account? </p>
            <Link to={appRoutes.AUTH_ROUTES.LOGIN}>
              <p className="inline mb-0 ml-2 text-secondColor">Login</p>
            </Link>
          </div>

          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col esm:items-center">
              <div className="font-fontExtraBold text-6xl mb-3 whitespace-nowrap esm:text-5xl">
                Welcome to
                <h1 className="inline font-fontExtraBold ml-3">CH-DATA!</h1>
              </div>
              <p className="text-slate-400 text-2xl esm:text-xl">
                Complete the form to continue
              </p>
            </div>

            <div className="py-5 flex flex-col gap-3">
              <div className="flex flex-col ">
                <label htmlFor="" className={labelClass}>
                  Username:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name="username"
                  type={"text"}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className={labelClass}>
                  Email:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name="email"
                  type={"email"}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className={labelClass}>
                  Password:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name="password"
                  type={"password"}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className={labelClass}>
                  Comfirm Password:
                </label>
                <InputText
                  className={inputClass}
                  required
                  name="comfirmPassword"
                  type={"password"}
                  onChange={handleChange}
                />
              </div>
            </div>

            <OtherOptionsSection loading={loading} />

            <div className="flex justify-center">
              <LoaderContainer loading={loading} className={"w-[50px]"}>
                <button className="transition-all duration-300 rounded-md text-white bg-principal-bg hover:opacity-70 py-3 w-full text-2xl font-fontBold">
                  Sign Up
                </button>
              </LoaderContainer>
            </div>
          </form>
        </div>
      </div>

      <div className="h-full xl:w-[50%]">
        <div className="h-full w-full bg-principal-bg bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default SignUp;
