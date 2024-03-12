import { Loader } from "@modules/app/components"
import { SCREEN_SIZES } from "@modules/app/constants"
import { useScreen } from "@modules/shared/hooks"

export default function Loading() {
  const { bigScreen } = useScreen(SCREEN_SIZES.LG)

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Loader size={bigScreen ? 180 : 120} />
    </div>
  )
}
