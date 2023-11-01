import { LoaderContainer } from "@modules/app/components/Loader"

export default function LoginButton({
  className,
  loading,
  text,
}: {
  text: string
  className: string
  loading: boolean
}) {
  return (
    <LoaderContainer loading={loading} size={50}>
      <button className={className + " bg-purple-6 text-white"} type="submit">
        {text}
      </button>
    </LoaderContainer>
  )
}
