# Status Code
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## Successful Responses

### 200 OK
meaning 'success'
* GET
* HEAD
* PUT / POST
* TRACE

### 201 Created
request succeeded, and a new resource was created as a result. Typically the response sent after `POST` or `PUT` request

### 202 Accepted
The request has been received but not yet acted upon.`noncommittal` sisce there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.

### 203 Non-Authoritative information
the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. Mostly used for `mirrors` or `backups` of another resource.
* Except for that specific case, the `200 OK` response is preferred

### 204 No Content
No content to send for this request, but the headers may be useful. => The user agent may update its `cached headers` for this resource with the new ones.

```
  205 Reset Conent
  206 Partial Content
  207 Multi-Status
  208 Already Reported
  226 IM Used
```

## Redirection Messages
### 300 Multiple Choices
The request has many possible response. There is no standardized way of choosing one of the responses, but HTML links to the possilities are recommended so the user can pick

### 301 Moved permanently
The URL of the requested resource has been changed permanently. The new URL is given in the response

### 302 Found
This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the futhre. Therefore, the same URI should be used by the client in future requests
```
  303 See Other
  304 Not Modified
  305 Use Proxy
  306 unused : was used in a previous version of the HTTP/1.1
  307 Temporary Redirect
  308 Permanent Redirect
```

## Client error responses
### 404 Bad Request
Server cannot or will not process the request

### 401 Unauthorized
The client must authenticate itself to get the requested response

### Payment Required
For future use. The initial aim for creating this code was using it for digital payment systems. Is used very rarely and no standard convention exists

### 403 Forbidden
The client does not have access rights to the content. Server is refusing to give the requested resource. Client's identity is known to the server

### 404 Not Found
Server cannot find the requested resource. Use `403` to hide the existence of a resource from an unauthorized client.

### 405 Method Not Allowed
The request method is known by the server byt is not supported by the target resource.

```
  406 Not Acceptable
  407 Proxy Authentication Required
  408 Request Timeout
  409 Conflict
  410 Gone
  411 Length Required
  412 Precondition Failed
  413 Payload Too Large
  414 URI Too Long
  415 Unsupported Media Type
  416 Range Not Satisfiable
  417 Expectation Failed
  418 I'm a teapot
  421 Misdirected Request
  422 Unprocessable Entity
  423 Locked
  424 Failed Dependency
  425 Too Early
  426 Upgrade Required
  428 Precondition Required
  429 Too Many Request
  431 Request Header Fields Too Large
  451 Unavailable For Legal Reasons
```

## Server Error Responses
### 500 Internal Server Error
The server does not know how to handle

### 501 Not implemented
The request method is not supported by the server and cannot be handled

### 502 Bad Gateway
This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response

### 503 Service Unavailable
Server is not ready to handle the request

```
  504 Gateway Timeout
  505 HTTP Version Not Supported
  506 Variant Also Negotiates
  507 Insufficient Storage
  508 Loop Detected
  510 Not Extended
  511 Network Authentication Required
```