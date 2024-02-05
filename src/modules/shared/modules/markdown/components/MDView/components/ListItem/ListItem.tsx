export default function ListItem({ children }: { children: JSX.Element }) {
  return (
    <div className="flex items-start">
      <div className="pr-4">
        <div className="translate-y-[10px] min-w-[6px] min-h-[6px] rounded-full bg-black dark:bg-white"></div>
      </div>

      <div className="text-scale-7 dark:text-scale-11 font-fontDoc leading-7">{children}</div>
    </div>
  )
}
