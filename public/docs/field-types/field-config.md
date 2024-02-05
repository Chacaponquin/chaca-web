# Field config

You can define the configuration of the schema fields in two ways:

```js
import { chaca, schemas } from 'chaca'

const mySchema = chaca.schema({
   id: schemas.id.uuid(),
})

// or

const mySchema = chaca.schema({
   users: {
      type: schemas.id.uuid(),
      isArray: { min: 1, max: 100 },
      possibleNull: 20,
   },
})
```

## Config

:::danger All field types cannot be configured
All field types can be configured except: **[key field](./key)**, **[sequence field](./sequence)** and **[sequential field](./sequential)**

:::

### `type`

Indicates the field type

```js
type: schemas.id.uuid()
type: chaca.ref('User.id')
type: chaca.enum([...values])
```

### `isArray`

Indicates if the field is an array of values of the the selected type

```js
isArray: true; // The field would be an array with length between 0 and 10
isArray: { min: 5, max: 10 } // the field would be an array with length between 5 and 10
isArray: 20 // The field would be an array with length 20
```

### `possibleNull`

Indicates the possibility that the field returns `null`

```js
possibleNull: true // the field has a 50% chance of being null

//The number indicates de chance porcent
possibleNull: 60 // the field has a 60% chance of being null
```
