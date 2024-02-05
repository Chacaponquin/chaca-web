# Color

## `cssSupportedFunction`

```js
schemas.color.cssSupportedFunction().getValue() // 'rgb'
```

## `cssSupportedSpace`

```js
schemas.color.cssSupportedSpace().getValue() // 'display-p3'
```

## `rgb`

```js
schemas.color.rgb().getValue({ prefix: '#' }) // '#ffffFF'
schemas.color.rgb().getValue({ casing: 'upper' }) // '0xFFFFFF'
schemas.color.rgb().getValue({ casing: 'lower' }) // '0xffffff'
schemas.color.rgb().getValue({ prefix: '#', casing: 'lower' }) // '#ffffff'
schemas.color.rgb().getValue({ format: 'hex', casing: 'lower' }) // '#ffffff'
schemas.color.rgb().getValue({ format: 'css' }) // 'rgb(255, 0, 0)'
schemas.color.rgb().getValue({ format: 'binary' }) // '10000000 00000000 11111111'
```

|   Argument   | Description                                                                                                  |
| :----------: | :----------------------------------------------------------------------------------------------------------- |
|    prefix    | Prefix of the generated hex color. Only applied when `'hex'` format is used. Defaults to `'0x'`              |
|    casing    | Letter type case of the generated hex color. Only applied when `'hex'` format is used. Defaults to `'mixed'` |
|    format    | Format of generated RGB color. Defaults to `'hex'`                                                           |
| includeAlpha | Adds an alpha value to the color (RGBA). Defaults to `false`                                                 |

## `cmyk`

```js
schemas.color.cmyk().getValue() // cmyk(100%, 0%, 0%, 0%)
schemas.color.cmyk().getValue({ format: 'css' }) // cmyk(100%, 0%, 0%, 0%)
schemas.color.cmyk().getValue({ format: 'binary' }) // (8-32 bits) x 4
```

| Argument | Description                                           |
| :------: | :---------------------------------------------------- |
|  format  | Format of generated CMYK color. **('css', 'binary')** |

## `hsl`

```js
schemas.color.hsl().getValue({ format: 'css' }) // hsl(0deg, 100%, 80%)
schemas.color.hsl().getValue({ format: 'css', includeAlpha: true }) // hsl(0deg 100% 50% / 0.5)
schemas.color.hsl().getValue({ format: 'binary' }) // (8-32 bits) x 3
schemas.color.hsl().getValue({ format: 'binary', includeAlpha: true }) // (8-32 bits) x 4
```

|   Argument   | Description                                                  |
| :----------: | :----------------------------------------------------------- |
|    format    | Format of generated HSL color. **('css', 'binary')**         |
| includeAlpha | Adds an alpha value to the color (RGBA). Defaults to `false` |

## `hwb`

```js
schemas.color.hwb().getValue({ format: 'css' }) // hwb(194 0% 0%)
schemas.color.hwb().getValue({ format: 'binary' }) // (8-32 bits x 3)
```

| Argument | Description                                          |
| :------: | :--------------------------------------------------- |
|  format  | Format of generated HWB color. **('css', 'binary')** |

## `lch`

```js
schemas.color.lch().getValue({ format: 'css' }) // lch(52.2345% 72.2 56.2)
schemas.color.lch().getValue({ format: 'binary' }) // (8-32 bits x 3)
```

| Argument | Description                                          |
| :------: | :--------------------------------------------------- |
|  format  | Format of generated LCH color. **('css', 'binary')** |

## `colorByCSSColorSpace`

```js
schemas.color
   .colorByCSSColorSpace()
   .getValue({ format: 'css', space: 'display-p3' }) // color(display-p3 0.12 1 0.23)
schemas.color.colorByCSSColorSpace().getValue({ format: 'binary' }) // (8-32 bits x 3)
```

| Argument | Description                                                |
| :------: | :--------------------------------------------------------- |
|  format  | Format of generated color. **('css', 'binary')**           |
|  space   | Color space to generate the color for. Defaults to 'sRGB'. |
