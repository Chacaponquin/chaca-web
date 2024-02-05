# Phone

## `number`

```js
schemas.phone.number().getValue({ format: '+53 #### ## ##' }) // '+53 5417 35 99'
```

| Argument | Description                                |
| :------: | :----------------------------------------- |
|  format  | Format of the phone number. Example: '###' |

## `prefix`

```js
schemas.phone.prefix().getValue() // '+53'
```

## `callDuration`

```js
schemas.phone.callDuration().getValue({ min: 10, max: 30 }) // '27:30'
schemas.phone.callDuration().getValue() // '20:52'
```

| Argument | Description                               |
| :------: | :---------------------------------------- |
|   min    | Minimun minutes of the call. Default `0`  |
|   max    | Maximun minutes of the call. Default `59` |
