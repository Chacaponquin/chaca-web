import { PlayIcon } from "../../../shared/assets/icons";
import { ChacaIconButton } from "../../../shared/components/ChacaButton";

const WhyUs = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center px-32 esm:px-5 xl:bg-second-bg bg-cover bg-no-repeat bg-transparent">
      <div className="flex items-center gap-5 flex-col-reverse xl:flex-row xl:gap-20">
        <div className="flex flex-col ">
          <div className="gap-x-[10px] flex items-center lg:text-6xl text-5xl esm:text-4xl mb-2 uppercase flex-wrap">
            <h1 className="font-fontExtraBold whitespace-nowrap">Por qué</h1>
            <h1 className="font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap">
              nosotros?
            </h1>
          </div>

          <div className="leading-[1.2] text-lg">
            En el mundo del{" "}
            <h2 className="inline font-fontBold text-secondColor">
              desarrollo de software
            </h2>{" "}
            es común la necesidad de datos para probar algoritmos, pruebas,
            funcionalidades, entre otras partes. La creación de estos datos de
            forma tal que sean coherentes y cumplan las condiciones marcadas por
            el cliente o el desarrollador suele ser un proceso tedioso.{" "}
            <h2 className="inline font-fontBold text-secondColor">
              Para eso te brindamos esta herramienta para que puedas crear la
              cantidad de datos que desees bajo tus condiciones y sobre todo{" "}
              completamente gratis.
            </h2>
          </div>

          <div className="flex justify-end mt-4">
            <ChacaIconButton
              color="gradient"
              icon={<PlayIcon size={20} />}
              text="Mirar Video"
              size="extra-large"
              onClick={() => {}}
            />
          </div>
        </div>

        <img
          src={"/images/whyUs.png"}
          alt=""
          className="object-contain w-[500px] max-w-full"
        />
      </div>
    </div>
  );
};

export default WhyUs;
