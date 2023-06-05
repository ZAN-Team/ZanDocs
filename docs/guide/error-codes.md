---
title: Error codes
order: 5
group:
  title: API Reference
  order: 2
toc: content
---

# Error codes
This section presents JSON-RPC standard error codes and custom error codes that you will encounter when using ZAN node services.

## HTTP Status Codes
### Status Codes
In addition to the standard [Ethereum JSON-RPC error codes](https://eth.wiki/json-rpc/json-rpc-error-codes-improvement-proposal), ZAN will return the following status codes for HTTP requests:
| **code** | **Meaning**  | **Corresponding error code**                                        | **solution**  |
|-----------|-----------|-----------------------------------------------------------------------|---------------|
| 400       | Bad Request    | -32700<br>-32600<br>-32601<br>-32602       | Your request is invalid. Double-check your JSON-RPC body.   |
| 401       | Unauthorized      | -32000      | You must authenticate your request with an API key. If you do not have one，<br>see [Creating your API key on the ZAN platform](./getting-started#-creating-your-api-key-on-the-zan-platform) to create，or requiring a secret key for additional security. |
| 403       | Forbidden    | -32002<br>-32004<br>-32005<br>-32006<br>-32007 | You've hit your **capacity limit**, or your request was rejected by your app's **whitelist settings**.   |
| 429       | Too Many Requests    | -32003         | You've exceeded your concurrent request capacity or Credits per second capacity, see [Use limits of credits](./esource-pricing#use-limits-of-credits)。                        |
| 500       | Internal Server Error | -32603<br>-32008       | We're unable to process your request right now. Get in touch with us if you see this.  |

### Example Response
```javascript
// Example 401 Https Status Error
{
    "error": {
        "code": -32000,
        "message": "apikey check; apikey not exist"
    },
    "id": 1,
    "jsonrpc": "2.0"
}
```

## Standard JSON-RPC Errors
### Error Codes
| **Error Codes** | **Message**           | **Meaning**          |
|---------|------------------|------------------------------------|
| -32700  | Parse error      | Invalid JSON                       |
| -32600  | Invalid Request  | JSON is not a valid request object |
| -32601  | Method not found | Method does not exist              |
| -32602  | Invalid params   | Invalid method parameters          |
| -32603  | Internal error   | Internal JSON-RPC error            |

### Example Response
```json
{
    "error": {
        "code": -32602,
        "message": "too many arguments, want at most 0"
    },
    "id": 1,
    "jsonrpc": "2.0"
}
```

##  Custom JSON-RPC Errors
### Error Codes
| **Error Codes** | **Message**    | **Meaning**              |
|---------|--------------------|------------------------------|
| -32000  | Unauthorized       | Request unauthorized         |
| -32001  | Resource not found | Requested resource not found |
| -32002  | Whitelist limited  | Whitelist limited            |
| -32003  | Cu limited         | Cu limited per second        |
| -32004  | Rate limited       | Service rate limited         |
| -32005  | Limit exceeded     | Limit exceeded credit plan   |
| -32006  | Malicious request  | Too many malicious request   |
| -32007  | Method limited     | Method request limited       |
| -32008  | Invalid error      | Invalid error                |

### Example Response
```json
// Example 403 Https Status Error
{
    "error": {
        "code": -32005,
        "message": "user credit plan check; credit request service not available, msg:credit consumption has reached the maximum of the package"
    },
    "id": 1,
    "jsonrpc": "2.0"
}
```