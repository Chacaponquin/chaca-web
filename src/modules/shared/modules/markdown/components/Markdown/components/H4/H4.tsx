interface Props {
  children: string
}

export default function H4({ children }: Props) {
  return <h4 className="text-xl esm:text-base mb-1 mt-4 font-fontSemiBold">{children}</h4>
}
