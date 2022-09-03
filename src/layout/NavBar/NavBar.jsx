import React, { useContext, useState, useEffect } from "react";
import Icon from "supercons";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { appRoutes } from "../../shared/routes/app/appRoutes";
import { UserContext } from "../../shared/context/UserContext";
import avatar from "../../assets/images/avatar.jpg";
import { useLocation } from "react-router-dom";

const navBarOptions = [
  { icon: "home", label: "Home", url: appRoutes.HOME },
  { icon: "code", label: "Api", url: appRoutes.API },
  //{ icon: "docs", label: "Docs", url: appRoutes.DOCS },
];

const NavBar = ({ handleOpenSideBar, handleOpenApiSideBar }) => {
  const { actualUser } = useContext(UserContext);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <div className="w-full py-4 px-8 esm:px-3 bg-transparent z-[90] mb-8">
      <div className="flex w-full shadow-lg rounded-md px-8 py-3 bg-white z-50 esm:px-4">
        <div className="w-[30%] esm:w-[50px] flex items-center">
          {location.pathname === appRoutes.API && (
            <button onClick={handleOpenApiSideBar} className="lg:hidden block">
              <Icon glyph="menu" />
            </button>
          )}
        </div>

        <div className="flex justify-center items-center gap-3 w-[40%] esm:w-[100%]">
          {navBarOptions.map((el, i) => (
            <NavBarOption key={i} {...el} windowSize={windowSize} />
          ))}
        </div>

        <div className="flex justify-end w-[30%] esm:w-[50px] items-center gap-3 text-lg">
          <div className="flex">
            {!actualUser && (
              <>
                {windowSize > 640 ? (
                  <Link to={appRoutes.AUTH_ROUTES.LOGIN}>
                    <button className="py-2 px-7 border-2 border-secondColor text-secondColor rounded-md transition-all duration-300 hover:bg-secondColor/20">
                      Account
                    </button>
                  </Link>
                ) : (
                  <Link
                    className="w-[45px] rounded-full h-[45px] bg-slate-100 flex justify-center items-center"
                    to={appRoutes.AUTH_ROUTES.LOGIN}
                  >
                    <Icon glyph="person" />
                  </Link>
                )}
              </>
            )}

            {actualUser && (
              <img
                src={(actualUser && actualUser.image) || avatar}
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

const NavBarOption = ({ icon, label, url, windowSize }) => {
  const optionClass = ({ isActive }) => {
    return clsx(
      "flex rounded-full px-5 py-2 gap-2 items-center transition-all duration-300 esm:px-4",
      {
        "bg-principal-bg !text-white": isActive,
      },
      { "hover:shadow-md": !isActive }
    );
  };

  return (
    <NavLink className={optionClass} to={url}>
      <Icon glyph={icon} size={windowSize > 640 ? 32 : 27} />
      <p className="mb-0 font-fontBold text-base pointer-events-none lg:block hidden">
        {label}
      </p>
    </NavLink>
  );
};

export default NavBar;
