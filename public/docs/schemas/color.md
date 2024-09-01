# Color

## `cssSupportedFunction`

```js
modules.color.cssSupportedFunction().getValue() // 'rgb'
```

## `cssSupportedSpace`

```js
modules.color.cssSupportedSpace().getValue() // 'display-p3'
```

## `rgb`

```js
modules.color.rgb().getValue({ prefix: "#" }) // '#ffffFF'
modules.color.rgb().getValue({ casing: "upper" }) // '0xFFFFFF'
modules.color.rgb().getValue({ casing: "lower" }) // '0xffffff'
modules.color.rgb().getValue({ prefix: "#", casing: "lower" }) // '#ffffff'
modules.color.rgb().getValue({ format: "hex", casing: "lower" }) // '#ffffff'
modules.color.rgb().getValue({ format: "css" }) // 'rgb(255, 0, 0)'
modules.color.rgb().getValue({ format: "binary" }) // '10000000 00000000 11111111'
```

|   Argument   | Description                                                                                                  |
| :----------: | :----------------------------------------------------------------------------------------------------------- |
|    prefix    | Prefix of the generated hex color. Only applied when `'hex'` format is used. Defaults to `'0x'`              |
|    casing    | Letter type case of the generated hex color. Only applied when `'hex'` format is used. Defaults to `'mixed'` |
|    format    | Format of generated RGB color. Defaults to `'hex'`                                                           |
| includeAlpha | Adds an alpha value to the color (RGBA). Defaults to `false`                                                 |

## `cmyk`

```js
modules.color.cmyk().getValue() // cmyk(100%, 0%, 0%, 0%)
modules.color.cmyk().getValue({ format: "css" }) // cmyk(100%, 0%, 0%, 0%)
modules.color.cmyk().getValue({ format: "binary" }) // (8-32 bits) x 4
```

| Argument | Description                                           |
| :------: | :---------------------------------------------------- |
|  format  | Format of generated CMYK color. **('css', 'binary')** |

## `hsl`

```js
modules.color.hsl().getValue({ format: "css" }) // hsl(0deg, 100%, 80%)
modules.color.hsl().getValue({ format: "css", includeAlpha: true }) // hsl(0deg 100% 50% / 0.5)
modules.color.hsl().getValue({ format: "binary" }) // (8-32 bits) x 3
modules.color.hsl().getValue({ format: "binary", includeAlpha: true }) // (8-32 bits) x 4
```

|   Argument   | Description                                                  |
| :----------: | :----------------------------------------------------------- |
|    format    | Format of generated HSL color. **('css', 'binary')**         |
| includeAlpha | Adds an alpha value to the color (RGBA). Defaults to `false` |

## `hwb`

```js
modules.color.hwb().getValue({ format: "css" }) // hwb(194 0% 0%)
modules.color.hwb().getValue({ format: "binary" }) // (8-32 bits x 3)
```

| Argument | Description                                          |
| :------: | :--------------------------------------------------- |
|  format  | Format of generated HWB color. **('css', 'binary')** |

## `lch`

```js
modules.color.lch().getValue({ format: "css" }) // lch(52.2345% 72.2 56.2)
modules.color.lch().getValue({ format: "binary" }) // (8-32 bits x 3)
```

| Argument | Description                                          |
| :------: | :--------------------------------------------------- |
|  format  | Format of generated LCH color. **('css', 'binary')** |

## `colorByCSSColorSpace`

```js
modules.color.colorByCSSColorSpace().getValue({ format: "css", space: "display-p3" }) // color(display-p3 0.12 1 0.23)
modules.color.colorByCSSColorSpace().getValue({ format: "binary" }) // (8-32 bits x 3)
```

| Argument | Description                                                |
| :------: | :--------------------------------------------------------- |
|  format  | Format of generated color. **('css', 'binary')**           |
|  space   | Color space to generate the color for. Defaults to 'sRGB'. |
