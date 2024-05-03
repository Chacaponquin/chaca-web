import { ModalContainer } from "@modules/modal/shared/components"
import { useExportImage } from "./hooks"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { ChacaSelect, ChacaTextInput } from "@form/components"
import { Image } from "./components"
import { ExportImageFunc } from "@modules/modal/interfaces"

type Props = {
  next: ExportImageFunc
}

export default function ExportImage({ next }: Props) {
  const {
    handleNext,
    showImage,
    form,
    handleChangeFormat,
    handleChangeName,
    formats,
    foundFormat,
  } = useExportImage({ next: next })

  const { TEXT, TITLE, NAME_PLACEHOLDER, FORMAT_PLACEHOLDER, NAME, FORMAT } = useTranslation({
    TEXT: { en: "Export", es: "Exportar" },
    TITLE: { en: "Export image", es: "Exportar imagen" },
    NAME_PLACEHOLDER: { en: "Name", es: "Nombre" },
    FORMAT_PLACEHOLDER: { en: "Format", es: "Formato" },
    NAME: { en: "Filename", es: "Nombre de archivo" },
    FORMAT: { en: "Format", es: "Formato" },
  })

  return (
    <ModalContainer
      handleNext={handleNext}
      name="export-image"
      nextText={TEXT}
      title={TITLE}
      type="edit"
    >
      <Image src={showImage} />

      <div className="flex flex-col gap-y-3 w-full">
        <FormInputSection vertical={false} labelText={NAME}>
          <ChacaTextInput
            disabled={false}
            name="export-image"
            value={form.name}
            onChange={handleChangeName}
            size="base"
            type="text"
            placeholder={NAME_PLACEHOLDER}
          />
        </FormInputSection>

        {foundFormat && (
          <FormInputSection labelText={FORMAT} vertical={false}>
            <ChacaSelect
              options={formats}
              onChange={handleChangeFormat}
              labelKey="name"
              valueKey="name"
              placeholder={FORMAT_PLACEHOLDER}
              size="base"
              value={foundFormat.name}
            />
          </FormInputSection>
        )}
      </div>
    </ModalContainer>
  )
}
