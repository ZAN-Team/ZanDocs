---
title: Adding RPC nodes to MetaMask
order: 7
---

# Adding RPC nodes to MetaMask
The steps to add Ethereum, Polygon, and BSC RPC nodes to MetaMask are the same. This tutorial uses Polygon as an example to guide you on how to add custom RPC node service networks of Polygon Mainnet and Mumbai Testnet to MetaMask. You can add Polygon to MetaMask in a few steps. 

## Procedure
1. [Create a ZAN account](#step-1-create-a-zan-account)
2. [Create the API key required for configuring the network on MetaMask](#step-2-create-the-api-key-required-for-configuring-the-network-on-metamask)
3. [Copy your network URL](#step-3-copy-your-network-url)
4. [Add the network](#step-4-add-the-network)

## Step 1: Create a ZAN account
A ZAN account is required if you want to create an API key on the ZAN platform for configuring an RPC node service network on MetaMask. For more information, see [Preparing a ZAN account](/guide/getting-started#-preparing-a-zan-account).

## Step 2: Create the API key required for configuring the network on MetaMask
If you want to configure the RPC node service network we provide for you on MetaMask, you need to create an API key on the ZAN platform. This key is used for verification during node connection.
You can [create the API key on the ZAN platform](/guide/getting-started#creating-an-api-key). After the API key is created, you can get the URLs of all blockchain mainnets and testnets currently supported by the platform. 

## Step 3: Copy your network URL
After the API key is created, you can get the URLs that can be used for the RPC URL on MetaMask. By clicking the drop-down menu in the upper-right corner of the specific blockchain module, you can switch networks, such as the testnet and mainnet. Different URLs are provided for different networks. Click **Copy** to the right of the HTTPS URL to quickly copy the URL. For more information, see [Getting API key information](/guide/getting-started#getting-api-key-information). 

![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23053700/images/p671956.png?Expires=7258155120&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=lViJEhbsPOggBVop4f%2B3D8X45n4%3D)

The following table lists the network URLs of the blockchains currently supported by the ZAN platform.

| **Network** | **HTTPS URL** | **WSS URL** | **Chain ID** | **Symbol** |
|--------------------------|------------------------------------------------------|---------------------------------------------------------|--------------|------------|
| Ethereum Mainnet | https://api.zan.top/node/v1/eth/mainnet/{apikey} | wss://api.zan.top/node/ws/v1/eth/mainnet/{apikey} | 1 | ETH |
| Ethereum Testnet Goerli | https://api.zan.top/node/v1/eth/goerli/{apikey} | https://api.zan.top/node/ws/v1/eth/goerli/{apikey} | 5 | ETH |
| Ethereum Testnet Sepolia | https://api.zan.top/node/v1/eth/sepolia/{apikey} | https://api.zan.top/node/ws/v1/eth/sepolia/{apikey} | 11155111 | ETH |
| Polygon Mainnet | https://api.zan.top/node/v1/polygon/mainnet/{apikey} | https://api.zan.top/node/ws/v1/polygon/mainnet/{apikey} | 137 | MATIC |
| Polygon Mumbai | https://api.zan.top/node/v1/polygon/mumbai/{apikey} | https://api.zan.top/node/ws/v1/polygon/mumbai/{apikey} | 80001 | MATIC |
| BSC Mainnet | https://api.zan.top/node/v1/bsc/mainnet/{apikey} | https://api.zan.top/node/ws/v1/bsc/mainnet/{apikey} | 56 | BNB |
| BSC Testnet | https://api.zan.top/node/v1/bsc/testnet/{apikey} | https://api.zan.top/node/ws/v1/bsc/testnet/{apikey} | 97 | BNB |

## Step 4: Add the network
This section describes how to add Polygon Mainnet and Polygon's Mumbai Testnet to MetaMask. 

### Adding Polygon Mainnet
1. Open MetaMask and click the target network name in the upper-right corner of the window.
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23053700/images/p671974.png?Expires=7258155120&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=CiJktTtXomux6EOgQqxXyyLuzu4%3D)

2. Click **Add network** at the bottom of the pop-up window.
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23053700/images/p671977.png?Expires=7258155120&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=JtjtEiR4CdTr1k%2B7cJj61MJGPt8%3D)

3. Click Add a network manually at the lower-left part of the page to add the network. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23053700/images/p672004.png?Expires=7258155120&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=IdHwwugGvtJ8iIFe%2FKjMLsC1kIc%3D)
   <Alert type="info">
   **Note**: If the mainstream network you want to add is already in the list, such as **Polygon Mainnet**, you can also directly click **Add** to add the network.
   </Alert>

4. Enter the following network details and click Save. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23053700/images/p672195.png?Expires=7258155120&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=lOgmpKIn1kcjNYno5ursqtbiLvQ%3D)

   | Parameter | Description |
   |------------------------|------------------------------------------------------|
   | **Network Name** | The name of the network, which facilitates easy identification of different networks. If you are adding a custom network, we recommend that you use the network name, such as ETH Mainnet.  |
   | **New RPC URL** | The URL of the message server, which tells the MetaMask wallet where to send transaction requests. Different chains have different fixed servers. Enter the network URL that you obtained in the ZAN console. For more information, see [Step 3](#step-3-copy-your-network-url).  |
   | **Chain ID** | The chain ID, which is used to sign transactions. Different chains have different fixed IDs. The chain ID is required for obtaining network configuration. For example, Polygon's chain ID is 1.  |
   | **Currency Symbol** | The currency symbol that MetaMask uses for the network's native currency. For example, the currency symbol is ETH for Ethereum Mainnet, BNB for BSC networks, and MATIC for Polygon networks.  |
   | **Block Explorer URL** | The URL of the blockchain browser, which is used to check transaction details and other information. For example, the URL of the blockchain browser for Polygon is https://etherscan.io/.  |

After you click Save, you are switched to Polygon Mainnet in the network drop-down list. 

 You have successfully added Polygon Mainnet that can communicate with the ZAN platform to MetaMask. 

### Adding Polygon's Mumbai Testnet

Mumbai Testnet replicates the Polygon's mainnet that is used for testing purposes. The steps to add a testnet are basically the same as those for adding a mainnet. The only difference lies in that the RPC node service network is different. 

1. Make sure that you have turned on the **Show test networks** toggle. 
   After the toggle is turned on, all default test networks are displayed in the network list. Go to **Settings** > **Advanced**, and turn on **Show test networks**. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23053700/images/p672094.png?Expires=7258155120&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=AAcaFdlfklw1vKSE4OHNseaYLXA%3D)

2. Enter the following network details and click Save. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23053700/images/p672218.png?Expires=7258155120&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=UArGhnJoK1MAMtXAWIC34MBJWeM%3D)
   For information about how to configure the related parameters, see [Step 4](#adding-polygon-mainnet) in Updating Polygon Mainnet. 
