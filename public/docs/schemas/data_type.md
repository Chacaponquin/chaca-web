# Data Type

## `specialCharacter`

```js
modules.dataType.specialCharacter().getValue() // '_'
```

## `boolean`

```js
modules.dataType.boolean().getValue() // true
```

## `int`

```js
modules.dataType.int().getValue() // 462
modules.dataType.int().getValue({ min: 10, max: 30 }) // 28
```

| Argument | Description           |
| :------: | :-------------------- |
|   min    | Minimun posible value |
|   max    | Maximun posible value |

## `float`

```js
modules.dataType.float().getValue() // 462.12
modules.dataType.float().getValue({ min: 10, max: 30 }) // 10.23
modules.dataType.number().getValue({ precision: 4 }) // 90.5362
```

| Argument  | Description                                                               |
| :-------: | :------------------------------------------------------------------------ |
|    min    | Minimun posible value                                                     |
|    max    | Maximun posible value                                                     |
| precision | Precision of the float. Must be a value between `1` and `20`. Default `2` |

## `number`

```js
modules.dataType.number().getValue() // 301
modules.dataType.number().getValue({ min: 10, max: 30 }) // 10.2327
```

| Argument  | Description                                                  |
| :-------: | :----------------------------------------------------------- |
|    min    | Minimun posible value                                        |
|    max    | Maximun posible value                                        |
| precision | Precision of the float. Must be a value between `0` and `20` |

## `hexadecimal`

```js
modules.dataType.hexadecimal().getValue() // '009df'
modules.dataType.hexadecimal().getValue({ length: 3 }) // '01D'
modules.dataType.hexadecimal().getValue({ lenght: 3, case: "upper" }) // 'DE20'
```

| Argument | Description                                                                   |
| :------: | :---------------------------------------------------------------------------- |
|   case   | Case of the values inside de hexadecimal code **(`mixed`, `lower`, `upper`)** |
|  length  | Lenght of the hexadecimal code                                                |

## `matrix`

```js
modules.dataType.matrix().getValue() // [[1, 0, 5], [5, 10, 9]]
modules.dataType.matrix().getValue({ x_size: 4, y_size: 2 }) // [[1, 2], [0, 0], [1, 1], [4, 5]]
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
modules.dataType.characters().getValue() // 'v'
modules.dataType.characters().getValue({ length: 5 }) // 'bhtlw'
modules.dataType.characters().getValue({ length: 5, case: "upper" }) // 'HQRSD'
```

| Argument | Description                                     |
| :------: | :---------------------------------------------- |
|  length  | Length of characters                            |
|   case   | Case of the characters (`'lower'` or `'upper'`) |

## `binaryCode`

```js
modules.dataType.binaryCode().getValue() // '00101'
modules.dataType.binaryCode().getValue({ length: 6 }) // '010100'
```

| Argument | Description               |
| :------: | :------------------------ |
|  length  | Length of the binary code |

## `alphaNumeric`

```js
modules.dataType.alphaNumeric().getValue() // 'b29o'
modules.dataType.alphaNumeric().getValue({ length: 7 }) // 'HN5fR2w'
modules.dataType.alphaNumeric().getValue({ banned: "arf" }) // 'HN5vR2w'
modules.dataType.alphaNumeric().getValue({ banned: ["a", "r", "f"] }) // 'HN5vR2w'
modules.dataType.alphaNumeric().getValue({ banned: ["a", "r", "f"], case: "lower" }) // 'l09bct'
```

| Argument | Description                                                                                                       |
| :------: | :---------------------------------------------------------------------------------------------------------------- |
|  length  | Length of the string                                                                                              |
|   case   | Case of the string. (`lower`, `upper`, `mixed`)                                                                   |
|  banned  | Characters that cannot appear in the string. It can be an array of characters or a string with all the characters |
