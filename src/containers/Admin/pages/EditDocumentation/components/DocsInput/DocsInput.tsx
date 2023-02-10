import MDEditor from "@uiw/react-md-editor"

export default function DocsInput({
  handleChangeContent,
  content,
}: {
  handleChangeContent: (value: string) => void
  content: string
}) {
  const handleChange = (value: string | undefined) => {
    if (value) {
      handleChangeContent(value)
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <MDEditor
        height={600}
        value={content}
        onChange={handleChange}
        hideToolbar={true}
        style={{ fontSize: "18px" }}
        preview={"edit"}
        className='!bg-darkColor !rounded-none code-container px-3'
      />

      <button className='w-full hover:text-white bg-darkColor px-4 py-1 text-base text-white/70 border-t-2 border-t-white text-left'>
        Unir imagenes
      </button>
    </div>
  )
}
