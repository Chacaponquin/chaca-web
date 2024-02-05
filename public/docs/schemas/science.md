# Science

## `periodicTableElement`

```js
schemas.science.periodicTableElement().getValue() // 'Curium'
schemas.science.periodicTableElement().getValue({ type: 'symbol' }) // 'Zn'
```

| Argument | Description                                                      |
| :------: | :--------------------------------------------------------------- |
|   type   | Element format. Can be (`'name'`, `'symbol'`). Defaults `'name'` |

## `unit`

```js
schemas.science.unit() // 'hertz (Hz)'
schemas.science.unit({ type: 'symbol' }) // 'N'
```

| Argument | Description                                                      |
| :------: | :--------------------------------------------------------------- |
|   type   | Element format. Can be (`'name'`, `'symbol'`). Defaults `'name'` |
