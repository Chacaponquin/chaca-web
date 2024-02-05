# Schema

## Get schema object

<ApiRoute method="POST" url="api/schema" />

### Body

The request body must contain the fields of the schema with their configurations, [Learn about schema field config](#schema-field-config).

### Example

<PostSchemaExampleOne />

<PostSchemaExampleSecond />

## Get schema array

<ApiRoute method="POST" url="api/schema/array" />

### Body

| Param  |                           Type                           | Required | Description                                                                            |
| :----: | :------------------------------------------------------: | :------: | :------------------------------------------------------------------------------------- |
| schema | Object with [schema fields config](#schema-field-config) |   yes    | Schema config                                                                          |
| count  |                          number                          |    no    | Number of documents to generate from the schema. Default a number between `1` and `50` |

### Example

<PostSchemaArrayOne />

## Schema field config

Within the configuration of a schema there are different ways to define the fields

```json
{
   // string field declaration
   "id": "id.uuid",

   // string field decalartion with arguments
   "age": "dataType.integer<min=18;max=90>",

   // field declaration with config object
   "password": {
      "fieldType": "internet.password",
      "params": {
         "len": 10
      }
   },

   // array field config
   "posts": {
      "fieldType": "id.uuid",
      "isArray": {
         "min": 1,
         "max": 10
      }
   },

   // nested schema field config
   "socialMedia": {
      "fieldType": "schema",
      "params": {
         "facebook": "internet.url",
         "instagram": "internet.url"
      },
      "possibleNull": 60
   }
}
```

### String declaration

If you want to use one of the predefined options, you must write a string with the pattern `schema.option`. [Learn about predefined schemas](../category/schemas)

```json
{
   "id": "id.uuid",
   "password": "internet.password",
   "image": "image.people"
}
```

### String declaration with arguments

To pass arguments to the option declared in the form of a string, the following rules must be followed:

-  Each of them must be passed with the pattern `key=value`
-  These arguments must be enclosed between `<>`
-  Between each argument declaration must appear a `;`

```json
{
   "age": "dataType.int<min=18;max=95>",
   "password": "internet.password<len=5>",
   "firstName": "person.firstName<language=es>"
}
```

### Object declaration

If you want to configure the return value of the schema field, you can pass an object with the next configurations

|    Param     |                                     Type                                     | Required | Description                                                               |
| :----------: | :--------------------------------------------------------------------------: | :------: | :------------------------------------------------------------------------ |
|  fieldType   |                                    string                                    |   yes    | Field type declaration                                                    |
|    params    |                                    object                                    |    no    | Field declaration config                                                  |
|   isArray    |       [Learn about array fields](../fields-type/field-config#isarray)        |    no    | Indicates if the field can be an array of values of the chosen data type. |
| possibleNull | [Learn about possible null fields](../fields-type/field-config#possiblenull) |    no    | Indicates the probabilities that the field has a `null` value             |

### Nested schema declaration

If you want to define a field as nested schema, you can declare it as follows

-  Set `fieldType` to `'schema'`
-  Configure `params` with the schema fields configuration

```json
{
   // rest fields,
   "user": {
      "fieldType": "schema",
      "params": {
         "id": "id.uuid",
         "username": "internet.userName",
         "password": "internet.password"
      }
   }
}
```
