import { Hits, useHits, useSearchBox } from "react-instantsearch"
import { Element, Empty } from "./components"

export default function Result() {
  const { items } = useHits()
  const { query } = useSearchBox()

  return (
    <>
      {items.length === 0 ? (
        <Empty query={query} />
      ) : (
        <Hits hitComponent={Element} classNames={{ list: "flex flex-col w-full gap-y-2 pt-3" }} />
      )}
    </>
  )
}
