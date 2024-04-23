interface Props {
  text: string
  loading: boolean
}

export default function LoginButton({ loading, text }: Props) {
  return (
    <button
      className="rounded flex justify-center items-center py-4 esm:py-3 w-full esm:text-lg text-xl font-fontMedium uppercase transition-all duration-300 whitespace-nowrap hover:opacity-70 bg-purple-6 text-white"
      type="submit"
      disabled={loading}
    >
      {text}
    </button>
  )
}
