# Nested Schema

You can define fields that are information objects by defining nested schemas with the `schema` method.

```js
const userSchema = chaca.schema({
   userInf: chaca.schema({
      firstName: schemas.person.firstName(),
      favoriteCats: {
         type: schemas.animal.cat(),
         isArray: { min: 1, max: 10 },
      },
      description: schemas.lorem.text(),
   }),
   // rest fields,
})
```
