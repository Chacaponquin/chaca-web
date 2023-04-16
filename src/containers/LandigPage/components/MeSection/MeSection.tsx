import { LINKS } from "@containers/LandigPage/constants/Links"
import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import { v4 as uuid } from "uuid"

export default function MeSection() {
  const { DESCRIPTION, OPTION_ONE, OPTION_THREE, OPTION_TWO } = useLanguage({
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
      es: "Una librería para Node.js para crear y exportar desde tu aplicación Javascript o Typescript",
    },
  })

  const OPTIONS = [OPTION_ONE, OPTION_THREE, OPTION_TWO]

  return (
    <div className='w-screen py-20 flex justify-center'>
      <div className='flex w-[1000px] items-center justify-between gap-7'>
        <img src={APP_IMAGES.ME_IMAGE.image} alt={APP_IMAGES.ME_IMAGE.alt} className='w-[300px]' />

        <div className='flex flex-col'>
          <h1 className='font-fontTitle text-5xl'>
            Make with &#128151; by{" "}
            <a
              href={LINKS.CHACAPONQUIN_LINK}
              target='_blank'
              rel='noreferrer'
              className='font-fontTitle text-principalColor underline transition-all hover:opacity-70 duration-300'
            >
              Chacaponquin
            </a>
          </h1>

          <div className='text-xl mt-4 text-grayStrongColor'>
            <p className=''>{DESCRIPTION}</p>

            <div className='pl-4 mt-2'>
              {OPTIONS.map((o) => (
                <div className='flex' key={uuid()}>
                  <div className='w-[8px] h-[8px] bg-black rounded-full translate-y-[8px] mr-4'></div>
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
