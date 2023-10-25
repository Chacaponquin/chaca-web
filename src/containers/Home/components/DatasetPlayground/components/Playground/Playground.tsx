import { useContext } from "react"
import { HomeContext } from "@containers/Home/context"

interface Props {
  children: React.ReactNode
}

export default function Playground({ children }: Props) {
  const { playgroundRef } = useContext(HomeContext)

  return (
    <div className="relative w-full h-full p-10" ref={playgroundRef} id="dataset-playground">
      {children}
    </div>
  )
}
