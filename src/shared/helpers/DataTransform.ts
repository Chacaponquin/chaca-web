export const DataTransform = {
  descapitilizeArgument: (text: string): string => {
    let returnString = ""
    let mayus = false

    for (let i = 0; i < text.length; i++) {
      if (i > 0 && i < text.length - 1) {
        if (text[i + 1].toUpperCase() === text[i + 1]) {
          returnString = returnString.concat(`${text[i]} `)
          mayus = true
        } else {
          returnString = returnString.concat(mayus ? text[i].toUpperCase() : text[i].toLowerCase())

          mayus = false
        }
      } else if (i === 0) {
        returnString = returnString.concat(text[i].toUpperCase())
      } else {
        returnString = returnString.concat(mayus ? text[i].toUpperCase() : text[i].toLowerCase())
        mayus = false
      }
    }

    return returnString
  },

  titlePipe: (text: string): string => {
    let returnString = ""

    let mayus = true

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && text[i] !== "_" && text[i] !== "-") {
        returnString = returnString.concat(mayus ? text[i].toUpperCase() : text[i].toLowerCase())
        mayus = false
      } else {
        mayus = true
        returnString = returnString.concat(` `)
        continue
      }
    }

    return returnString
  },

  getSelectValues(array: unknown[]) {
    let returnArray = ""

    for (let i = 0; i < array.length; i++) {
      if (!(i === array.length - 1)) returnArray += `${array[i]} | `
      else returnArray += `${array[i]}`
    }

    return returnArray
  },
}
