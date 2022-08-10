import React from "react";
import Icon from "supercons";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { appRoutes } from "../../shared/routes/app/appRoutes";

const navBarOptions = [
  { icon: "home", label: "Home", url: appRoutes.HOME },
  { icon: "code", label: "Api", url: appRoutes.API },
  { icon: "docs", label: "Docs", url: appRoutes.DOCS },
];

const NavBar = () => {
  return (
    <div className="w-full p-4 px-10 mb-4">
      <div className="flex w-full shadow-lg rounded-md p-5">
        <div className="w-[20%] esm:hidden"></div>

        <div className="flex justify-center items-center gap-3 w-[60%] esm:w-[100%]">
          {navBarOptions.map((el, i) => (
            <NavBarOption key={i} {...el} />
          ))}
        </div>

        <div className="flex justify-end w-[20%] esm:hidden">
          <Link
            className="px-7 py-2 font-fontBold text-secondColor shadow-md text-lg rounded-md lg:block hidden"
            to={appRoutes.AUTH_ROUTES.LOGIN}
          >
            Get Full Access
          </Link>
        </div>
      </div>
    </div>
  );
};

const NavBarOption = ({ icon, label, url }) => {
  const optionClass = ({ isActive }) => {
    return clsx(
      "flex rounded-full px-5 py-2 gap-2 items-center transition-all duration-300",
      {
        "bg-principal-bg !text-white": isActive,
      }
    );
  };

  return (
    <NavLink className={optionClass} to={url}>
      <Icon glyph={icon} />
      <p className="mb-0 font-fontBold text-base pointer-events-none lg:block hidden">
        {label}
      </p>
    </NavLink>
  );
};

export default NavBar;
