import React from "react";
import service1 from "../assets/services/969.jpg";
import service2 from "../assets/services/971.jpg";
import service3 from "../assets/services/984.jpg";

const Services = () => {
  const services = [
    {
      image: service1,
      title: "Configura tus propios datos",
      description:
        "No tendrás límite de opciones para los campos de tus esquemas. Escribe las reglas y las condiciones que estos deben cumplir",
    },
    {
      image: service2,
      title: "Exportalos en diferentes formatos",
      description:
        "Ten la capacidad de exportar tus datos creados en el formato que necesites, incluso en código",
    },
    {
      image: service3,
      title: "Comparte tus esquemas con la comunidad",
      description:
        "Compara y busca esquemas de datos acordes a lo que quieres crear en la pestaña de comunidad, y también comparte los tuyos para ayudar a mas usuarios",
    },
  ];

  return (
    <div className="w-screen flex justify-center items-center flex-col gap-5 lg:px-20 px-14 esm:px-5 lg:py-20 sm:py-12 esm:py-6">
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center lg:text-6xl text-5xl esm:text-4xl uppercase gap-x-[10px] flex-wrap">
          <h1 className="font-fontExtraBold">Nuestros</h1>
          <h1 className="font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap">
            Servicios
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 w-full grid-cols-1">
        {services.map((el, i) => (
          <div key={i} className="shadow-lg rounded-md w-full text-center">
            <img
              src={el.image}
              alt=""
              className="object-cover md:h-[300px] h-[200px] w-full rounded-md"
            />

            <div className="flex flex-col p-6 esm:px-3">
              <h1 className="font-fontBold mb-2 text-2xl esm:text-xl">
                {el.title}
              </h1>
              <p className="mb-0 text-gray-500 text-lg esm:text-base">
                {el.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
