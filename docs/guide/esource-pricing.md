---
title: Resource pricing
order: 2
---

# Resource pricing

## What are credits? 
Credits are used to measure a user's consumption of node resources. We provide users with the corresponding monthly credit usage limit according to different plans. For more information about the monthly credit usage limits for different plans, see [Plan specifications](#plan-specifications). 

### Characteristics of credits
We set different credit consumption levels for resources consumed when a single call is made to each API method based on the resource type (computing resource and storage resource) and API complexity. Take Ethereum as an example, sending an eth_getBlockByHash request consumes 25 credits, and sending an eth_sendRawTransaction request consumes 200 credits.
In the future, we will support more vertical scenarios and data-based value-added services. Different services have different pricing for resource consumption. We will offer a reasonable price lower than the market price and provide pay-as-you-go pricing services. 

### Use limits of credits
**Credit/s** measures the number of credits used per second for making requests. Each RPC method is weighted differently. Credit/s is more efficient than counting only the number of requests sent per second in different use cases.
The current free public preview edition imposes a limit on the maximum number of credits consumed per second, which is 700 credits per second. 

### How to get credits
Currently, we provide a free public preview edition. This edition provides a free quota of 500 million credits per month, which is valid for 30 days. For more information about this plan, see [Plan specifications](#plan-specifications). 

### Credit pricing details
#### Ethereum
The following table describes the credit pricing details based on the Ethereum API complexity. 

| **API method** | **Credit consumption** |
|---------------------------------------|----------------|
| eth_sendRawTransaction                  | 200        |
| eth_blockNumber                         | 10         |
| eth_accounts                            | 10         |
| eth_chainId                             | 0          |
| net_version                             | 0          |
| eth_estimateGas                         | 100        |
| eth_call                                | 40        |
| eth_feeHistory                          | 10         |
| eth_gasPrice                            | 10         |
| eth_getBalance                          | 15         |
| eth_getBlockByHash                      | 25         |
| eth_getBlockByNumber                    | 25         |
| eth_getBlockTransactionCountByHash      | 15        |
| eth_getBlockTransactionCountByNumber    | 15         |
| eth_getCode                             | 25         |
| eth_getProof                            | 30         |
| eth_getStorageAt                        | 20         |
| eth_getTransactionByBlockHashAndIndex   | 20         |
| eth_getTransactionByBlockNumberAndIndex | 20         |
| eth_getTransactionByHash                | 15         |
| eth_getTransactionCount                 | 25        |
| eth_getTransactionReceipt               | 15         |
| eth_getUncleByBlockHashAndIndex         | 20         |
| eth_getUncleByBlockNumberAndIndex       | 20         |
| eth_getUncleCountByBlockHash            | 15         |
| eth_getUncleCountByBlockNumber          | 15         |
| eth_syncing                             | 0          |
| net_listening                           | 0          |
| net_peerCount                           | 0          |
| web3_clientVersion                      | 10         |
| eth_newBlockFilter                      | 20         |
| eth_newPendingTransactionFilter         | 20         |
| eth_getFilterChanges                    | 25         |
| eth_newFilter                           | 20         |
| eth_getFilterLogs                       | 75       |
| eth_uninstallFilter                     | 10         |
| eth_getLogs                             | 75         |
| eth_subscribe                           | 20        |
| eth_unsubscribe                         | 20         |
| eth_subscribe_reload                    | 20         |

#### BNB Smart Chain
The following table describes the credit pricing details based on the BNB Smart Chain API complexity.
| **API method** | **Credit consumption** |
|---------------------------------------|----------------|
| eth_sendRawTransaction                  | 250        |
| eth_blockNumber                         | 10         |
| eth_accounts                            | 10         |
| eth_chainId                             | 0          |
| net_version                             | 0          |
| eth_estimateGas                         | 100        |
| eth_call                                | 100        |
| eth_feeHistory                          | 10         |
| eth_gasPrice                            | 20         |
| eth_getBalance                          | 20         |
| eth_getBlockByHash                      | 25         |
| eth_getBlockByNumber                    | 25         |
| eth_getBlockTransactionCountByHash      | 20         |
| eth_getBlockTransactionCountByNumber    | 20         |
| eth_getCode                             | 25         |
| eth_getProof                            | 25         |
| eth_getStorageAt                        | 10         |
| eth_getTransactionByBlockHashAndIndex   | 20         |
| eth_getTransactionByBlockNumberAndIndex | 20         |
| eth_getTransactionByHash                | 10         |
| eth_getTransactionCount                 | 20         |
| eth_getTransactionReceipt               | 15         |
| eth_getUncleByBlockHashAndIndex         | 15         |
| eth_getUncleByBlockNumberAndIndex       | 15         |
| eth_getUncleCountByBlockHash            | 15         |
| eth_getUncleCountByBlockNumber          | 15         |
| eth_syncing                             | 0          |
| net_listening                           | 0          |
| net_peerCount                           | 0          |
| web3_clientVersion                      | 15         |
| eth_newBlockFilter                      | 20         |
| eth_newPendingTransactionFilter         | 20         |
| eth_getFilterChanges                    | 25         |
| eth_newFilter                           | 20         |
| eth_getFilterLogs                       | 100        |
| eth_uninstallFilter                     | 10         |
| eth_getLogs                             | 80         |
| eth_subscribe                           | 10         |
| eth_unsubscribe                         | 10         |
| eth_subscribe_reload                    | 10         |


## Plan specifications
### Existing plan
In this release, we provide a free public preview edition. After logging in to the ZAN console, developers can use the free plan for 30 days by default. The specific details of the plan are as follows. 

|**Plan**|Free Bate Testing|
|-----|-----|
|**Pricing**|$0/month|
|**Monthly usage limit of credits**|500 million credits|
|**Upper limit of credits consumed per second**|700|
|**Maximum number of API keys allowed**|10|
|**Archive data**|Supported|
|**After-sales support (24/7)**|Available around the clock|


### Upcoming plans
We are committed to extending and enhancing our node service. The following are some exciting upcoming plans:
- **Free Edition**
- **Enhanced Edition**
- **Enterprise Edition**
- **Monthly Credit Quota Increase Plan**

In this issue, we use the upcoming growth version as a free public beta version, so that Web3 developers can get a better experience. We will roll out more plans for developers to choose, for example, a free plan for Web3 beginners, an Enhanced Edition plan for individual developers, and a Professional Edition that delivers better performance, allows more API keys, and supports a greater maximum number of credits consumed per second than a growth version for small and medium-sized enterprises to develop small and medium-sized applications.
Of course, we will also roll out an enterprise version plan in which all specifications can be customized.
Please stay tuned for these exciting feature updates and announcements.

