# Person

## `jobLevel`

```js
modules.person.jobLevel().getValue() // 'Investor'
```

## `jobArea`

```js
modules.person.jobLevel().getValue() // 'Supervisor'
```

## `gender`

```js
modules.person.gender().getValue() // 'Bigender'
```

## `sex`

```js
modules.person.sex().getValue() // 'Male'
```

## `firstName`

```js
modules.person.firstName().getValue() // 'Juan'
modules.person.firstName().getValue({ language: "en" }) // 'Leslie'
```

| Argument | Description                            |
| :------: | :------------------------------------- |
| language | (`'en'`, `'es'`). Default `'en'`       |
|   sex    | Person name sex (`'male'`, `'female'`) |

## `lastName`

```js
modules.person.lastName().getValue() // 'Scott'
```

| Argument | Description                      |
| :------: | :------------------------------- |
| language | (`'en'`, `'es'`). Default `'en'` |

## `fullName`

```js
modules.person.fullName().getValue() // 'Juan Rodriguez Perez'
```

| Argument | Description                            |
| :------: | :------------------------------------- |
| language | (`'en'`, `'es'`). Default `'en'`       |
|   sex    | Person name sex (`'male'`, `'female'`) |

## `prefix`

```js
modules.person.prefix().getValue() // 'Ms.'
```

| Argument | Description                           |
| :------: | :------------------------------------ |
|   sex    | Sex of the person. (`male`, `female`) |
