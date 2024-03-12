# Data Type

## `specialCharacter`

```js
schemas.dataType.specialCharacter().getValue() // '_'
```

## `boolean`

```js
schemas.dataType.boolean().getValue() // true
```

## `int`

```js
schemas.dataType.int().getValue() // 462
schemas.dataType.int().getValue({ min: 10, max: 30 }) // 28
```

| Argument | Description           |
| :------: | :-------------------- |
|   min    | Minimun posible value |
|   max    | Maximun posible value |

## `float`

```js
schemas.dataType.float().getValue() // 462.12
schemas.dataType.float().getValue({ min: 10, max: 30 }) // 10.23
schemas.dataType.number().getValue({ precision: 4 }) // 90.5362
```

| Argument  | Description                                                               |
| :-------: | :------------------------------------------------------------------------ |
|    min    | Minimun posible value                                                     |
|    max    | Maximun posible value                                                     |
| precision | Precision of the float. Must be a value between `1` and `20`. Default `2` |

## `number`

```js
schemas.dataType.number().getValue() // 301
schemas.dataType.number().getValue({ min: 10, max: 30 }) // 10.2327
```

| Argument  | Description                                                  |
| :-------: | :----------------------------------------------------------- |
|    min    | Minimun posible value                                        |
|    max    | Maximun posible value                                        |
| precision | Precision of the float. Must be a value between `0` and `20` |

## `hexadecimal`

```js
schemas.dataType.hexadecimal().getValue() // '009df'
schemas.dataType.hexadecimal().getValue({ length: 3 }) // '01D'
schemas.dataType.hexadecimal().getValue({ lenght: 3, case: 'upper' }) // 'DE20'
```

| Argument | Description                                                                   |
| :------: | :---------------------------------------------------------------------------- |
|   case   | Case of the values inside de hexadecimal code **(`mixed`, `lower`, `upper`)** |
|  length  | Lenght of the hexadecimal code                                                |

## `matrix`

```js
schemas.dataType.matrix().getValue() // [[1, 0, 5], [5, 10, 9]]
schemas.dataType.matrix().getValue({ x_size: 4, y_size: 2 }) // [[1, 2], [0, 0], [1, 1], [4, 5]]
```

| Argument  | Description                             |
| :-------: | :-------------------------------------- |
|  x_size   | Columns size                            |
|  y_size   | Row size                                |
|    min    | Min value for the numbers of the matrix |
|    max    | Max value for the numbers of the matrix |
| precision | Number precision of the matrix          |

## `characters`

```js
schemas.dataType.characters().getValue() // 'v'
schemas.dataType.characters().getValue({ length: 5 }) // 'bhtlw'
schemas.dataType.characters().getValue({ length: 5, case: 'upper' }) // 'HQRSD'
```

| Argument | Description                                     |
| :------: | :---------------------------------------------- |
|  length  | Length of characters                            |
|   case   | Case of the characters (`'lower'` or `'upper'`) |

## `binaryCode`

```js
schemas.dataType.binaryCode().getValue() // '00101'
schemas.dataType.binaryCode().getValue({ length: 6 }) // '010100'
```

| Argument | Description               |
| :------: | :------------------------ |
|  length  | Length of the binary code |

## `alphaNumeric`

```js
schemas.dataType.alphaNumeric().getValue() // 'b29o'
schemas.dataType.alphaNumeric().getValue({ length: 7 }) // 'HN5fR2w'
schemas.dataType.alphaNumeric().getValue({ banned: 'arf' }) // 'HN5vR2w'
schemas.dataType.alphaNumeric().getValue({ banned: ['a', 'r', 'f'] }) // 'HN5vR2w'
schemas.dataType
   .alphaNumeric()
   .getValue({ banned: ['a', 'r', 'f'], case: 'lower' }) // 'l09bct'
```

| Argument | Description                                                                                                       |
| :------: | :---------------------------------------------------------------------------------------------------------------- |
|  length  | Length of the string                                                                                              |
|   case   | Case of the string. (`lower`, `upper`, `mixed`)                                                                   |
|  banned  | Characters that cannot appear in the string. It can be an array of characters or a string with all the characters |
