# Sequential Field

Array of values that will be assigned according to the index of the document being created.

```js
chaca.sequential(values, config)
```

## Example

```js
const postSchema = chaca.schema({
   category: chaca.sequential(['Horror', 'Action', 'Comedy', 'Sport']),
   // rest fields
})

const data = postSchema.generate(4)

/*
[
  { category: "Horror" },
  { category: "Action" },
  { category: "Comedy" },
  { category: "Sport" },
];
*/
```

:::danger Be careful
If you pass an array of values with a length less than the number of documents to generate, an exception will be thrown

```js
const postSchema = chaca.schema({
   category: chaca.sequential(['Horror', 'Action', 'Comedy', 'Sport']),
   // rest fields
})

// This will throw an exception because there are only 4 sequential values for 10 documents to generate.
const data = postSchema.generate(10)
```

:::

## Params

| Param  |           Type           | Description                                                 |
| :----: | :----------------------: | :---------------------------------------------------------- |
| values |          Array           | Array of values to be returned sequentially                 |
| config | [Config object](#config) | Object with the configurations of the sequential generation |

## Config

The parameters that can configure the generation are:

### `loop`

Boolean indicating whether the values should be generated cyclically. **Default `false`**

```js
// With loop = false
const schema = chaca.schema({
   favoriteNumber: chaca.sequential([1, 2, 3], { loop: false }),
})

schema.generate(5) // Throws an error because there are only 3 values for 5 documents to create

// With lopp = true
const schema = chaca.schema({
   favoriteNumbers: chaca.sequential([1, 2, 3], { loop: true }),
})

schema.generate(5)

/*
[
  { favoriteNumber: 1 },
  { favoriteNumber: 2 },
  { favoriteNumber: 3 },
  { favoriteNumber: 1 },
  { favoriteNumber: 2 },
];
*/
```
