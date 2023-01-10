import { SchemasResp, Schema } from '../interfaces/options.interface'
import { v4 as uuid } from 'uuid'

export const DataTransform = {
  initialFieldsTransform: (fields: SchemasResp[]): Schema[] => {
    let returnData = []

    returnData = fields.map((el, i) => {
      return {
        ...el,
        id: uuid(),
        options: el.options.map((s) => ({
          ...s,
          id: uuid(),
          route: `${process.env.REACT_APP_API_URL as string}${s.route}`,
        })),
      }
    })

    return returnData
  },

  descapitilizeArgument: (text: string): string => {
    let returnString = ''
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
    let returnString = ''

    let mayus = true

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && text[i] !== '_' && text[i] !== '-') {
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

  showDataTransform(value: any) {
    let returnString = ''

    if (typeof value === 'string' || typeof value === 'number') returnString = `${value}`
    else if (typeof value === 'boolean') {
      returnString = `${value === true ? 'true' : 'false'}`
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        returnString += `${this.getArrayString(value)}`
      }
    }

    return returnString
  },

  getSelectValues(array: any[]) {
    let returnArray = ''

    for (let i = 0; i < array.length; i++) {
      if (!(i === array.length - 1)) returnArray += `${array[i]} | `
      else returnArray += `${array[i]}`
    }

    return returnArray
  },

  getArrayString(array: any[]) {
    let returnArray = '['

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (!(i === array.length - 1)) returnArray += `${this.getArrayString(array[i])}, `
        else returnArray += `${this.getArrayString(array[i])}`
      } else {
        if (i === array.length - 1) returnArray += `${array[i]}`
        else returnArray += `${array[i]}, `
      }
    }

    returnArray += ']'

    return returnArray
  },
}
