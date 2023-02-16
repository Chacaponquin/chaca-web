import MDView from "@modules/shared/components/MDView/MDView"

export default function PreviewPlayground({ content }: { content: string }) {
  return (
    <div className='py-4 px-10'>
      <MDView content={content} />
    </div>
  )
}
