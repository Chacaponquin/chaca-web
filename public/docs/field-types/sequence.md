# Sequence Field

It will generate an integer number that will be incremented for each document that is generated.

```js
const mySchema = chaca.schema({
   id: chaca.sequence(),
   // rest fields
})

const data = mySchema.generate(5)

// data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
```

## Config

### `startWith`

The number to start with. **Default in 1**

```js
const mySchema = chaca.schema({
   id: chaca.sequence({ startWith: 2 }),
   // rest fields
})

const data = mySchema.generate(3)

// data = [{ id: 2 }, { id: 3 }, { id: 4 }];
```

### `step`

Step between values.**Default in 1**

```js
const mySchema = chaca.schema({
   id: chaca.sequence({ step: 5 }),
   // rest fields
})

const data = mySchema.generate(3)

// data = [{ id: 1 }, { id: 6 }, { id: 11 }];
```
