import { Header, Links } from "./components"

export default function TextSection() {
  return (
    <div className="flex flex-col justify-center">
      <Header />

      <p className="text-scale-11 text-xl mt-4 leading-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi earum suscipit, sapiente
        eaque officia voluptatum, nisi sunt quaerat consectetur in accusantium. Dignissimos incidunt
        fugit vel odit dolorum quasi, sunt reiciendis velit repellat dolorem nisi, unde pariatur
        doloribus iure possimus at?
      </p>

      <Links />
    </div>
  )
}
