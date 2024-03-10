# Usage

## Create dataset schema

```js
import { chaca, schemas } from "chaca"

const userSchema = chaca.schema({
  id: chaca.sequence(),
  username: schemas.internet.userName(),
  password: schemas.internet.password(),
  image: schemas.image.person(),
  age: schemas.dataType.int({ min: 18, max: 90 }),
  isOlder: ({ currentFields: fields }) => {
    return fields.age >= 60
  },
})

// generate data
const users = userSchema.generate(50)
```

The code presented generates an array with 50 users that will have the following fields:

- `id` create a unique id for the user. **[Learn about custom fields](/field-types/sequence)**
- `username` create a username for thr person
- `password` create a not hashed password
- `image` provide a person image url for the user
- `age` creates an integer indicating the age of the user. Which in this case is between 18 and 90 years old
- `isOlder` a function that returns a boolean value where it will be `true` or `false` depending on the age of the user being created. **[Learn about custom fields](/field-types/custom)**

## Generate predefined schema function value

If you want to use any of the predefined functions individually, you can do it as follows

```js
import { schemas } from "chaca"

schemas.id.uuid().getValue() // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
```
