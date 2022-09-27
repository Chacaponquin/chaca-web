import clsx from "clsx";
import { sideBarOptions } from "./helpers/sideBarOptions";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../shared/context/UserContext";
import { v4 as uuid } from "uuid";

const SideBar = ({
  openSideBar,
  handleCloseSideBar,
}: {
  openSideBar: boolean;
  handleCloseSideBar: () => void;
}) => {
  const { handleSignOut, actualUser } = useContext(UserContext);

  const sideBarClass = () =>
    clsx(
      "right-0 fixed top-0 min-h-screen z-50 w-[300px] bg-white px-8 py-5 transition-all duration-300",
      { "translate-x-full": !openSideBar },
      { "translate-x-0": openSideBar }
    );

  const containerClass = () =>
    clsx(
      "fixed w-screen h-screen top-0 right-0 overflow-hidden transition-all duration-300",
      { "!-z-[30] bg-transparent": !openSideBar },
      { "z-[99] bg-black/50 ": openSideBar }
    );

  return (
    <div className={containerClass()}>
      <div className={sideBarClass()}>
        <div className="flex flex-col w-full">
          <div className="cursor-pointer" onClick={handleCloseSideBar}>
            <Icon glyph="view-close" />
          </div>

          <div className="flex flex-col w-full items-center">
            <img
              src={(actualUser && actualUser.image) || "/images/avatar.jpg"}
              alt="avatar"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />

            <div className="flex flex-col w-full gap-3 mt-5">
              {sideBarOptions.map((el, i) => (
                <NavLink
                  className="flex gap-4 items-center px-4 py-2"
                  to={el.url}
                  key={uuid()}
                >
                  <Icon glyph={el.icon} />
                  <h1 className="mb-0 text-xl font-fontBold">{el.label}</h1>
                </NavLink>
              ))}
              <button
                className="flex items-center gap-4 px-4 py-2"
                onClick={handleSignOut}
              >
                <Icon glyph="door-leave" />
                <h1 className="mb-0 text-xl font-fontBold">Sign Out</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
