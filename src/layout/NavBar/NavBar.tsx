import { useContext } from "react";
import { UserContext } from "../../shared/context/UserContext";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { ChacaSimpleButton } from "../../shared/components/ChacaButton";
import { APP_ROUTES } from "../../shared/routes/app/APP_ROUTES";

const NavBar = () => {
  const { actualUser } = useContext(UserContext);

  const links = [
    { route: APP_ROUTES.HOME, title: "Home" },
    { route: APP_ROUTES.DOCS, title: "Docs" },
    { route: APP_ROUTES.API, title: "Api" },
    { route: APP_ROUTES.CONTACT_US, title: "Contact Us" },
  ];

  return (
    <div className="w-full py-4 px-8 esm:px-0 esm:py-0 bg-transparent z-[53] mb-6">
      <div className="flex w-full shadow-lg rounded px-8 py-3 bg-white z-50 esm:px-0 justify-end">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-11">
            {links.map((link) => (
              <Link to={link.route}>
                <div
                  className="font-fontBold text-lg transition-all duration-300 hover:text-black text-slate-500"
                  key={uuid()}
                >
                  {link.title}
                </div>
              </Link>
            ))}
          </div>

          <Link to={APP_ROUTES.AUTH_ROUTES.LOGIN}>
            <ChacaSimpleButton
              onClick={() => {}}
              color="primary"
              size="large"
              text="Account"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
