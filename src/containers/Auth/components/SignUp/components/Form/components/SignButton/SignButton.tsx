import { LoaderContainer } from "@modules/app/components/Loader"

export default function SignButton({ loading }: { loading: boolean }) {
  return (
    <div className="flex justify-center mt-4">
      <LoaderContainer loading={loading} size={50}>
        <button
          type="submit"
          className="transition-all duration-300 rounded-sm text-white bg-purple-6 hover:opacity-70 py-3 w-full text-2xl esm:text-xl font-fontMedium"
        >
          Sign Up
        </button>
      </LoaderContainer>
    </div>
  )
}
