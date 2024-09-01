# Nested Schema

You can define fields that are information objects by defining nested modules with the `schema` method.

```js
const userSchema = chaca.schema({
  userInf: chaca.schema({
    firstName: modules.person.firstName(),
    favoriteCats: {
      type: modules.animal.cat(),
      isArray: { min: 1, max: 10 },
    },
    description: modules.lorem.text(),
  }),
  // rest fields,
})
```
