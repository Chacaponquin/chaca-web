interface Props {
  children: JSX.Element
}

export default function ListItem({ children }: Props) {
  return (
    <div className="flex items-start w-full">
      <div className="pr-4">
        <div className="translate-y-[10px] min-w-[6px] min-h-[6px] rounded-full bg-black dark:bg-white"></div>
      </div>

      <div className="text-scale-7 dark:text-scale-12 leading-7 w-full">{children}</div>
    </div>
  )
}
