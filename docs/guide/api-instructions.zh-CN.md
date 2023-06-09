---
title: 使用说明
order: 1
group:
  title: API 参考
  order: 2
toc: content
---

# API 使用说明

## 支持的生态

### 以太坊（Ethereum）

| 网络             | 端点                                             |
| ---------------- | ------------------------------------------------ |
| Ethereum Mainnet | https://api.zan.top/node/v1/eth/mainnet/{apiKey} |
| Ethereum Sepolia | https://api.zan.top/node/v1/eth/sepolia/{apiKey} |
| Ethereum Goerli  | https://api.zan.top/node/v1/eth/goerli/{apiKey}  |

### 币安智能链（BNB Smart Chain）

| 网络        | 端点                                             |
| ----------- | ------------------------------------------------ |
| BSC Mainnet | https://api.zan.top/node/v1/bsc/mainnet/{apiKey} |
| BSC Testnet | https://api.zan.top/node/v1/bsc/testnet/{apiKey} |

</br> 
<Alert type="info">
<ul>
<li>出于稳定性保障原因，BSC 主网历史区块查询暂时只支持 28435579 至最新区块（<code>[28435579, latest)</code>），状态数据查询暂时支持离最新区块的最近 128 个区块。BSC 测试网状态数据查询暂时支持离最新区块的最近 128 个区块。
</li>
</ul>
</Alert>
</br>

### Polygon

| 网络            | 端点                                                 |
| --------------- | ---------------------------------------------------- |
| Polygon Mainnet | https://api.zan.top/node/v1/polygon/mainnet/{apiKey} |
| Polygon Mumbai  | https://api.zan.top/node/v1/polygon/mumbai/{apiKey}  |

## 基本使用方法

在开始前，您需要先创建一个 API key。请参见 [从这里开始](/zh-CN/guide/getting-started) 创建 API key。

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

### web3.js（用于 JavaScript）

```javascript
var Web3 = require('web3');
var provider = 'https://api.zan.top/node/v1/eth/mainnet/{apiKey}';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log('getBlockNumber(): ', result);
});
```

如想了解更多信息，请参见[https://web3js.readthedocs.io](https://web3js.readthedocs.io)。

### Ethers (用于 JavaScript)

```javascript
var ethers = require('ethers');
var url = 'https://api.zan.top/node/v1/eth/mainnet/{apiKey}';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
  console.log('getBlockNumber(): ' + result);
});
```

如想了解更多信息，请参见[https://docs.ethers.org](https://docs.ethers.org)。

### web3.py（用于 Python）

```python
from web3 import Web3, HTTPProvider
connection = Web3(HTTPProvider('https://api.zan.top/node/v1/eth/mainnet/{apiKey}'))
print ("getBlockNumber():", connection.eth.blockNumber).
```

如想了解更多信息，请参见[https://web3py.readthedocs.io](https://web3py.readthedocs.io)。

### web3j（用于 Java/Kotlin/Scala）

```java
Web3j client = Web3j.build(new HttpService("https://api.zan.top/node/v1/eth/mainnet/{apiKey}"));
EthBlockNumber ethBlockNumber = client.ethBlockNumber().sendAsync().get();
System.out.println("getBlockNumber(): "+ethBlockNumber.getBlockNumber());
```

如想了解更多信息，请参见[https://docs.web3j.io](https://docs.web3j.io)。

## 安全使用

您可以通过对所有请求加一个 API 密钥来加强额外的安全性，具体参见[密钥双重校验](./zh-CN/guide/configuring-security-settings-for-api-keys#密钥双重校验)。
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
