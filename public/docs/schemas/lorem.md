# Lorem

## `paragraphs`

```js
modules.lorem.paragraphs().getValue()
```

|    Argument     | Description                                |
| :-------------: | :----------------------------------------- |
| paragraphsCount | Number of paragraphs. Default `3`          |
|    separator    | Separator between paragraphs. Default `\n` |
|  maxSentences   | Maximun of sentences of each paragraphs    |
|  minSentences   | Min of sentences of each paragraphs        |

## `sentences`

```js
modules.lorem.sentences().getValue()
```

|    Argument    | Description                               |
| :------------: | :---------------------------------------- |
| sentencesCount | Number of sentences. Default in `3`       |
|   separator    | Separator between sentences. Default `\n` |
|    wordsMin    | Minimun of words in each sentence         |
|    wordsMax    | Maximun of words in each sentence         |

## `slug`

```js
modules.lorem.slug().getValue() // 'lorem-ipsum-ad'
```

| Argument  | Description                 |
| :-------: | :-------------------------- |
| wordCount | Number of words in the slug |

## `words`

```js
modules.lorem.words().getValue() // 'lorem ipsum in'
```

| Argument | Description                  |
| :------: | :--------------------------- |
|  count   | Number or words. Default `5` |

## `text`

```js
modules.lorem.text().getValue()
```

|   Argument    | Description                       |
| :-----------: | :-------------------------------- |
| character_min | Minimun of characters in the text |
| character_max | Maximun of characters in the text |
