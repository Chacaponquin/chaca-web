import { ContentLoader } from "@modules/shared/components"

export default function Loader() {
  return (
    <div className="flex flex-col px-3.5 gap-y-2 pt-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <ContentLoader height={30} key={index} />
      ))}
    </div>
  )
}
