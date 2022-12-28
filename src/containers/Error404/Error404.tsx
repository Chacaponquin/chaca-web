import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../shared/routes/app/APP_ROUTES";

const Error404 = () => {
  return (
    <div className="flex items-center w-full h-screen justify-center flex-col">
      <div className="flex flex-col items-center max-w-5xl px-4">
        <h1 className="lg:text-[18rem] font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-r from-principalColor to-thirdColor text-center mb-0 esm:text-[10rem] sm:text-[13rem]">
          404
        </h1>

        <div className="flex flex-col items-center -translate-y-16 esm:-translate-y-12">
          <h2 className="font-fontBold uppercase pt-5 lg:text-6xl mb-0 text-center esm:text-4xl esm:py-3 sm:text-5xl">
            Opps! Page Not Found
          </h2>

          <p className="mb-0 lg:text-xl text-center py-4 esm:text-base esm:py-4 sm:py-5 sm:text-lg esm:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            laudantium deserunt nostrum aperiam iure, perspiciatis ex. Earum aut
            temporibus nemo!
          </p>

          <div className="flex gap-7 esm:mt-3 esm:flex-col items-center esm:gap-3">
            <Link
              className="px-12 py-3 rounded-full border-4 border-solid border-principalColor font-bold bg-principalColor flex items-center hover:opacity-70 transition-all duration-300"
              to={APP_ROUTES.HOME}
            >
              <p className="uppercase text-white text-xl mb-0 text-center esm:text-base">
                Return Home
              </p>
            </Link>

            <Link
              className="px-12 py-3 rounded-full border-4 border-solid border-primary_color font-bold bg-white flex items-center esm:hidden hover:opacity-70 transition-all duration-300"
              to={APP_ROUTES.CONTACT_US}
            >
              <p className="uppercase text-primary_color text-xl mb-0 text-center esm:text-base">
                Report Problem
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
