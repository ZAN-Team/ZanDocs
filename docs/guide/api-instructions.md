---
title: Instructions
order: 1
group:
  title: API Reference
  order: 2
toc: content
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
| BSC Testnet | https://api.zan.top/node/v1/bsc/testnet/{apiKey} |

</br> 
<Alert type="info">
<ul>
<li>For stability considerations, only blocks from 28435579 to the latest (<code>[28435579, latest)</code>) are available for historical block queries on BSC Mainnet and only the latest 128 blocks are available for state queries. Only the latest 128 blocks are available for state queries on BSC Testnet.
</li>
</ul>
</Alert>
</br>

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

### web3.js (for JavaScript)

```javascript
var Web3 = require('web3');
var provider = 'https://api.zan.top/node/v1/eth/mainnet/{apiKey}';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log('getBlockNumber(): ', result);
});
```

For more information, see: [https://web3js.readthedocs.io](https://web3js.readthedocs.io).

### Ethers (for JavaScript)

```javascript
var ethers = require('ethers');
var url = 'https://api.zan.top/node/v1/eth/mainnet/{apiKey}';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
  console.log('getBlockNumber(): ' + result);
});
```

For more information, see: [https://docs.ethers.org](https://docs.ethers.org).

### web3.py (for Python)

```python
from web3 import Web3, HTTPProvider
connection = Web3(HTTPProvider('https://api.zan.top/node/v1/eth/mainnet/{apiKey}'))
print ("getBlockNumber():", connection.eth.blockNumber)
```

For more information, see: [https://web3py.readthedocs.io](https://web3py.readthedocs.io).

### web3j (for Java/Kotlin/Scala)

```java
Web3j client = Web3j.build(new HttpService("https://api.zan.top/node/v1/eth/mainnet/{apiKey}"));
EthBlockNumber ethBlockNumber = client.ethBlockNumber().sendAsync().get();
System.out.println("getBlockNumber(): "+ethBlockNumber.getBlockNumber());
```

For more information, see: [https://docs.web3j.io](https://docs.web3j.io).

## API key secret

Enforce additional security by requiring an API key secret for all requests, see [Configuring secret-based two-factor authentication](./configuring-security-settings-for-api-keys#configuring-secret-based-two-factor-authentication).
![security-config.png](./images/security-config.png)

- HTTPS

  ```
  curl --user :{secretKey} \
    https://api.zan.top/node/ws/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
  ```

- WebSocket
  ```
  wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey} --auth ":{secretKey}"
  > {"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}
  ```
