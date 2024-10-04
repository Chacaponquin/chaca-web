interface Props {
  image: string
}

export default function ResponseImage({ image }: Props) {
  return (
    <div className="flex justify-center w-full py-4 px-8">
      <img src={image} alt="response" className="w-full object-contain max-w-[500px] rounded" />
    </div>
  )
}
