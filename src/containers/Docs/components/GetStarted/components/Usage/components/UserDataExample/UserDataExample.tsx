import { Code } from "@markdown/components/Markdown/components"

export default function UserDataExample() {
  const code = `
[
	{
		"id": 1,
		"username": "Nolan3852",
		"image": "https://pixabay.com/get/g6d597a4d6b3735f7ffbca33ae946d0b74d614331c006c0fefbb0559707ba46c21d33fb2e448873bb1434adbd5f773e4dbface0aa6d22b310be1aff8e65ecb9f0_1280.jpg",
		"email": "noah0589@comcast.com"
	},
	{
		"id": 2,
		"username": "Stella.",
		"image": "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg",
		"email": "aria0@rocketmail.com"
	},
	{
		"id": 3,
		"username": "Eleanor3857",
		"image": "https://pixabay.com/get/g323360e315f4635a3b5f90ac9fe6329301cf6b176b90f2b8d4a53b38e7f791b3f370b66746efeb821781eca8323a89c522ffffb69875c12f196486db8713e28c_1280.jpg",
		"email": "luna522@yahoo.com"
	}
]
  `

  return (
    <Code
      title={{ en: "User schema generated data", es: "Datos generados del schema User" }}
      language="json"
      code={code}
    />
  )
}
