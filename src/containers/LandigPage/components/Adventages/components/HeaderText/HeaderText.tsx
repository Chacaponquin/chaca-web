export default function HeaderText() {
  return (
    <header className="flex flex-col w-full items-start">
      <div className="flex text-5xl text-white text-left gap-2.5 flex-wrap esm:text-4xl">
        <h1 className="font-fontBold whitespace-nowrap">A solution for</h1>
        <p className="font-fontBold text-purple-6 whitespace-nowrap">all your needs</p>
      </div>

      <p className="text-scale-11 text-xl esm:text-lg mt-5 w-full max-w-[1000px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in quo voluptas eveniet qui
        atque veritatis recusandae, error ut ducimus earum eius sequi aliquid modi.
      </p>
    </header>
  )
}
