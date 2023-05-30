---
title: 节点服务
order: 16
---

# 节点服务

## 支持的生态

### 以太坊（Ethereum）

| 网络             | 端点                                             |
| ---------------- | ------------------------------------------------ |
| Ethereum Mainnet | https://api.zan.top/node/v1/eth/mainnet/{apiKey} |
| Ethereum Sepolia | https://api.zan.top/node/v1/eth/sepolia/{apiKey} |
| Ethereum Goerli  | https://api.zan.top/node/v1/eth/goerli/{apiKey}  |

### 币安智能链（Binance Smart Chain）

| 网络        | 端点                                             |
| ----------- | ------------------------------------------------ |
| BSC Mainnet | https://api.zan.top/node/v1/bsc/mainnet/{apiKey} |
| BSC Testnet | https://api.zan.top/node/v1/bsc/testnet/{apiKey} |

### Polygon

| 网络            | 端点                                                 |
| --------------- | ---------------------------------------------------- |
| Polygon Mainnet | https://api.zan.top/node/v1/polygon/mainnet/{apiKey} |
| Polygon Mumbai  | https://api.zan.top/node/v1/polygon/mumbai/{apiKey}  |

## 基本使用方法

在开始前，您需要先创建一个 API key。请参见 [从这里开始](/zh-CN/guide/getting-started) 创建 API key。

ZAN Node Service provides a set of JSON-RPC APIs for you to interact with the blockchain, which are similar to the JSON-RPC APIs provided by the native node client. The easiest way to use the APIs is directly sending an HTTP POST request with the API key in the URL. Here's an example to use `curl` to send an HTTP POST request to get the latest block number of Ethereum mainnet.

ZAN 节点服务提供了一组 JSON-RPC API 供您与区块链进行交互，这些 API 与原生节点客户端提供的 JSON-RPC API 类似。使用这些 API 最简单的方法是发送 HTTP POST 请求，并在 URL 中中带上 API key。以下是一个示例，其中使用 `curl` 来发送 HTTP POST 请求以获取以太坊主网最新区块编号。

```bash
## 基于 HTTPS POST 的 JSON-RPC
## 用 ZAN 仪表板中的 API Key 替换 {apiKey}
## 也可以用其他支持的网络替换 "eth" 和 "mainnet"
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

以下是一个示例，其中使用 `wscat` 来发送 WebSocket 请求以获取以太坊主网最新区块编号。

```bash
## 基于 WSS 的 JSON-RPC
## 用 ZAN 仪表板中的 API Key 替换 {apiKey}
## 也可以用其他支持的网络替换 "eth" 和 "mainnet"
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}
```

- 请参阅 [支持的生态](#支持的生态) 获取当前支持的生态的端点 URL。
- 请参阅生态各自的 API 参考文档以获取更多关于可用 API 的信息。

如果您计划在编程语言中使用这些 API，有很多库可供选择，包括：

- go-ethereum（用于 Golang）
- web3.js（用于 JavaScript）
- web3.py（用于 Python）
- web3j（用于 Java/Kotlin/Scala）
- Nethereum（用于 .NET）

如想了解更多信息，请参阅以太坊网站上的 [后端 API 库](https://ethereum.org/en/developers/docs/apis/backend/#available-libraries) 页面。
