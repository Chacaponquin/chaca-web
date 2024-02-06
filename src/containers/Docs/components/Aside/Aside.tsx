import { Header } from "./components"

interface Props {
  open: boolean
  handleClose(): void
}

export default function Aside({ handleClose, open }: Props) {
  function handleClickContainer() {
    handleClose()
  }

  return (
    <div
      className="flex w-full h-screen bg-scale-6/50 fixed top-0 left-0 z-[999]"
      onClick={handleClickContainer}
      style={{ visibility: open ? "visible" : "hidden" }}
    >
      <aside
        className="h-full flex flex-col bg-white min-w-[320px] max-w-[320px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Header handleClose={handleClose} />
      </aside>
    </div>
  )
}
