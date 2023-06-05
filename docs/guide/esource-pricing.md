---
title: Resource pricing
order: 2
toc: content
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
The following are the Credit pricing for different RPC methods based on their complexity.

| **API method**                          | **Credit consumption** |  **Supported chain**   |
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


## Plan specifications
### Existing plan
In this release, we provide a free public preview edition. Developers can log in to the ZAN console to participate in the public preview edition. The specific details of the plan are as follows. 

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
- **Free**
- **Growth**
- **Pro**
- **Enterprise**

In this release, we offer the upcoming Growth plan as a free beta plan to provide Web3 developers with a better experience. In the future, we will introduce more subscription plans for developers to choose from, including a Free plan for Web3 beginners, a Growth plan for individual developers, and a Pro plan for professional teams with better performance, more API Key creation capabilities, and higher credit consumption per second than the Growth plan.
Moreover, we will also launch an Enterprise plan subscription plan suitable for developing large-scale enterprise applications and support customization of all specifications in the subscription plan.
Stay tuned for more updates and announcements about these exciting features!

