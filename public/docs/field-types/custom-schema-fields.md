# Custom schema fields

If none of the [defined options](/docs/category/schemas) are useful you can create your own schemas with the schemaField method.

```js
chaca.schemaField(fieldFunction)
```

## Params

|     Param     |   Type   | Description                                                                                          |
| :-----------: | :------: | :--------------------------------------------------------------------------------------------------- |
| fieldFunction | function | Function to be executed with the `getValue` method. Receives an object with configuration parameters |

## Example

For this example, we want to create a schema where the id will be a string that will have the letter T as the first character and the rest of the 6 characters will be integers.

With the predefined schemas in Chaca there is no way to achieve this result for this field, therefore you can create a function that returns values with this pattern.

### Declaration

```js
import { chaca } from 'chaca'

const customId = chaca.schemaField(() => {
   return chaca.utils.replaceSymbols('T######')
})

customId().getValue() // 'T498152'
```

In the above code, a schema field is created that uses the `replaceSymbols` util to generate a string that meets the pattern explained above.

### Usage in schema declaration

```js
import { chaca } from 'chaca'

const customId = chaca.schemaField(() => {
   return chaca.utils.replaceSymbols('T######')
})

const mySchema = chaca.schema({
   id: customId(),
   // rest fiedls
})
```

### Adding arguments

As explained before, the function receives an object with the arguments. For this case, a `firstLetter` parameter will be created that will indicate the letter with which the string will start.

```js
const customId = chaca.schemaField(({ firstLetter }) => {
   return chaca.utils.replaceSymbols(`${firstLetter}######`)
})

const mySchema = chaca.schema({
   id: customId({ firstLetter: 'F' }),
   // rest fiedls
})
```
