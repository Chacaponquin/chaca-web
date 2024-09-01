# System

## `fileName`

```js
modules.system.fileName().getValue() // 'academy.png'
modules.system.fileName().getValue({ ext: "gif" }) // 'academy_button_school.gif'
```

| Argument | Description           |
| :------: | :-------------------- |
|   ext    | Extension of the file |

## `mimeType`

```js
modules.system.mimeType().getValue() // 'video/mpeg'
```

## `fileExt`

```js
modules.system.fileExt().getValue() // 'mp4'
```

## `directoryPath`

```js
modules.system.directoryPath().getValue() // 'user/files/videos'
```

## `filePath`

```js
modules.system.filePath().getValue() // 'user/files/videos/academy.mp4'
```
