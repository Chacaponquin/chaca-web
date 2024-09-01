# Finance

## `pin`

```js
modules.finance.pin().getValue() // '5067'
modules.finance.pin().getValue({ length: 6 }) // '213789'
```

| Argument | Description                                        |
| :------: | :------------------------------------------------- |
|  length  | The length of the PIN to generate. Defaults to `4` |

## `bitcoinAddress`

```js
modules.finance.bitcoinAddress().getValue() // '3ySdvCkTLVy7gKD4j6JfSaf5d'
```

## `creditCard`

```js
modules.finance.creditCard().getValue() // '6375-3265-4676-6646'
```

## `ethereumAddress`

```js
modules.finance.ethereumAddress() // '0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a'
```

## `accountType`

```js
modules.finance.accountType().getValue() // "Credit Card"
```

## `bic`

```js
modules.finance.bic().getValue() // 'WYAUPGX1'
```

## `routingNumber`

```js
modules.finance.routingNumber().getValue() // '522814402'
```

## `creditCardCVV`

```js
modules.finance.creditCardCVV().getValue() // '506'
```

## `moneySymbol`

```js
modules.finance.moneySymbol().getValue() // '$'
```

## `amount`

```js
modules.finance.amount().getValue() // '$6170.87'
modules.finance.amount().getValue({ min: 0, max: 1000 }) // '$5.53'
modules.finance.amount().getValue({ min: 0, max: 1000, symbol: "€", precision: 0 }) // '€5'
```

| Argument  | Description                                             |
| :-------: | :------------------------------------------------------ |
|    min    | The lower bound for the amount                          |
|    max    | The upper bound for the amount                          |
| precision | The number of decimal places for the amount             |
|  symbol   | The symbol used to prefix the amount. Defaults to `'$'` |

## `currencyMoneyName`

```js
modules.finance.currencyMoneyName().getValue() // 'Us Dollar'
```

## `moneyCode`

```js
modules.finance.moneyCode().getValue() // 'EUR'
```
