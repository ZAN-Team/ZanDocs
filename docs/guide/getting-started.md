---
title: Geeting started
order: 3
---

# 🚀 Getting started
## Overview
For Web3 application developers, the cost of building nodes on public blockchains is relatively high, and the stability and security of the node running cannot be ensured. To allow developers to focus more on application development, a node service is available in public preview for free (valid for 30 days and allows you to create a maximum of ten API keys). To interact with blockchains through the API, developers only need to get the API key that is required to establish connections to RPC nodes.
Before you use the node service to connect to blockchains, sign up for an account on the ZAN platform. Then, you can use this account to log in to the ZAN console and create the API keys required for Web3 application development. 

## 🔏 Preparing a ZAN account

### If you have not signed up for a ZAN account
Click **Start for free** on the product introduction page. The following login page appears. Click **Sign up now**, and create your ZAN account to sign up.
![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p668152.png?Expires=7258150988&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=gGRjcZpPC%2BKwOjVwUASPMTgLpDg%3D)

### If you have already signed up and logged in
Click **Start for free** on the product introduction page to navigate to the product console, and create an API key required for connecting to the node service.
For more information, see the **Creating your API key on the ZAN platform** section. 

## 🔑 Creating your API key on the ZAN platform

Before you get an API key on the ZAN platform, [sign up for an account](#-preparing-a-zan-account) on the ZAN official website. Then, log in to the ZAN console and start creating your first API key. 

### Creating an API key

You can create multiple API keys on the ZAN platform to isolate applications and secure production. You can access all supported public blockchains through each API key that you create, without additional configurations. The procedure for creating an API key is as follows:

1. After you log in to the ZAN console, if you have not created an API key, the following message appears, guiding you to create your first API key.
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p668479.png?Expires=7258150989&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=umTSzuzMzI%2B2UP%2Bqd9gh0ZkDvyc%3D)

2. Click **Create Now**, and specify an API key name.
   Naming your API key can help you manage its application scenarios and purposes.
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p668466.png?Expires=7258150989&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=MiqECN43DzeCX5QzsWlqMDCSoFw%3D)

3. Click **Yes** to create the API key.
   Once the API key is created, you can view some basic information about the API key in the list, such as its name, creator, and creation time.
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p668562.png?Expires=7258150989&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=yXhIEtiztGmwgUr2K0PKb4CjEOo%3D)

   On the left side of the page, you can view the maximum credits allowed by the current plan and the current usage. On the right side of the page, you can view your current plan. In this release, only the information about the free public preview edition plan is provided.
   <Alert type="info">
   📘 <b>Note</b>: The free public preview edition provides a free quota of 4,000 million credits by default. The system calculates the number of consumed credits based on the consumption of each RPC node. The number of consumed credits also varies based on the API methods that are called. For more information, see <span><a href="/guide/esource-pricing#credit-pricing-details">Credit pricing details</a></span>. 	
   </Alert>

### Getting API key information
After an API key is created, you can view the API key and the network URLs for the blockchains supported by the platform. 

#### View path
Move the pointer over the target API key panel, and click **Action**. On the **Get Started** tab of the API key management page, you can view the API key and the network URLs for each blockchain. 

<Alert type="info">
📘 **Note**: You can click **Copy** to the right side of the API key or network URL to copy the content. 
</Alert>

#### Connectable blockchains
You can connect to blockchains that the platform currently supports by using the API key you get. The platform currently allows you to connect RPC nodes to the following three blockchains. The platform will support more EVM-compatible blockchains and other blockchains in the future. 
- Ethereum
- BNB Smart Chain
- Polygon PoS

To help you directly get the network URLs of different blockchains, the platform automatically generates URLs concatenated with the API key for you, and provides HTTPS and WSS connection methods. 
![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p668789.png?Expires=7258150989&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=rbShTaWyUaMddo87lzXmuIJF%2B0Q%3D)

Each blockchain supports multiple networks. To switch networks such as the testnet and mainnet, click the drop-down menu in the upper-right corner of the specific blockchain module. Different URLs are provided for different networks. You can click Copy to the right side of the URL to copy it. 

### 📚 What to do next
- Follow the steps described in the [Creating an API key](#creating-an-api-key) section to create more API keys.
   You can continue to create more API keys by clicking **Create New Key** on the page. The free public preview edition allows you to create a maximum of ten API keys. 
- Manage and configure the created API keys. 
   - [Configuring security settings for API keys](/guide/configuring-security-settings-for-api-keys)
   - [Monitoring API key status](/guide/monitoring-api-key-status)
   - [Configuring collaboration settings for API keys](/guide/configuring-collaboration-settings-for-api-keys)

