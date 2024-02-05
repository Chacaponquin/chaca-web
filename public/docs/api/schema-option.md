# Schema Option

## Get schema option value

<ApiRoute method="GET" url="api/:schema/:option" />

### Url Params

| Param  |  Type  | Description                                                      |
| :----: | :----: | :--------------------------------------------------------------- |
| schema | string | Option parent schema. Example (`id`, `dataType`, `person`)       |
| option | string | Schema option to get value. Example (`uuid`, `int`, `firstName`) |

### Query Params

|    Param    |      Type       | Required | Description                                                                                                                                                                                                                      |
| :---------: | :-------------: | :------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ...args   |       any       | no       | Parameters of the chosen option. [Learn about predefined schemas](../category/schemas)                                                                                                                                           |
|   isArray   | boolean, number | no       | Indicates whether the return value can be an array of values. In case of being a `boolean` it will be an array of size between 0 and 10, in case of being a `number` greater than 0 the return will be an array with that length |
| possibleNull |     number      | no       | Indicates the probability that the return value is `null`                                                                                                                                                                        |

### Example

<ApiRouteExample
url="api/id/uuid"
method="GET"
code="'b2ab3884-366c-4d6e-81f2-8ba35ff38e00'"
/>

<ApiRouteExample url="api/dataType/int?min=5&max=10" method="GET" code={5} />
