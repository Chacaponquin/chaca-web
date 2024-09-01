# Address

## `zipCode`

```js
modules.address.zipCode().getValue() // '62581'
modules.address.zipCode().getValue({ format: "###" }) // '453'
```

| Argument | Description                            |
| :------: | :------------------------------------- |
|  format  | Format of the zip code. Example: '###' |

## `timeZone`

```js
modules.address.timeZone() // Schema
modules.address.timeZone().getValue() // "Asia/Magadan"
```

## `cardinalDirection`

```js
modules.address.cardinalDirection().getValue() // 'North'
```

## `country`

```js
modules.address.country().getValue() // 'Spain'
modules.address.country().getValue({ continent: "Asia" }) // 'China'
```

| Argument  | Description                                                                                                                       |
| :-------: | :-------------------------------------------------------------------------------------------------------------------------------- |
| continent | Continent of the country that you want. **('Asia', 'Africa', 'Oseania', 'Europe', 'South America', 'Noth America', 'Antartica')** |

## `countryCode`

```js
modules.address.countryCode().getValue() // 'CU'
```
