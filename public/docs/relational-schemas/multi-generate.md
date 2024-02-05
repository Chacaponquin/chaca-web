# Multi Generate

If you want to relate several schemas to make up a single dataset, you can do it in the following way

```js
import { chaca, schemas } from 'chaca'

// define user schema
const userSchema = chaca.schema({
   id: chaca.sequence(),
   username: schemas.internet.userName(),
   email: schemas.internet.email(),
   image: {
      type: schemas.image.people(),
      posibleNull: 40,
   },
   posts: {
      type: chaca.ref('Post.id'),
      isArray: { min: 0, max: 10 },
   },
})

// define post schema
const postSchema = chaca.schema({
   id: chaca.key(chaca.sequence()),
   title: schemas.lorem.words(),
   date: schemas.date.past(),
   category: chaca.ref('Category.id'),
})

// define category schema
const categorySchema = chaca.schema({
   id: chaca.key(chaca.sequence()),
   name: schemas.word.noun(),
})

// create dataset
const data = chaca.multiGenerate([
   { name: 'User', schema: userSchema, documents: 50 },
   { name: 'Post', schema: postSchema, documents: 1000 },
   { name: 'Category', schema: categorySchema, documents: 500 },
])

/*
{
  User: [...],
  Post: [...],
  Category: [...]
}
*/
```

## Dataset Config

To configure a dataset, an array must be passed with the configuration of each of the schemas that make it up.

```js
chaca.multiGenerate([
   { name: 'User', schema: userSchema, documents: 50 },
   { name: 'Post', schema: postSchema, documents: 1000 },
   { name: 'Category', schema: categorySchema, documents: 500 },
])
```

| Argument  | Description                                     |
| :-------: | :---------------------------------------------- |
|   name    | Schema name                                     |
|  schema   | Defined schema instance                         |
| documents | Number of documents to generate from the schema |
