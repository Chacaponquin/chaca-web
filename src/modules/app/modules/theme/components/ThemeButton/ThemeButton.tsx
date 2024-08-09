import { IconButton } from "@form/components"
import { useTheme } from "../../hooks"
import { THEME } from "../../constants"
import { Dark, Light } from "@modules/app/modules/icon/components"

export default function ThemeButton() {
  const { theme, handleChangeTheme } = useTheme()

  function handleChange() {
    if (theme === THEME.LIGHT) {
      handleChangeTheme(THEME.DARK)
    } else {
      handleChangeTheme(THEME.LIGHT)
    }
  }

  return (
    <IconButton
      onClick={handleChange}
      icon={theme === THEME.LIGHT ? Light : Dark}
      size={23}
      space="base"
    />
  )
}
