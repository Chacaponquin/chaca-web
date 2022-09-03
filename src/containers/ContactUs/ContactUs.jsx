import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import Icon from "supercons";

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const labelClass = "text-xl font-fontBold mb-1";

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-third-bg bg-cover bg-no-repeat">
      <div className="bg-white w-[80%] h-[85%] rounded-md shadow-md flex px-20 py-10">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="uppercase font-fontExtraBold text-7xl">
              Contáctanos
            </h1>
            <p className="text-gray-500 text-xl mt-2">
              Tienes alguna sugerencia, pregunta o nos quieres hablar para algo?
              Llena un formulario con un mensaje y los responderemos
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className={labelClass}>
                Name:
              </label>
              <InputText className="text-base" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className={labelClass}>
                Email:
              </label>
              <InputText className="text-base" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className={labelClass}>
                Message:
              </label>
              <InputTextarea className="resize-none h-[150px] text-base py-2" />
            </div>

            <div className="flex justify-end">
              <button className="flex gap-3 items-center text-white bg-secondColor px-7 py-3 rounded-md transition-all duration-300 hover:bg-secondColor/70">
                <Icon glyph="send-fill" size={32} />
                <p className="mb-0 text-xl font-fontBold">Enviar</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
