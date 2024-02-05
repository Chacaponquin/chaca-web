# Key Field

Indicates that the field is the schema key

:::tip Key Tip
The key fields do not produce any modification during the creation of the data.<br/>
These are only useful to indicate the fields that can be referenced

:::

```js
const mySchema = chaca.schema({
   id: chaca.key(schemas.id.uuid()),
   // rest fields
})
```

In the previous code you can see that the schema will have the `id` field as primary key.

:::tip Key Tip
The fields indicated as key fields will be considered as `PRIMARY KEYS` in case of exporting the schema data in `postgresql`

:::

## Usage for ref fields

```js
const userSchema = chaca.schema({
  id: chaca.key(chaca.sequence()),
  posts: {
    type: chaca.ref("Post.id") // The field will be an array with values of the field 'id' from the schema 'Post',
    isArray: {
      min: 0,
      max: 20,
    },
  },
  // rest fields
});

const postSchema = chaca.schema({
  id: chaca.key(chaca.sequence()) // this field must be a key field because it will be referenced by another schema,
  // rest fields
});
```

In the above code two schemas are created: `User` and `Post`. The `User.posts` field will be an array with values of the `id` field from the `Post` schema
