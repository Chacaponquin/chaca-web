import { SCREEN_SIZES } from "@modules/app/constants"
import { useScreen } from "@modules/shared/hooks"
import { createContext, createRef, RefObject } from "react"

interface Props {
  fieldsMenuRef: RefObject<HTMLElement>
  playgroundRef: RefObject<HTMLDivElement>
  exportLink: RefObject<HTMLAnchorElement>
  smallWindow: boolean
}

export const HomeContext = createContext<Props>({ smallWindow: false } as Props)

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const fieldsMenuRef = createRef<HTMLElement>()
  const playgroundRef = createRef<HTMLDivElement>()
  const exportLink = createRef<HTMLAnchorElement>()

  const { condition } = useScreen(SCREEN_SIZES.LG)

  const data: Props = {
    fieldsMenuRef,
    playgroundRef,
    smallWindow: !condition,
    exportLink,
  }

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>
}
