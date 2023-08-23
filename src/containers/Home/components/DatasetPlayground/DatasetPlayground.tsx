import { DatasetCard } from "./components"

export default function DatasetPlayground({
  handleCreateSelectDataset,
}: {
  handleCreateSelectDataset: (i: number) => void
}) {
  return (
    <section className='w-full h-full flex justify-center items-center bg-grayColor'>
      <DatasetCard handleCreateSelectDataset={handleCreateSelectDataset} index={0} />
    </section>
  )
}
