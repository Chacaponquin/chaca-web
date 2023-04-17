import { LINKS } from "@containers/LandigPage/constants/Links"
import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/modules/app/hooks"
import { v4 as uuid } from "uuid"

export default function MeSection() {
  const { DESCRIPTION, OPTION_ONE, OPTION_THREE, OPTION_TWO, BY_TEXT, LOVE_MESSSAGE_ONE } =
    useLanguage({
      LOVE_MESSSAGE_ONE: { en: "Make with", es: "Hecho con" },
      BY_TEXT: { en: "but", es: "por" },
      DESCRIPTION: {
        en: "Chaca is an open source project dedicated to creating fake data and exporting it in different formats from Node js with rules imposed by you to get more logic between them. It also offers you:",
        es: "Chaca es un proyecto open source dedicado a la creación de datos falsos y la exportación de estos en distintos formatos desde Node js con reglas impuestas por ti para conseguir una mayor lógica entre ellos. Además te ofrece:",
      },
      OPTION_ONE: {
        en: "A web tool for you to carry out the process without having to use the library",
        es: "Una herramienta web para que realices el proceso sin tener que utilizar la biblioteca",
      },
      OPTION_TWO: {
        en: "A REST API for you to create data dynamically without having to have it in a file",
        es: "Una REST API para que crees datos de forma dinámica sin necesidad de tenerlos en un archivo",
      },
      OPTION_THREE: {
        en: "A library for Node.js to create and export from your Javascript or Typescript application",
        es: "Una librería en Node.js para crear y exportar desde tu aplicación Javascript o Typescript",
      },
    })

  const OPTIONS = [OPTION_ONE, OPTION_THREE, OPTION_TWO]

  return (
    <div className='w-full py-20 flex justify-center px-10'>
      <div className='flex w-full max-w-[1000px] items-center justify-between gap-7'>
        <img
          src={APP_IMAGES.ME_IMAGE.image}
          alt={APP_IMAGES.ME_IMAGE.alt}
          className='w-[300px] xl:block hidden'
        />

        <div className='flex flex-col'>
          <h1 className='font-fontTitle text-5xl esm:text-4xl esm:text-center'>
            {LOVE_MESSSAGE_ONE} &#128151; {BY_TEXT}{" "}
            <a
              href={LINKS.CHACAPONQUIN_LINK}
              target='_blank'
              rel='noreferrer'
              className='font-fontTitle text-principalColor underline transition-all hover:opacity-70 duration-300'
            >
              Chacaponquin
            </a>
          </h1>

          <div className='text-xl esm:text-lg mt-4 text-grayStrongColor'>
            <p className=''>{DESCRIPTION}</p>

            <div className='pl-4 mt-2'>
              {OPTIONS.map((o) => (
                <div className='flex' key={uuid()}>
                  <div className='w-[8px] h-[8px] min-h-[8px] min-w-[8px] bg-black rounded-full translate-y-[8px] mr-4'></div>
                  <p>{o}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
