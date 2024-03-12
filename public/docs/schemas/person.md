# Person

## `jobLevel`

```js
schemas.person.jobLevel().getValue() // 'Investor'
```

## `jobArea`

```js
schemas.person.jobLevel().getValue() // 'Supervisor'
```

## `gender`

```js
schemas.person.gender().getValue() // 'Bigender'
```

## `sex`

```js
schemas.person.sex().getValue() // 'Male'
```

## `firstName`

```js
schemas.person.firstName().getValue() // 'Juan'
schemas.person.firstName().getValue({ language: 'en' }) // 'Leslie'
```

| Argument | Description                            |
| :------: | :------------------------------------- |
| language | (`'en'`, `'es'`). Default `'en'`       |
|   sex    | Person name sex (`'male'`, `'female'`) |

## `lastName`

```js
schemas.person.lastName().getValue() // 'Scott'
```

| Argument | Description                      |
| :------: | :------------------------------- |
| language | (`'en'`, `'es'`). Default `'en'` |

## `fullName`

```js
schemas.person.fullName().getValue() // 'Juan Rodriguez Perez'
```

| Argument | Description                            |
| :------: | :------------------------------------- |
| language | (`'en'`, `'es'`). Default `'en'`       |
|   sex    | Person name sex (`'male'`, `'female'`) |

## `prefix`

```js
schemas.person.prefix().getValue() // 'Ms.'
```

| Argument | Description                           |
| :------: | :------------------------------------ |
|   sex    | Sex of the person. (`male`, `female`) |
