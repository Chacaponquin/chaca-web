import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

interface Props {
  alternative: boolean
}

export default function UserAndPostDefinition({ alternative }: Props) {
  const code = `
  import { chaca, modules } from 'chaca'

  const userSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    username: modules.internet.username(),
    image: modules.image.people(),
    email: modules.internet.email()
  })

  const postSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    title: modules.lorem.sentence(),
    content: modules.lorem.text(),
    user_id: chaca.ref('User.id')
  })

  const dataset = chaca.dataset([
    {
        name: 'User',
        schema: userSchema,
        documents: 5
    },
    {
        name: 'Post',
        schema: postSchema,
        documents: 30
    }
  ])
  `

  const alt = `
  import { chaca, modules } from 'chaca'

  const userSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    username: modules.internet.username(),
    image: modules.image.people(),
    email: modules.internet.email(),
    posts: {
      type: chaca.ref('Post.id', { unique: true }),
      isArray: {
        min: 0,
        max: 5
      }
    }
  })

  const postSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    title: modules.lorem.sentence(),
    content: modules.lorem.text(),
  })

  const dataset = chaca.dataset([
    {
        name: 'User',
        schema: userSchema,
        documents: 5
    },
    {
        name: 'Post',
        schema: postSchema,
        documents: 30
    }
  ])
  `

  return <Code title="Define blog dataset" code={alternative ? alt : code} language="javascript" />
}
