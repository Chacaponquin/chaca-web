import React, { useContext, useState } from "react";
import {
  buttonClass,
  formInputDivClass,
  inputClass,
  labelClass,
} from "../helpers/classes";
import { usePost } from "../../../shared/hooks/usePost";
import { apiRoutes } from "../../../shared/routes/api/apiRoutes";
import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../../shared/context/UserContext";

const Login = () => {
  const { handleSignIn } = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = usePost({
    url: apiRoutes.AUTH_ROUTES.LOGIN,
    body: loginData,
    onError: (error) => {
      const errorMessage = error.response.data;

      toast.error(errorMessage ? error.message : "Hubo un error");
    },
    onCompleted: (data) => handleSignIn(data.token),
  });

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);
    loginUser();
  };

  return (
    <div className="w-full h-screen bg-principal-bg bg-cover bg-no-repeat flex justify-center items-center">
      <ToastContainer />
      <div className="py-5 px-8 bg-white rounded-lg">
        <form
          action=""
          className="flex flex-col gap-5 w-80"
          onSubmit={handleSubmit}
        >
          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Email:
            </label>
            <input
              type="email"
              placeholder="Email..."
              name="email"
              className={inputClass}
              onChange={handleChange}
              required
            />
          </div>

          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Password:
            </label>
            <input
              type="password"
              placeholder="Password..."
              name="password"
              className={inputClass}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center w-full">
            <LoaderContainer className={"w-[55px]"} loading={loading}>
              <button className={buttonClass}>Login</button>
            </LoaderContainer>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
