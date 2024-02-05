# Custom Field

Function that allows customizing a value based on the current state of the dataset and schema documents

```js
const userSchema = chaca.schema({
    id: chaca.sequence(),
    age: schemas.dataType.int({min: 15, max: 90})
    isOlder: ({currentFields}) => {
        return currentFields.age >= 60
    }
})

const data = userSchema.generate(3);

/*
[
    {id: 1, age: 87, isOlder: true},
    {id: 2, age: 20, isOlder: false},
    {id: 3, age: 32, isOlder: false}
]
*/
```

This function receives as a parameter an object with 2 properties:

-  `currentFields`
   An object with the fields already created up to that moment
-  `store`
   Dataset store to interact with all the data in the dataset. [Learn about Dataset Store](../relational-schemas/dataset-store)
