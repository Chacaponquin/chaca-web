# Multi Generate

If you want to relate several modules to make up a single dataset, you can do it in the following way

```js
import { chaca, modules } from "chaca"

// define user schema
const userSchema = chaca.schema({
  id: chaca.sequence(),
  username: modules.internet.username(),
  email: modules.internet.email(),
  image: {
    type: modules.image.people(),
    posibleNull: 40,
  },
  posts: {
    type: chaca.ref("Post.id"),
    isArray: { min: 0, max: 10 },
  },
})

// define post schema
const postSchema = chaca.schema({
  id: chaca.key(chaca.sequence()),
  title: modules.lorem.words(),
  date: modules.date.past(),
  category: chaca.ref("Category.id"),
})

// define category schema
const categorySchema = chaca.schema({
  id: chaca.key(chaca.sequence()),
  name: modules.word.noun(),
})

// create dataset
const data = chaca.multiGenerate([
  { name: "User", schema: userSchema, documents: 50 },
  { name: "Post", schema: postSchema, documents: 1000 },
  { name: "Category", schema: categorySchema, documents: 500 },
])

/*
{
  User: [...],
  Post: [...],
  Category: [...]
}
*/
```

## Schema Config

To configure a dataset, an array must be passed with the configuration of each of the modules that make it up.

```js
chaca.multiGenerate([
  { name: "User", schema: userSchema, documents: 50 },
  { name: "Post", schema: postSchema, documents: 1000 },
  { name: "Category", schema: categorySchema, documents: 500 },
])
```

| Argument  | Description                                     |
| :-------: | :---------------------------------------------- |
|   name    | Schema name                                     |
|  schema   | Defined schema instance                         |
| documents | Number of documents to generate from the schema |
