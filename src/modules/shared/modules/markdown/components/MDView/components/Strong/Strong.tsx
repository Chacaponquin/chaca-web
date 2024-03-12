interface Props {
  children: string
}

export default function Strong({ children }: Props) {
  return (
    <strong className="inline font-normal font-fontMedium text-scale-7 dark:text-scale-12">
      {children}
    </strong>
  )
}
