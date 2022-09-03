import React from "react";
import whyImage from "../../../assets/images/whyUs.png";
import PlayIcon from "../assets/PlayIcon";

const WhyUs = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center px-32 esm:px-5 xl:bg-second-bg bg-cover bg-no-repeat bg-transparent">
      <div className="flex items-center gap-5 flex-col-reverse xl:flex-row xl:gap-20">
        <div className="flex flex-col ">
          <div className="gap-[10px] flex items-center lg:text-6xl text-5xl esm:text-4xl mb-2 uppercase">
            <h1 className="font-fontExtraBold whitespace-nowrap">Por qué</h1>
            <h1 className="font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap">
              nosotros?
            </h1>
          </div>

          <p className="leading-[1.2] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            recusandae accusamus perferendis. Ut quas nisi sed, libero sapiente
            alias error fuga debitis unde nam aperiam, quae recusandae fugit quo
            tempore ab. Fuga autem possimus velit in quos, nesciunt perferendis
            officiis?
          </p>

          <div className="flex justify-end mt-4">
            <button className="flex items-center text-white px-7 py-2 text-xl bg-secondColor rounded-md gap-3">
              <PlayIcon />
              <p className="mb-0 whitespace-nowrap">Mirar Video</p>
            </button>
          </div>
        </div>

        <img
          src={whyImage}
          alt=""
          className="object-contain w-[500px] max-w-full"
        />
      </div>
    </div>
  );
};

export default WhyUs;
