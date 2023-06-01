---
  title: 资源定价
  order: 2
  toc: content
---
# 资源定价

## 什么是 Credit？
用于衡量用户对节点资源的消耗，根据不同的套餐，为用户提供对应的 Credit 月度使用上限。关于不同套餐的Credit月度使用上限的说明，请参见[套餐规格](#套餐规格)。

### Credit 特点
针对每个API被单次调用时所消耗的资源（计算资源、存储资源、API复杂度）不同，我们设定了不同的Credit消耗量。用以太坊举例，发送一个 eth_getBlockByHash  请求时，消耗 Credit 25个，但是发送一个 eth_sendRawTransaction 请求时，则会消耗 Credit 200个。
后续我们还会支持更多垂直场景和数据类的增值服务，不同服务对资源消耗上有不同的定价，我们会给出优于市场定价的合理价，提供按需付费的定价服务。

### Credit 使用限制
**Credit/s** 是对发出请求时每秒使用的 Credit 数量的度量。每个 RPC 方法的权重是不同的，它比在不同的用例中只计算每秒发送的请求数更有效率。
当前提供的免费公测版，对每秒消耗 Credit 的数量有最高限制，即每秒最多可消耗 700 Credit。

### Credit 获取方式
当前我们提供了一个免费的公测版，里面已包含了我们赠送的 500 Million  Credits/month，有效期30天，关于该套餐的详情信息请参见[套餐规格](#套餐规格)。

### Credit 定价明细
以下是不同公链按 API 复杂度给出的 Credit 定价明细。

| **接口名称**                             | **Credit 消耗量** |  **支持的链**   |
|-----------------------------------------|-------------------|----------------|
| eth_sendRawTransaction                  | 200        | Ethereum, BSC, Polygon|
| eth_blockNumber                         | 10         | Ethereum, BSC, Polygon|
| eth_accounts                            | 10         | Ethereum, BSC, Polygon|
| eth_chainId                             | 0          | Ethereum, BSC, Polygon|
| net_version                             | 0          | Ethereum, BSC, Polygon|
| eth_estimateGas                         | 100        | Ethereum, BSC, Polygon|
| eth_call                                | 40         | Ethereum, BSC, Polygon|
| eth_feeHistory                          | 10         | Ethereum, BSC, Polygon|
| eth_gasPrice                            | 10         | Ethereum, BSC, Polygon|
| eth_getBalance                          | 15         | Ethereum, BSC, Polygon|
| eth_getBlockByHash                      | 25         | Ethereum, BSC, Polygon|
| eth_getBlockByNumber                    | 25         | Ethereum, BSC, Polygon|
| eth_getBlockTransactionCountByHash      | 15         | Ethereum, BSC, Polygon|
| eth_getBlockTransactionCountByNumber    | 15         | Ethereum, BSC, Polygon|
| eth_getCode                             | 25         | Ethereum, BSC, Polygon|
| eth_getProof                            | 30         | Ethereum, BSC, Polygon|
| eth_getStorageAt                        | 20         | Ethereum, BSC, Polygon|
| eth_getTransactionByBlockHashAndIndex   | 20         | Ethereum, BSC, Polygon|
| eth_getTransactionByBlockNumberAndIndex | 20         | Ethereum, BSC, Polygon|
| eth_getTransactionByHash                | 15         | Ethereum, BSC, Polygon|
| eth_getTransactionCount                 | 25         | Ethereum, BSC, Polygon|
| eth_getTransactionReceipt               | 15         | Ethereum, BSC, Polygon|
| eth_getTransactionReceiptsByBlock       | 250        |                Polygon|
| eth_getUncleByBlockHashAndIndex         | 20         | Ethereum, BSC, Polygon|
| eth_getUncleByBlockNumberAndIndex       | 20         | Ethereum, BSC, Polygon|
| eth_getUncleCountByBlockHash            | 15         | Ethereum, BSC, Polygon|
| eth_getUncleCountByBlockNumber          | 15         | Ethereum, BSC, Polygon|
| eth_syncing                             | 0          | Ethereum, BSC         |
| net_listening                           | 0          | Ethereum, BSC, Polygon|
| web3_clientVersion                      | 10         | Ethereum, BSC, Polygon|
| eth_newBlockFilter                      | 20         | Ethereum, BSC, Polygon|
| eth_newPendingTransactionFilter         | 20         | Ethereum, BSC, Polygon|
| eth_getFilterChanges                    | 25         | Ethereum, BSC, Polygon|
| eth_newFilter                           | 20         | Ethereum, BSC, Polygon|
| eth_getFilterLogs                       | 75         | Ethereum, BSC, Polygon|
| eth_uninstallFilter                     | 10         | Ethereum, BSC, Polygon|
| eth_getLogs                             | 75         | Ethereum, BSC, Polygon|
| eth_subscribe                           | 20         | Ethereum, BSC, Polygon|
| eth_unsubscribe                         | 20         | Ethereum, BSC, Polygon|
| eth_subscribe_reload                    | 20         | Ethereum, BSC, Polygon|
| bor_getRootHash                         | 10         |                Polygon|
| bor_getCurrentValidators                | 10         |                Polygon|
| bor_getCurrentProposer                  | 10         |                Polygon|
| bor_getAuthor                           | 10         |                Polygon|


## 套餐规格
### 现有套餐
本期我们提供了一个免费的公测版，开发者登录 ZAN 控制台后，默认拥有30天有效期的免费的公测版进行体验，具体套餐详情如下。
|**套餐**|免费公测版|
|---|---|
|**定价**|$0/月|
|**Credit 月度使用上限**|500 Million  Credits Included|
|**每秒访问消耗 Credit 上限**|700 |
|**支持创建的 API Key 数量**|10 |
|**Archive data**|支持 |
|**售后支持（7\*24）** |24小时响应 |

### 即将推出
我们一直致力于扩展和增强我们的节点服务。以下是一些我们即将推出的套餐：
- **免费版**
- **增强版**
- **专业版**
- **企业版**

本期，我们以即将推出的增强版作为免费的公测版，让Web3开发者获得更好的体验。后续，我们还会推出更多的套餐供开发者选择，例如，针对Web3新手入门的免费版、针对个人开发者的增强版、以及适合专业团队使用的，比增强版性能更优、API Key可创建数更多、每秒消耗Credit更高的专业版。
当然，我们还将推出适合开发大型企业应用，并支持对套餐中所有规格进行定制的企业版套餐。
请继续关注有关这些令人兴奋的功能的更新和公告！
