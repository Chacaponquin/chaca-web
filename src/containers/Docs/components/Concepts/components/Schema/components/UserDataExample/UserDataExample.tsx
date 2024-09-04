import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function UserDataExample() {
  const code = `
[
	{
		"id": 1,
		"username": "Elizabeth4",
		"email": "paisley3213@home.com",
		"password": "DsFGZHZXsFFKxkD",
		"image": "https://pixabay.com/get/gf42031ab2362047e21614ada6ce3f341c8b9f46ae0e69c111afb7f673ba1e0151e40e88a731dfe7d1a01bc6a4632969958ea7cbe0ec72675a4229cf5a3928726_1280.jpg",
		"age": 70
	},
	{
		"id": 2,
		"username": "Eliana925",
		"email": "jaxon746@sympatico.com",
		"password": "HvjnRXnzJblfLrr",
		"image": "https://images.pexels.com/photos/301320/pexels-photo-301320.jpeg",
		"age": 80
	},
	{
		"id": 3,
		"username": "Stella6749",
		"email": "hudson52@tiscali.com",
		"password": "zqBWwqFgtHbmpVM",
		"image": "https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg",
		"age": 51
	}
]
`

  return <Code title="user.json" code={code} language="json" />
}
