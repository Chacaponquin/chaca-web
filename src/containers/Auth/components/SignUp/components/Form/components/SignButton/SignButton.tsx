interface Props {
  loading: boolean
}

export default function SignButton({ loading }: Props) {
  return (
    <div className="flex justify-center mt-4">
      <button
        type="submit"
        disabled={loading}
        className="transition-all duration-300 rounded-sm text-white bg-purple-6 hover:opacity-70 py-3 w-full text-2xl esm:text-xl font-fontMedium"
      >
        Sign Up
      </button>
    </div>
  )
}
