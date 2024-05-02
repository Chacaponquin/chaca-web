export default function Label({ htmlFor, text }: { htmlFor: string; text: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-0 text-base whitespace-nowrap font-fontMedium dark:text-scale-11"
    >
      {text}:
    </label>
  )
}
