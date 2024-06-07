import { APP_COLORS } from "@modules/app/constants"
import { THEME } from "@modules/app/modules/theme/constants"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { Waveform } from "@uiball/loaders"

interface Props {
  size: number
}

export default function Loader({ size }: Props) {
  const { theme } = useTheme()

  function filterColor(): string {
    if (theme === THEME.LIGHT) {
      return APP_COLORS.PRIMARY
    } else {
      return "#ffffff"
    }
  }

  return (
    <div id="loader">
      <Waveform color={filterColor()} size={size} />
    </div>
  )
}
