import { useContext, useState } from "react";
import { SignOut, User } from "../../../shared/assets/icons";
import { UserContext } from "../../../shared/context/UserContext";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../shared/routes/app/APP_ROUTES";

const ProfileSection = () => {
  const { actualUser } = useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChangeOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex w-full h-[80px] justify-end items-center px-2 py-2">
      <div className="cursor-pointer w-full h-full flex items-center justify-center rounded">
        {openMenu && <ProfileMenu />}

        {actualUser ? (
          <div
            className="hover:shadow-2xl transition-all duration-300 rounded-full"
            onClick={handleChangeOpenMenu}
          >
            <img
              src={(actualUser && actualUser.image) || "/images/avatar.jpg"}
              alt="avatar"
              className="object-top object-cover rounded-full w-[50px] h-[50px] esm:w-[40px] esm:h-[40px]"
            />
          </div>
        ) : (
          <Link
            className="w-[50px] rounded-full h-[50px] bg-slate-100 flex justify-center items-center"
            to={APP_ROUTES.AUTH_ROUTES.LOGIN}
          >
            <User size={25} />
          </Link>
        )}
      </div>
    </div>
  );
};

const ProfileMenu = () => {
  const { handleSignOut } = useContext(UserContext);

  return (
    <div className="rounded-sm flex flex-col bg-white absolute shadow-md translate-x-20 -translate-y-5">
      <div
        className="px-4 py-2 flex gap-3 items-center transition-all hover:bg-slate-100 duration-300"
        onClick={handleSignOut}
      >
        <SignOut size={19} />
        <p className="mb-0 text-sm">SignOut</p>
      </div>
    </div>
  );
};

export default ProfileSection;
