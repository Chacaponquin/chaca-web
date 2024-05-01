import { useMenu } from "./hooks"
import { Button, Command, Icon, Item, Step, Title } from "./components"
import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleExportAllDatasets(): void
  handleExportImage(): void
  handleAddDataset(): void
  handleDeleteAll(): void
}

export default function Menu({
  handleAddDataset,
  handleExportAllDatasets,
  handleExportImage,
  handleDeleteAll,
}: Props) {
  const { items, handleChangeTheme, open, handleChangeOpen, listRef } = useMenu({
    handleAddDataset,
    handleExportAllDatasets,
    handleExportImage,
    handleDeleteAll,
  })

  const { THEME } = useTranslation({ THEME: { en: "Theme", es: "Color" } })

  return (
    <div className="sm:ml-6 ml-4">
      <div ref={listRef}>
        <Button open={open} onClick={handleChangeOpen} />

        {open && (
          <ul className="absolute rounded mt-2 dark:bg-scale-3 bg-white z-20 shadow-md">
            {items.map(({ icon, onClick, title, command }, index) => (
              <Item
                key={index}
                onClick={onClick}
                handleCloseList={handleChangeOpen}
                clickEffect={true}
              >
                <div className="flex items-center gap-x-5">
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
          </ul>
        )}
      </div>
    </div>
  )
}
