---
title: API Instructions
order: 16
---

# API Instructions

## Supported Ecosystems

### Ethereum

| Network          | Endpoint                                         |
| ---------------- | ------------------------------------------------ |
| Ethereum Mainnet | https://api.zan.top/node/v1/eth/mainnet/{apiKey} |
| Ethereum Sepolia | https://api.zan.top/node/v1/eth/sepolia/{apiKey} |
| Ethereum Goerli  | https://api.zan.top/node/v1/eth/goerli/{apiKey}  |

### BNB Smart Chain

| Network     | Endpoint                                         |
| ----------- | ------------------------------------------------ |
| BSC Mainnet | https://api.zan.top/node/v1/bsc/mainnet/{apiKey} |

### Polygon

| Network         | Endpoint                                             |
| --------------- | ---------------------------------------------------- |
| Polygon Mainnet | https://api.zan.top/node/v1/polygon/mainnet/{apiKey} |
| Polygon Mumbai  | https://api.zan.top/node/v1/polygon/mumbai/{apiKey}  |

## Basic Usage Instructions

You'll need to have an API key before you start. Follow the instructions on [Getting Started](/guide/getting-started) to create an API key.

ZAN Node Service provides a set of JSON-RPC APIs for you to interact with the blockchain, which are similar to the JSON-RPC APIs provided by the native node client. The easiest way to use the APIs is directly sending an HTTP POST request with the API key in the URL. Here's an example to use `curl` to send an HTTP POST request to get the latest block number of Ethereum mainnet.

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the "eth" and "mainnet" with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

And here's an example to use `wscat` to send a WebSocket request for the same purpose.

```bash
## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the "eth" and "mainnet" with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}
```

- See [Supported Ecosystems](#supported-ecosystems) for the endpoint URLs of the currently supported ecosystems.
- See the API reference of each ecosystem for more information about the available APIs.

If you plan to use the APIs in a programming language, there are plenty of libraries to help with that, including:

- go-ethereum (for Golang)
- web3.js (for JavaScript)
- web3.py (for Python)
- web3j (for Java/Kotlin/Scala)
- Nethereum (for .NET)

See [Backend API Libraries](https://ethereum.org/en/developers/docs/apis/backend/#available-libraries) from the Ethereum website for more information.
