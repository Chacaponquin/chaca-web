export default function ListItem({ children }: { children: JSX.Element }) {
  return (
    <div className="flex items-start">
      <div className="pr-4">
        <div className="translate-y-[10px] w-[6px] h-[6px] rounded-full bg-black"></div>
      </div>

      <div className="text-scale-7 font-fontDoc">{children}</div>
    </div>
  )
}
