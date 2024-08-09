import { DocSubSection } from "@modules/docs/domain/core/base"
import { useMemo, useState } from "react"

interface Props {
  selected: DocSubSection
}

export default function useLayout({ selected }: Props) {
  const [openAside, setOpenAside] = useState(false)

  function handleChangeOpenAside() {
    setOpenAside((prev) => !prev)
  }

  const location: string[] = useMemo(() => {
    return [selected.parent.title, selected.title]
  }, [])

  function handleOpenSearch() {
    // TODO
  }

  return {
    handleChangeOpenAside,
    openAside,
    location,
    handleOpenSearch,
  }
}
