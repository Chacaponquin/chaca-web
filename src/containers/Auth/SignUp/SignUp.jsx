import React, { useContext, useState } from "react";
import {
  buttonClass,
  formInputDivClass,
  inputClass,
  labelClass,
} from "../helpers/classes";
import image from "../../../assets/images/signUp-image.png";
import { usePost } from "../../../shared/hooks/usePost";
import { apiRoutes } from "../../../shared/routes/api/apiRoutes";
import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../../shared/context/UserContext";
import { InputText } from "primereact/inputtext";

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
    onError: (error) => console.log(error),
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

  return (
    <div className="w-full h-screen flex justify-center items-center bg-second-bg bg-cover bg-no-repeat lg:px-32 sm:px-20 esm:px-10">
      <ToastContainer />
      <div className="w-full flex gap-10 items-center lg:justify-between justify-center">
        <form
          className="flex flex-col gap-3 w-96 bg-white px-8 py-5 shadow-lg rounded-md"
          onSubmit={handleSubmit}
        >
          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Username:
            </label>
            <InputText
              type="text"
              className={inputClass}
              placeholder="Username..."
              required
              name="username"
              onChange={handleChange}
              value={signUpData.username}
            />
          </div>

          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Email:
            </label>
            <InputText
              type="email"
              className={inputClass}
              placeholder="Email..."
              required
              name="email"
              onChange={handleChange}
              value={signUpData.email}
            />
          </div>

          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Password:
            </label>
            <InputText
              type="password"
              className={inputClass}
              placeholder="Password..."
              required
              name="password"
              onChange={handleChange}
              value={signUpData.password}
            />
          </div>

          <div className={formInputDivClass}>
            <label htmlFor="" className={labelClass}>
              Comfirm Password:
            </label>
            <InputText
              type="password"
              className={inputClass}
              placeholder="Comfirm Password..."
              required
              name="comfirmPassword"
              onChange={handleChange}
              value={signUpData.comfirmPassword}
            />
          </div>

          <div className="w-full flex justify-center">
            <LoaderContainer loading={loading} className="w-[55px]">
              <button className={buttonClass}>Sign Up</button>
            </LoaderContainer>
          </div>
        </form>

        <div className="lg:flex hidden flex-col items-center">
          <img
            src={image}
            alt="signUp"
            className="object-cover w-[650px] min-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
