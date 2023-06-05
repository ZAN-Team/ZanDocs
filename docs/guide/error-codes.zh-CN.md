---
title: 错误码
order: 5
group:
  title: API 参考
  order: 2
toc: content
---

# 错误码
本文给出了使用ZAN节点服务会遇到的 JSON-RPC 标准错误码和自定义错误码。

## HTTP 状态码
### 状态码
除了标准[以太坊 JSON-RPC 错误代码](https://eth.wiki/json-rpc/json-rpc-error-codes-improvement-proposal), ZAN 会为 HTTP 请求返回如下状态码：
| **状态码** | **说明**  | **对应错误码**                                                         | **处理措施**  |
|-----------|-----------|-----------------------------------------------------------------------|---------------|
| 400       | 错误请求    | -32700<br>-32600<br>-32601<br>-32602       | 您的请求无效，请仔细检查您的 JSON-RPC 正文。                                                             |
| 401       | 未授权      | -32000      | 您必须使用 API Key 验证您的请求，如果没有API Key，参见[在 ZAN 上创建您的 API Key](./zh-CN/guide/getting-started#-在zan上创建您的api-key)进行创建，或者携带密钥信息。 |
| 403       | 访问受限    | -32002<br>-32004<br>-32005<br>-32006<br>-32007 | 您已经达到 **容量限制** ，或者你的请求被应用程序的 **白名单设置拒绝了。**                               |
| 429       | 请求太多    | -32003         | 您已经超出并发请求限制 或 Credit/s的限制，具体请参见[Credit使用限制](./zh-CN/guide/esource-pricing#credit-使用限制)。                   |
| 500       | 内部服务器错误 | -32603<br>-32008       | 我们现在无法处理您的请求，如果您看到此信息，请与我们联系。                                                                   |

### 响应示例
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

## JSON-RPC 标准错误码
### 错误码
| **错误码** | **说明**           | **消息描述**                    |
|---------|------------------|------------------------------------|
| -32700  | Parse error      | Invalid JSON                       |
| -32600  | Invalid Request  | JSON is not a valid request object |
| -32601  | Method not found | Method does not exist              |
| -32602  | Invalid params   | Invalid method parameters          |
| -32603  | Internal error   | Internal JSON-RPC error            |

### 响应示例
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

## JSON-RPC 自定义错误码
### 错误码
| **错误码** | **说明**         | **消息描述**                  |
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

### 响应示例
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