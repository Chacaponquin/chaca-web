# Address

## `zipCode`

```js
schemas.address.zipCode().getValue() // '62581'
schemas.address.zipCode().getValue({ format: '###' }) // '453'
```

| Argument | Description                            |
| :------: | :------------------------------------- |
|  format  | Format of the zip code. Example: '###' |

## `timeZone`

```js
schemas.address.timeZone() // Schema
schemas.address.timeZone().getValue() // "Asia/Magadan"
```

## `cardinalDirection`

```js
schemas.address.cardinalDirection().getValue() // 'North'
```

## `country`

```js
schemas.address.country().getValue() // 'Spain'
schemas.address.country().getValue({ continent: 'Asia' }) // 'China'
```

| Argument  | Description                                                                                                                       |
| :-------: | :-------------------------------------------------------------------------------------------------------------------------------- |
| continent | Continent of the country that you want. **('Asia', 'Africa', 'Oseania', 'Europe', 'South America', 'Noth America', 'Antartica')** |

## `countryCode`

```js
schemas.address.countryCode().getValue() // 'CU'
```
