import ApiRouteExample from "../ApiRouteExample/ApiRouteExample"

export default function PostSchemaArrayOne() {
  const data = [
    {
      id: "47ed011e-5064-4c76-9628-324ac357d397",
      username: "Hudson.",
      image:
        "https://pixabay.com/get/g130c835c05436fa3fd8f7e056584efc4570ca5dc0ad87f34b7c2bfe3a7a4f688d2691d23557d92a27559b08f5ab29898faa632ea559beb9994b0d5445fe35ba1_1280.png",
    },
    {
      id: "c208a301-3bd7-42c9-9297-2e7ee81d95c9",
      username: "Cooper107",
      image: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg",
    },
    {
      id: "43dec427-ed72-4ae4-ae94-de0c08b847be",
      username: "Zoe358",
      image: "https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg",
    },
    {
      id: "a3c3271c-5ca9-41a2-b807-cb8c84cc4263",
      username: "Isla_",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHw2fHxwZW9wbGV8ZW58MHx8fHwxNjY2OTcwODMw&ixlib=rb-4.0.3&q=80",
    },
    {
      id: "b0738489-1934-49e0-a8cc-b0ae12b5485c",
      username: "Kinsley_",
      image:
        "https://pixabay.com/get/g3e32efd25e56f28361ca5043af16175acef559cbb9e9ab08901b9fc8756b029066c9ce8c5334d4967be860afe53327c1b6b14cf56839a5a2c7bfeb5d810da965_1280.jpg",
    },
    {
      id: "154c189a-7135-4903-b244-edc92b3c270c",
      username: "Layla_",
      image:
        "https://pixabay.com/get/gcee20a35d86924e939d0fcfacc20f2fb210b44d40636e896e890d64756ab5d64a0e62032dc3491e219b5e8dd1a40ecdbca1bac7309e47207712d3dfd6a179109_1280.jpg",
    },
    {
      id: "dedc0eab-4e74-4414-b4ad-873d7ea3555c",
      username: "Jhon616",
      image:
        "https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHwyOHx8cGVvcGxlfGVufDB8fHx8MTY2Njk3MDgzMA&ixlib=rb-4.0.3&q=80",
    },
    {
      id: "60b7c767-6cd1-4c5d-89a2-ec5e4342b6d1",
      username: "Leilani000",
      image: "https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg",
    },
    {
      id: "5d873425-0e92-451a-a33d-5d69a60982b4",
      username: "Lillian726",
      image: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg",
    },
    {
      id: "cbdeb97a-0b2c-4456-9e74-660a80ad2c55",
      username: "Owen.",
      image:
        "https://pixabay.com/get/gd8a242dcbc1701c47c14b61a4fb6159f775a6dfca12c278ecf736755a34a4948c7b7915001a12a9fda7ab02a2ed40b092b6f0bcefab0769918619d4186bc2979_1280.jpg",
    },
    {
      id: "68da8268-55ec-4ca9-914b-d077a2051356",
      username: "David320",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHwyfHxwZW9wbGV8ZW58MHx8fHwxNjY2OTcwODMw&ixlib=rb-4.0.3&q=80",
    },
    {
      id: "8e707a62-aa43-4046-bcd0-de89b4c3385a",
      username: "Andrew249",
      image:
        "https://pixabay.com/get/gbc97a894f25446577f33b390c1ce8bc1288a955c8057776ac1b0e0def5b4cf11305f3f94b8b25467b160139a955ff534361e749aa1e6397825d7a927758a1434_1280.jpg",
    },
    {
      id: "d37bdbcb-4e25-435a-9971-deac71b68cea",
      username: "Victoria_",
      image: "https://images.pexels.com/photos/1251850/pexels-photo-1251850.jpeg",
    },
    {
      id: "ecbdee5b-49dd-43de-9836-3004abc43cac",
      username: "Nolan422",
      image: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
    },
    {
      id: "165dec85-8811-471a-b964-2287c2895dbe",
      username: "Christopher.",
      image:
        "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHw2OXx8cGVvcGxlfGVufDB8fHx8MTY2Njk3MDgzMw&ixlib=rb-4.0.3&q=80",
    },
    {
      id: "8e10bb59-b84c-4647-bece-2e12a80cca83",
      username: "Maya330",
      image:
        "https://pixabay.com/get/gf1e290143cf0f4959565a0008d6ad5b51fd8ebb47f2c3775a77cccfaaf31a5e3236b30bd7d6515bf6a57b4f8f93de75eff478ff7faec86ad29392b91a84555f3_1280.jpg",
    },
    {
      id: "d1ca224d-c041-4e1b-8819-b2be7390103c",
      username: "Lucy_",
      image:
        "https://images.unsplash.com/photo-1659535867362-f3ed3d7b5513?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MXwxfHNlYXJjaHw1M3x8cGVvcGxlfGVufDB8fHx8MTY2Njk3MDgzMw&ixlib=rb-4.0.3&q=80",
    },
    {
      id: "0d2e374a-2d90-41d8-9e4e-65e2598eaa7e",
      username: "Elijah.",
      image:
        "https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHw2NHx8cGVvcGxlfGVufDB8fHx8MTY2Njk3MDgzMw&ixlib=rb-4.0.3&q=80",
    },
    {
      id: "5db2c4a7-3665-40e2-81dd-6bc339782344",
      username: "Evelyn.",
      image:
        "https://pixabay.com/get/gc9b28f5086ce85e83882bf6dd1e8a7e1c43d11e614838f661d511dabfa05de0e76b3123b3edc386a3f2972b6b0065b28b36ad13e694270d23b24ac66b5a8f3d9_1280.jpg",
    },
    {
      id: "6738b595-0522-48e1-86a2-bbdc47990cc9",
      username: "Ezra695",
      image:
        "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTM2NjZ8MHwxfHNlYXJjaHw1N3x8cGVvcGxlfGVufDB8fHx8MTY2Njk3MDgzMw&ixlib=rb-4.0.3&q=80",
    },
  ]

  const body = {
    id: "id.uuid",
    username: "internet.username",
    image: "image.people",
  } as never

  return <ApiRouteExample code={data} method="POST" url="api/schema/array" body={body} />
}
