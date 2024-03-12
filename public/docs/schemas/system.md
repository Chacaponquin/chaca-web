# System

## `fileName`

```js
schemas.system.fileName().getValue() // 'academy.png'
schemas.system.fileName().getValue({ ext: 'gif' }) // 'academy_button_school.gif'
```

| Argument | Description           |
| :------: | :-------------------- |
|   ext    | Extension of the file |

## `mimeType`

```js
schemas.system.mimeType().getValue() // 'video/mpeg'
```

## `fileExt`

```js
schemas.system.fileExt().getValue() // 'mp4'
```

## `directoryPath`

```js
schemas.system.directoryPath().getValue() // 'user/files/videos'
```

## `filePath`

```js
schemas.system.filePath().getValue() // 'user/files/videos/academy.mp4'
```
