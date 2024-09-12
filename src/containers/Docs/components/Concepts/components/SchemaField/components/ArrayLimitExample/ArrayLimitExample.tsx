import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function ArrayLimitExample() {
  const code = `
const schema = chaca.schema({
    numbers: {
        type: () => modules.datatype.int({ min: 0, max: 10 }),
        isArray: {
            min: 5 // el arreglo tendrá al menos 5 valores
        }
    }
})

const schema = chaca.schema({
    numbers: {
        type: () => modules.datatype.int({ min: 0, max: 10 }),
        isArray: {
            max: 5 // el arreglo tendrá entre 0 y 5 valores
        }
    }
})

const schema = chaca.schema({
    numbers: {
        type: () => modules.datatype.int({ min: 0, max: 10 }),
        isArray: {
            min: 5 
            max: 10 // el arreglo tendrá entre 5 y 10 valores
        }
    }
})
`

  return <Code code={code} language="typescript" title="Limitar la longitud del arreglo" />
}
