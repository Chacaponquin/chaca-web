import React, { useContext, useState } from "react";
import { usePost } from "../../../shared/hooks/usePost";
import { API_ROUTES } from "../../../shared/routes/api/API_ROUTES";
import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../../shared/context/UserContext";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../shared/routes/app/APP_ROUTES";
import "../auth.css";
import BgSVG from "../../../shared/components/CurveBg/BgSVG";
import clsx from "clsx";
import OtherOptionsSection from "../components/OtherOptionsSection";
import { AxiosError } from "axios";
import { DataTransform } from "../../../shared/helpers/DataTransform";
import User from "../../../shared/assets/icons/User";
import Private from "../../../shared/assets/icons/Private";

const Login = () => {
  const { handleSignIn } = useContext(UserContext);

  const buttonClass =
    "rounded-full flex justify-center items-center py-4 esm:py-3 w-[250px] esm:w-[200px] esm:text-lg text-xl font-fontBold uppercase transition-all duration-300";

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = usePost<{ token: string }>({
    url: API_ROUTES.AUTH_ROUTES.LOGIN,
    body: loginData,
    onError: (error: AxiosError) => {
      const errorMessage = error.response?.data as any;
      toast.error(errorMessage.error || "Hubo un error");
    },
    onCompleted: (data) => handleSignIn(data.token),
  });

  const handleChange = (e: any) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="w-full h-screen flex flex-col py-8 px-20 esm:px-5">
      <ToastContainer />
      <div className="flex justify-end w-full text-lg">
        <p className="inline mb-0">New User? </p>
        <Link to={APP_ROUTES.AUTH_ROUTES.SIGN_UP}>
          <p className="inline mb-0 ml-2 text-secondColor">Sign Up</p>
        </Link>
      </div>

      <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="h-full lg:flex items-center hidden">
          <div className="absolute top-0 left-0 h-screen -translate-x-[200px]">
            <BgSVG />
          </div>

          <img
            src={"/images/signUp-image.png"}
            alt=""
            className="object-contain z-20 -translate-x-[50px] max-w-full"
          />
        </div>

        <div className="flex flex-col h-full justify-center z-20">
          <div className="w-full flex flex-col esm:items-center">
            <h1 className="font-fontExtraBold text-6xl mb-3 whitespace-nowrap esm:text-5xl">
              Welcome Back!
            </h1>
            <p className="text-slate-400 text-2xl esm:text-xl">
              Login to continue
            </p>
          </div>

          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full py-8 gap-5 esm:py-6">
              <InputDiv type={"email"} onChange={handleChange} icon={"email"} />
              <InputDiv
                onChange={handleChange}
                type={"password"}
                icon={"password"}
              />
            </div>

            <div className="mb-4">
              <OtherOptionsSection loading={loading} />
            </div>

            <div className="flex lg:justify-start w-full gap-5 flex-wrap justify-center">
              <LoaderContainer loading={loading} className="w-[50px]">
                <button
                  className={
                    buttonClass + " bg-principal-bg text-white hover:opacity-70"
                  }
                  type="submit"
                >
                  Login
                </button>
              </LoaderContainer>

              {!loading && (
                <Link
                  to={APP_ROUTES.AUTH_ROUTES.FORGOT_PASSWORD}
                  className={buttonClass + " bg-slate-200 text-black"}
                >
                  Forget Password?
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputDiv = ({
  type,
  onChange,
  icon,
}: {
  icon: string;
  type: string;
  onChange: (e: any) => void;
}) => {
  const [focus, setFocus] = useState(false);

  const divClass = () => {
    return clsx("rounded-md flex w-full inputText", {
      "inputText-focus": focus,
    });
  };

  return (
    <div className={divClass()}>
      <div className="px-4 border-r-2 flex justify-center items-center">
        {icon === "email" && <User />}
        {icon === "password" && <Private />}
      </div>

      <input
        type={type}
        className={"w-full outline-none py-3 px-5"}
        placeholder={DataTransform.titlePipe(type)}
        onChange={onChange}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        required
        name={type}
      />
    </div>
  );
};

export default Login;
