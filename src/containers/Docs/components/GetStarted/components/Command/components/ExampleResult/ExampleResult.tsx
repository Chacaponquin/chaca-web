import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
{
  "user": [
    {
      "id": "cb242e10-968c-4bd4-bbdd-7d640216c9be",
      "username": "Grayson.",
      "image": null
    },
    {
      "id": "e9e96941-79a4-4b46-844d-cdab1d3b5e86",
      "username": "Aaliyah_",
      "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHw2MXx8cGVvcGxlfGVufDB8fHx8MTY2Njk3MDgzMw&ixlib=rb-4.0.3&q=80"
    },
    {
      "id": "54add0de-7e28-49d8-aabe-92972c625722",
      "username": "Emily845",
      "image": null
    },
    {
      "id": "a1e35b25-d3d3-45b4-9152-6b1c734eb156",
      "username": "Wyatt_",
      "image": null
    },
    {
      "id": "ccc5b7bc-2ed2-4c3e-8200-20441362072c",
      "username": "Asher.",
      "image": null
    },
    {
      "id": "455993eb-ce4b-47b4-a268-a3a697584582",
      "username": "Caleb_",
      "image": "https://pixabay.com/get/g4e752929410939dc1463a65dc0a54c261625b8d5f5d599bf6f7e0125ce9e64c9a10dae89559975a0811cccb5b087df519067e775815e81825e2962cf1f35cb4f_1280.jpg"
    },
    {
      "id": "5a84d98a-d38c-422c-b0c6-5606689959a1",
      "username": "Emma281",
      "image": "https://images.unsplash.com/photo-1513171920216-2640b288471b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHwxN3x8cGVvcGxlfGVufDB8fHx8MTY2Njk3MDgzMA&ixlib=rb-4.0.3&q=80"
    },
    {
      "id": "59d278a5-1bc9-4481-b5b0-a1a8c5a1c078",
      "username": "Ezekiel265",
      "image": null
    },
    {
      "id": "7590c1ed-300e-447e-9be8-dd9441022c6c",
      "username": "Addison.",
      "image": null
    },
    {
      "id": "aa0bce7a-d847-4d78-86ca-c321d7b5509a",
      "username": "Carter241",
      "image": "https://pixabay.com/get/g606b1874787a63109d8de4e9f172fd1ac99e1db160fc09e194de271ff8e3a32b80c50c6c1d294586d8b91484386ed730c9b07f9dd3f017c815ea1fefce8af529_1280.jpg"
    }
  ]
}
`

export default function ExampleResult() {
  return <Code title="user.json" code={code} language="json" />
}
