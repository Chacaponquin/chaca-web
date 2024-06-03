export class DatasetFunctions {
  static custom() {
    return `function getValue(props){
    // logic
  }`
  }

  static where() {
    return `function getValue(currentFields, refFields, store, schemas){
        // logic
    }`
  }

  static chance() {
    return `function getValue(currentFields, store, schemas){
        // logic
    }`
  }
}
