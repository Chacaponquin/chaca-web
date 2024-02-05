import ApiRouteExample from "../ApiRouteExample/ApiRouteExample"

export default function PostSchemaExampleOne() {
  const objectExample = {
    id: "30b8ee45-aa06-4948-86a6-16a161733966",
    username: "Nova974",
    image: "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg",
  }

  const body = {
    id: "id.uuid",
    username: "internet.userName",
    image: "image.people",
  } as never

  return <ApiRouteExample code={objectExample} url="api/schema" method="POST" body={body} />
}
