import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { APP_ROUTES } from "../../shared/routes/app/APP_ROUTES";
import { UserContext } from "../../shared/context/UserContext";
import { useLocation } from "react-router-dom";
import PrincipalButton from "../../shared/components/PrincipalButton/PrincipalButton";
import Home from "../../shared/assets/icons/Home";
import { v4 as uuid } from "uuid";
import Code from "../../shared/assets/icons/Code";
import Bars from "../../shared/assets/icons/Bars";
import User from "../../shared/assets/icons/User";

enum NavBarIcons {
  HOME = "HOME",
  API = "API",
}

const navBarOptions = [
  { icon: NavBarIcons.HOME, label: "Home", url: APP_ROUTES.HOME },
  { icon: NavBarIcons.API, label: "Api", url: APP_ROUTES.API },
  //{ icon: "docs", label: "Docs", url: APP_ROUTES.DOCS },
];

const NavBar = ({
  handleOpenSideBar,
  handleOpenApiSideBar,
}: {
  handleOpenApiSideBar: () => void;
  handleOpenSideBar: () => void;
}) => {
  const { actualUser } = useContext(UserContext);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <div className="w-full py-4 px-8 esm:px-3 bg-transparent z-[53] mb-8">
      <div className="flex w-full shadow-lg rounded-md px-8 py-3 bg-white z-50 esm:px-4">
        <div className="w-[30%] esm:w-[50px] flex items-center">
          {location.pathname === APP_ROUTES.API && (
            <button onClick={handleOpenApiSideBar} className="lg:hidden block">
              <Bars />
            </button>
          )}
        </div>

        <div className="flex justify-center items-center gap-3 w-[40%] esm:w-[100%]">
          {navBarOptions.map((el, i) => (
            <NavBarOption key={uuid()} {...el} windowSize={windowSize} />
          ))}
        </div>

        <div className="flex justify-end w-[30%] esm:w-[50px] items-center gap-3 text-lg">
          <div className="flex">
            {!actualUser && (
              <React.Fragment>
                {windowSize > 640 ? (
                  <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN} className="text-xl">
                    <PrincipalButton text={"Cuenta"} short={true} />
                  </Link>
                ) : (
                  <Link
                    className="w-[45px] rounded-full h-[45px] bg-slate-100 flex justify-center items-center"
                    to={APP_ROUTES.AUTH_ROUTES.LOGIN}
                  >
                    <User />
                  </Link>
                )}
              </React.Fragment>
            )}

            {actualUser && (
              <img
                src={(actualUser && actualUser.image) || "/images/avatar.jpg"}
                alt="avatar"
                className="object-top object-cover rounded-full w-[50px] h-[50px] cursor-pointer esm:w-[40px] esm:h-[40px]"
                onClick={handleOpenSideBar}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBarOption = ({
  icon,
  label,
  url,
  windowSize,
}: {
  label: String;
  url: string;
  icon: NavBarIcons;
  windowSize: number;
}) => {
  const optionClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(
      "flex rounded-full px-5 py-2 gap-2 items-center transition-all duration-300 esm:px-4",
      {
        "bg-principal-bg !text-white fill-white": isActive,
      },
      { "hover:shadow-md": !isActive }
    );
  };

  return (
    <NavLink className={optionClass} to={url}>
      <IconFilter icon={icon} size={windowSize > 640 ? 28 : 25} />
      <p className="mb-0 font-fontBold text-base pointer-events-none lg:block hidden">
        {label}
      </p>
    </NavLink>
  );
};

const IconFilter = ({ icon, size }: { icon: NavBarIcons; size: number }) => {
  if (icon === NavBarIcons.HOME) return <Home size={size} />;
  else if (icon === NavBarIcons.API) return <Code size={size} />;
  else return <></>;
};

export default NavBar;
