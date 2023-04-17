import { PlayGroundMode } from "@containers/Admin/pages/EditDocumentation/interfaces/playgroundMode.type"
import { Image } from "@modules/shared/assets/icons"
import { useLanguage } from "@modules/shared/modules/app/hooks"
import clsx from "clsx"

export default function DocsInputHeader({
  handleClickInput,
  playgroundMode,
  handleChangePlaygroundMode,
}: {
  handleClickInput: () => void
  playgroundMode: PlayGroundMode
  handleChangePlaygroundMode: (mode: PlayGroundMode) => void
}) {
  const { ADD_IMAGE_TEXT, EDIT_TEXT, PREVIEW_TEXT } = useLanguage({
    ADD_IMAGE_TEXT: { en: "Add Image", es: "Subir Imagen" },
    EDIT_TEXT: { en: "Edit", es: "Editar" },
    PREVIEW_TEXT: { en: "Preview", es: "Vista Previa" },
  })

  const modeButtonsClass = (mode: PlayGroundMode) => {
    return clsx("py-[1px] px-4 text-base", {
      "text-black bg-white": mode === playgroundMode,
      "text-white bg-transparent": mode !== playgroundMode,
    })
  }

  return (
    <div className='flex items-center py-2 bg-darkColor px-5 w-full justify-between border-b-2 border-b-white'>
      <div>
        <button
          className='flex items-center gap-x-3 text-white bg-transparent'
          onClick={handleClickInput}
        >
          <Image size={20} />
          <p className='mb-0 text-sm font-fontBold'>{ADD_IMAGE_TEXT}</p>
        </button>
      </div>

      <div className='flex items-center gap-x-2'>
        <button
          className={modeButtonsClass("edit")}
          onClick={() => handleChangePlaygroundMode("edit")}
        >
          {EDIT_TEXT}
        </button>
        <button
          className={modeButtonsClass("preview")}
          onClick={() => handleChangePlaygroundMode("preview")}
        >
          {PREVIEW_TEXT}
        </button>
      </div>
    </div>
  )
}
