import ApiRouteExample from "../ApiRouteExample/ApiRouteExample"

export default function PostSchemaExampleSecond() {
  const objectExample = {
    id: "a6aba12e-0779-48cb-a6dd-de2ecb0b16a1",
    age: 88,
    posts: [
      "0ab1b8e9-56ad-482a-ad3c-877d64c454ac",
      "c3133e27-34e2-4771-a083-4956a0c92db8",
      "c49208cb-1980-4a37-ae84-497b47bd9e35",
      "04de524a-dee0-400a-80b7-2c43c19c14b7",
      "ed2ddaec-836b-4b02-88ac-1c4c735d4178",
      "930ae978-0b80-45e3-8b69-ce6b7a472e02",
      "5aa37e69-460c-4a7e-8923-9597d883b51c",
    ],
    socialMedia: {
      facebook: "https://marshmallow-info.info",
      instagram: "http://ficlet.name",
    },
  }

  const body = {
    id: "id.uuid",
    age: "dataType.integer<min=18;max=90>",
    password: {
      fieldType: "internet.password",
      params: {
        len: 10,
      },
    },
    posts: {
      fieldType: "id.uuid",
      isArray: {
        min: 1,
        max: 10,
      },
    },
    socialMedia: {
      fieldType: "schema",
      params: {
        facebook: "internet.url",
        instagram: "internet.url",
      },
      posibleNull: 60,
    },
  } as never

  return <ApiRouteExample code={objectExample} method="POST" url="api/schema" body={body} />
}
