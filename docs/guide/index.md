---
nav:
  title: Guide
  order: 1
---

# Introduction to ZAN's node service
This topic describes the node service provided by the ZAN system. The node service provides end-to-end support for developers to develop Web3 applications on blockchains, from connections in the early stage, development and deployment in the middle stage, to monitoring, operations and maintenance (O&M), and data analysis in the last stage. This enables easy access to the world of Web3. 

## Challenges faced by Web3-Dapp builders
Currently, developers face the following challenges when they develop Web3 applications:
- **Time cost**
   Developers need to consume a large amount of energy, resources, and time to run public blockchain nodes. 

- **Low elasticity**
   Applications are difficult to extend. Each time an application is connected to a chain, the developer needs to repeatedly deploy the node environment.
   As the number of users increases, it is difficult to adapt to the higher requirements for operating resources. 

- **High O&M difficulty**
   Coordinating the O&M management of connections to multiple chains is cumbersome, resource planning is difficult, and troubleshooting is complicated.
   Mature monitoring tools are lacking. 

- **Complicated coordination**
   Because simultaneous processing of data, statuses, and access requests of multiple chains is involved, applications are complicated and unstable. 

- **Lack of tool support**
   For example, support of tools such as development kits, contract security verification tools, and contract templates is lacking. 

## Benefits
- **Abundant node capabilities**
   - Support for a wide range of public blockchain protocols
   - Core RPC
- **High availability**
   - Multiple nodes deployed in a primary-secondary architecture
   - Multi-zone deployment
   - Real-time monitoring of node health status for dynamic optimization
- **Low latency**
   - Dedicated network acceleration
   - Message multicasting
   - Intelligent routing
- **High cost-effectiveness**
   - Lower than market prices
   - Services with higher performance
   - Proper pricing and pay-as-you-go

## Architecture
The following figure shows the basic architecture of the node service provided by the ZAN system.
![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23077230/images/p672821.png?Expires=7258139349&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=YSQjcNoEL2d12m0C3u8k7vCTk5Q%3D)


## Features
### Quick start
- **Quick connection to the world of Web3**
   You can access all supported public blockchains by creating an API key, without additional configurations. 
- **Application isolation**
   You can create multiple API keys to isolate applications and secure production. 
- **Dual support for HTTPS and WSS**
   Connections can be established over HTTPS and WebSocket Secure (WSS). This can meet the different requirements of applications. 

### Priority: security protection
- **Secret-based two-factor authentication**
   You can enable secret-based two-factor authentication to ensure access security. 
- **Allowlist control**
   - Contract address allowlist: You can limit the accessible contract addresses to prevent abuse of API keys. 
   - Source allowlist: You can control the source IP addresses from which access requests can be initiated. 
- **Credit usage control**
   - You can implement fine-grained control over the methods that can be called by using an API key. 
   - You can set the upper limits of credit usage for API keys. 

### Real-time monitoring, all under your control
The node service allows you to comprehensively monitor API key status in real time. Specifically, the following modules can be monitored:
- **Credit usage fluctuation monitoring**
   Monitors the resource consumption of the current API key within the last 24 hours. 
- **Request distribution of top 5 API methods**
   Provides call information and proportion distribution of top 5 API methods that are ranked based on the number of requests within the last 15 minutes, 1 hour, 1 day, 7 days, and 30 days. 
- **Request error monitoring**
   Provides information about all call requests within the last 15 minutes, 1 hour, 1 day, 7 days, and 30 days, including the status codes to highlight the causes of request failures. 
- **Source monitoring**
   Provides information about the sources from which API method requests are made by using the API key within the last 15 minutes, 1 hour, 1 day, 7 days, and 30 days. 


### Fast collaboration for engineering efficiency improvement
- Member collaboration: Members can share existing API keys. 
- Custom permissions: Permissions can be configured and granted to each member separately. 

## Upcoming features

Regarding node capabilities, the following three features will be launched soon, so please stay tuned for these exciting feature updates and announcements. 
- Enhanced API support in vertical scenarios
- Toolchain for end-to-end application building
- Software-hardware integrated ZK-rollup solution

## Contact us

Visit the homepage of the ZAN official website at [https://zan.top/home](https://zan.top/home) to contact us. 
