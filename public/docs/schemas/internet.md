# Internet

## `email`

```js
modules.internet.email().getValue() // 'juan527120@gmail.com'
modules.internet.email.getValue({
  firstName: "pedro",
  lastName: "Scott",
  provider: "yahoo.com",
}) // "pedro_scott@yahoo.com"
```

| Argument  | Description      |
| :-------: | :--------------- |
| firstName | Owner first name |
| lastName  | Owner last name  |
| provider  | Email provider   |

## `password`

```js
modules.internet.password().getValue() // '89G1wJuBLbGziIs'
modules.internet.password().getValue({ length: 20 }) // 'aF55c_8O9kZaPOrysFB_'
modules.internet.password().getValue({ length: 20, memorable: true }) // 'lawetimufozujosodedi'
modules.internet.password().getValue({ length: 20, memorable: true, pattern: /[A-Z]/ }) // 'HMAQDFFYLDDUTBKVNFVS'
modules.internet.password().getValue({
  length: 20,
  memorable: true,
  pattern: /[A-Z]/,
  prefix: "Hello ",
}) // 'Hello IREOXTDWPERQSB'
```

| Argument  | Description                                                                                                                      |
| :-------: | :------------------------------------------------------------------------------------------------------------------------------- |
|    len    | The length of the password to generate. Defaults to `15`                                                                         |
| memorable | Whether the generated password should be memorable. Defaults to `false`                                                          |
|  pattern  | The pattern that all chars should match should match. This option will be ignored, if `memorable` is `true`. Defaults to `/\w/`. |
|  prefix   | The prefix to use. Defaults to `''`                                                                                              |

## `url`

```js
modules.internet.url().getValue() // 'http://words.info.net'
```

| Argument | Description                                                    |
| :------: | :------------------------------------------------------------- |
|  secure  | Boolean that indicates if the url has a secure protocol or not |

## `username`

```js
modules.internet.username().getValue() // 'juan527134'
modules.internet.username().getValue({ firstName: "pedro", lastName: "Scott" }) // 'pedro_scott'
```

| Argument  | Description      |
| :-------: | :--------------- |
| firstName | Owner first name |
| lastName  | Owner last name  |

## `httpMethod`

```js
modules.internet.httpMethod().getValue() // 'GET'
```

## `ipv6`

```js
modules.internet.ipv6().getValue() // '269f:1230:73e3:318d:842b:daab:326d:897b'
```

## `ipv4`

```js
modules.internet.ipv4().getValue() // '245.108.222.0'
```

## `emoji`

```js
modules.internet.emoji().getValue() // '🔎'
```

| Argument | Description    |
| :------: | :------------- |
|  emoji   | Emoji category |

## `mac`

```js
modules.internet.mac().getValue() // '32:8e:2e:09:c6:05'
```

## `port`

```js
modules.internet.port().getValue() // 8001
```

## `userAgent`

```js
modules.internet.userAgent().getValue() // 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_8_8)  AppleWebKit/536.0.2 (KHTML, like Gecko) Chrome/27.0.849.0 Safari/536.0.2'
```

## `protocol`

```js
modules.internet.protocol().getValue() // 'https'
```

## `domainSuffix`

```js
modules.internet.domainSuffix().getValue() // '.com'
```

## `domainName`

```js
modules.internet.domainName().getValue() // 'words.info'
```

## `httpStatudCode`

```js
modules.internet.httpStatusCode().getValue // 201
```
