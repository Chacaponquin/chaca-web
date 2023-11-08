import { Left, Right } from "./components"
import { useFooter } from "./hooks"

export default function Footer() {
  const { LINKS } = useFooter()

  return (
    <footer className="flex justify-center border-t-[1px] border-scale-11 w-full py-7">
      <div className="max-w-[1200px] w-full flex justify-between items-center">
        <Left />
        <Right links={LINKS} />
      </div>
    </footer>
  )
}
