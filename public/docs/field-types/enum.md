# Enum Field

Returns one of the values of a passed array

```js
const schema = chaca.schema({
   category: chaca.enum(['Horror', 'Comedy', 'Action', 'Sport']),
   // rest fields
})

const data = schema.generate(3)

// [{ category: "Horror" }, { category: "Sport" }, { category: "Action" }];
```

:::danger Not pass an empty array
If an empty array is passed, an exception will be thrown.

:::
