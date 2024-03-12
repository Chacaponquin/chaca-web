# Date

## `soon`

```js
schemas.date.soon().getValue() // '2022-02-05T09:55:39.216Z'
schemas.date.soon().getValue({ days: 10 }) // '2022-02-11T05:14:39.138Z'
```

| Argument | Description                                                                      |
| :------: | :------------------------------------------------------------------------------- |
|   days   | The range of days the date may be in the future.                                 |
| refDate  | The date to use as reference point for the newly generated date. Defaults to now |

## `past`

```js
schemas.date.past().getValue() // '2021-12-03T05:40:44.408Z'
schemas.date.past().getValue({ years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2017-08-18T02:59:12.350Z'
```

| Argument | Description                                                                      |
| :------: | :------------------------------------------------------------------------------- |
|  years   | The range of years the date may be in the past                                   |
| refDate  | The date to use as reference point for the newly generated date. Defaults to now |

## `future`

```js
schemas.date.future().getValue() // '2022-11-19T05:52:49.100Z'
schemas.date
   .future()
   .getValue({ years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2020-12-13T22:45:10.252Z'
```

| Argument | Description                                                                      |
| :------: | :------------------------------------------------------------------------------- |
|  years   | The range of years the date may be in the future.                                |
| refDate  | The date to use as reference point for the newly generated date. Defaults to now |

## `month`

```js
schemas.date.month().getValue() // 'February'
```

## `weekDay`

```js
schemas.date.weekDay().getValue() // 'Monday'
```

## `birthdate`

```js
schemas.date.birthdate().getValue() // 1977-07-10T01:37:30.719Z
schemas.date.birthdate().getValue({ min: 18, max: 65, mode: 'age' }) // 2003-11-02T20:03:20.116Z
schemas.date.birthdate().getValue({ min: 1900, max: 2000, mode: 'year' }) // 1940-08-20T08:53:07.538Z
```

| Argument | Description                                                                        |
| :------: | :--------------------------------------------------------------------------------- |
|   min    | The minimum age or year to generate a birthdate                                    |
|   max    | The maximum age or year to generate a birthdate                                    |
| refDate  | The date to use as reference point for the newly generated date. Defaults to `now` |
|   mode   | The mode to generate the birthdate. Supported modes are `'age'` and `'year'`       |

## `between`

```js
schemas.date.between().getValue({
   from: '2020-01-01T00:00:00.000Z',
   to: '2030-01-01T00:00:00.000Z',
}) // '2026-05-16T02:22:53.002Z'
```

| Argument | Description             |
| :------: | :---------------------- |
|   from   | The early date boundary |
|    to    | The late date boundary  |

## `timeAgo`

```js
schemas.date.timeAgo().getValue({ unit: 'days' }) // '20 days ago'
```

| Argument | Description                                                                                        |
| :------: | :------------------------------------------------------------------------------------------------- |
|   unit   | Date time unit. Can be (`"years"` , `"seconds"` , `"minutes"` , `"days"` , `"hours"` , `"months"`) |
