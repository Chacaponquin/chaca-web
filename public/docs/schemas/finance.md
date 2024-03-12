# Finance

## `pin`

```js
schemas.finance.pin().getValue() // '5067'
schemas.finance.pin().getValue({ length: 6 }) // '213789'
```

| Argument | Description                                        |
| :------: | :------------------------------------------------- |
|  length  | The length of the PIN to generate. Defaults to `4` |

## `bitcoinAddress`

```js
schemas.finance.bitcoinAddress().getValue() // '3ySdvCkTLVy7gKD4j6JfSaf5d'
```

## `creditCard`

```js
schemas.finance.creditCard().getValue() // '6375-3265-4676-6646'
```

## `ethereumAddress`

```js
schemas.finance.ethereumAddress() // '0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a'
```

## `accountType`

```js
schemas.finance.accountType().getValue() // "Credit Card"
```

## `bic`

```js
schemas.finance.bic().getValue() // 'WYAUPGX1'
```

## `routingNumber`

```js
schemas.finance.routingNumber().getValue() // '522814402'
```

## `creditCardCVV`

```js
schemas.finance.creditCardCVV().getValue() // '506'
```

## `moneySymbol`

```js
schemas.finance.moneySymbol().getValue() // '$'
```

## `amount`

```js
schemas.finance.amount().getValue() // '$6170.87'
schemas.finance.amount().getValue({ min: 0, max: 1000 }) // '$5.53'
schemas.finance
   .amount()
   .getValue({ min: 0, max: 1000, symbol: '€', precision: 0 }) // '€5'
```

| Argument  | Description                                             |
| :-------: | :------------------------------------------------------ |
|    min    | The lower bound for the amount                          |
|    max    | The upper bound for the amount                          |
| precision | The number of decimal places for the amount             |
|  symbol   | The symbol used to prefix the amount. Defaults to `'$'` |

## `currencyMoneyName`

```js
schemas.finance.currencyMoneyName().getValue() // 'Us Dollar'
```

## `moneyCode`

```js
schemas.finance.moneyCode().getValue() // 'EUR'
```
