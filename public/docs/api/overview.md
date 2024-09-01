# Overview

The Chaca API is organised around REST. Our API has predictable resource-oriented URLs and uses standard HTTP response codes, authentication, and verbs.

Our API returns JSON responses, dependent upon on the request header specified.

The Chaca Web API provides a wide range of functionality for developers, including:

- Create data through defined modules by passing it through HTTP requests. [See examples](./schema)
- Obtain data generated through defined functions of Chaca. [See examples](./schema-option)

## Request format

**All requests must have the `/api` route after the server url in order to access the endpoints**. A typical API request will look as follows:

<ApiRoute method="GET" url="api/id/uuid" />

The supported HTTP methods are displayed for each API method in our documentation, e.g. GET or POST.

HTTP POST requests to the Chaca API may require some or all parameters to be supplied within the POST body. The Content-Type format should be set to application/json by default; exceptions to this will be referenced against any endpoint that deviates from this standard.

## Error Handling

If an error occurs, a response with propper HTTP error status code is returned. The body of this response contains a description of the issue in plain text. For example, once you go over the rate limit you will receive an HTTP error 429 ("Too Many Requests") with the message "API rate limit exceeded".

```json
{
  "time": "2023-08-15T17:02:10.618Z",
  "path": "/api/lorem/paragraphs",
  "error": "Too Many Requests",
  "status": 429
}
```

## Congratulations

Congratulations, you should now be able to create any complex object you desire with our REST API. Happy faking 🥳.
