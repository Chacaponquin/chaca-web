import React, { useContext } from "react";
import Icon from "supercons";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { appRoutes } from "../../shared/routes/app/appRoutes";
import { UserContext } from "../../shared/context/UserContext";
import avatar from "../../assets/images/avatar.jpg";
import AccountButton from "./components/AccountButton/AccountButton";
import { useLocation } from "react-router-dom";

const navBarOptions = [
  { icon: "home", label: "Home", url: appRoutes.HOME },
  { icon: "code", label: "Api", url: appRoutes.API },
  //{ icon: "docs", label: "Docs", url: appRoutes.DOCS },
];

const NavBar = ({ handleOpenSideBar, handleOpenApiSideBar }) => {
  const { actualUser } = useContext(UserContext);

  const location = useLocation();

  return (
    <div className="w-full py-4 px-8 mb-4 esm:px-3 bg-transparent z-50">
      <div className="flex w-full shadow-lg rounded-md px-5 py-3 bg-white z-50">
        <div className="w-[30%] esm:w-[50px] flex items-center">
          {location.pathname === appRoutes.API && (
            <button onClick={handleOpenApiSideBar} className="lg:hidden block">
              <Icon glyph="menu" />
            </button>
          )}
        </div>

        <div className="flex justify-center items-center gap-3 w-[40%] esm:w-[100%]">
          {navBarOptions.map((el, i) => (
            <NavBarOption key={i} {...el} />
          ))}
        </div>

        <div className="flex justify-end w-[30%] esm:w-[50px] items-center gap-3 text-lg">
          <div className="esm:hidden flex">
            {!actualUser && (
              <>
                <Link to={appRoutes.AUTH_ROUTES.LOGIN}>
                  <AccountButton />
                </Link>
              </>
            )}

            {actualUser && (
              <img
                src={avatar}
                alt="avatar"
                className="object-top object-cover rounded-full w-[50px] h-[50px] cursor-pointer"
                onClick={handleOpenSideBar}
              />
            )}
          </div>
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
