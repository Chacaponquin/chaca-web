export const MOVIE_SCHEMA_BODY = `{
    "id": {
        "type": "module",
        "module": "id.uuid"
    },
    "authors": {
        "type": "module",
        "module": "person.full_name",
        "isArray": {
            "min": 1,
            "max": 2
        }
    },
    "image": {
        "type": "module",
        "module": "image.film"
    },
    "likes": {
        "type": "module",
        "module": "datatype.int",
        "params": {
            "min": 0,
            "max": 50000
        }
    },
    "category": {
        "type": "enum",
        "values": ["Horror", "War", "History", "Comedy"]
    }
}`
