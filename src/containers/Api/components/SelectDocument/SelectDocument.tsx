import MDView from "@modules/shared/components/MDView/MDView"

const SelectDocument = ({ content }: { content: string }) => {
  return (
    <div className='w-full flex items-start h-full py-4 px-10'>
      <MDView content={content} />
    </div>
  )
}

export default SelectDocument
