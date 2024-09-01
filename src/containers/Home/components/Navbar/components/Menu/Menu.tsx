import { useMenu } from "./hooks"
import { Button, Command, Icon, Item, Step, Title } from "./components"
import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { useLanguage, useTranslation } from "@modules/app/modules/language/hooks"
import { ChacaSelect } from "@form/components"
import { ContentLoader } from "@modules/shared/components"

interface Props {
  handleExportDataset(): void
  handleExportImage(): void
  handleAddSchema(): void
  handleDeleteAll(): void
  loading: boolean
}

export default function Menu({
  handleAddSchema,
  handleExportDataset,
  handleExportImage,
  handleDeleteAll,
  loading,
}: Props) {
  const { language } = useLanguage()
  const {
    items,
    handleChangeTheme,
    open,
    handleChangeOpen,
    listRef,
    handleChangeLanguage,
    languageOptions,
  } = useMenu({
    handleAddSchema,
    handleExportDataset,
    handleExportImage,
    handleDeleteAll,
  })

  const { THEME, LANGUAGE } = useTranslation({
    THEME: { en: "Theme", es: "Color" },
    LANGUAGE: { en: "Language", es: "Lenguaje" },
  })

  return (
    <div className="sm:ml-6 ml-4">
      {loading && <ContentLoader height={27} width={65} />}

      {!loading && (
        <div ref={listRef}>
          <Button open={open} onClick={handleChangeOpen} />

          {open && (
            <ul className="absolute rounded mt-2 dark:bg-scale-3 bg-white z-20 shadow-md p-1.5 dark:border-scale-7 border-[1px]">
              {items.map(({ icon, onClick, title, command }, index) => (
                <Item
                  key={index}
                  onClick={onClick}
                  handleCloseList={handleChangeOpen}
                  clickEffect={true}
                >
                  <div className="flex items-center gap-x-3.5">
                    <Icon icon={icon} />
                    <Title text={title} />
                  </div>

                  <Command text={command} />
                </Item>
              ))}

              <Step />

              <Item
                onClick={handleChangeTheme}
                handleCloseList={handleChangeOpen}
                clickEffect={false}
              >
                <Title text={THEME} />
                <ThemeSwitch />
              </Item>

              <Item clickEffect={false} handleCloseList={handleChangeOpen}>
                <Title text={LANGUAGE} />
                <ChacaSelect
                  options={languageOptions}
                  label={(l) => l.title}
                  value={(l) => l.type === language}
                  onChange={handleChangeLanguage}
                  placeholder="Lenguaje"
                  size="sm"
                />
              </Item>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
