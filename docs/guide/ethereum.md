---
title: Ethereum
order: 1
group:
  title: API Reference
  order: 2
toc: content
---

# Ethereum

## Chain & Client Information

This section provides APIs that reflect the general information of the blockchain or the current status of the node client, such as the chain ID, the current gas price and the network status.

---

### eth_accounts

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns a list of addresses owned by client. While this JSON-RPC method is supported, it will always return an empty list. ZAN does not support "unlocking" accounts. Users should send already signed raw transactions using [eth_sendRawTransaction](#eth_sendrawtransaction).

#### Request Parameters

None

#### Response

Returns a list of addresses owned by client.

#### Result Fields

- ADDRESSES - an array containing hex codes as strings representing the addresses owned by the client.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": []
}
```

---

### eth_chainId

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the chain ID of the current network. Ethereum Mainnet has a chain ID of 1. The value is used in replay-protected transaction signing as introduced by EIP-155.

#### Request Parameters

None

#### Response

Returns the chain ID of the current network.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```

---

### eth_gasPrice

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the current price per gas in Wei.

#### Request Parameters

None

#### Response

Returns the current price per gas in Wei.

#### Result Fields

- GAS PRICE - a hex code of an integer representing the current gas price in Wei.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_gasPrice","params": [],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_gasPrice","params": [],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x12a05f200"
}
```

---

### net_listening

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns true if client is actively listening for network connections.

#### Request Parameters

None

#### Response

Returns true if client is actively listening for network connections.

#### Result Fields

- LISTENING FLAG - a boolean indicating whether the client is actively listening for network connections

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"net_listening","params": [],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"net_listening","params": [],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

---

### net_version

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the current network ID.

#### Request Parameters

None

#### Response

Returns the current network ID.

#### Result Fields

- NETWORK ID - a string representing the current network ID.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"net_version","params": [],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"net_version","params": [],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

---

### web3_clientVersion

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the current client version.

#### Request Parameters

None

#### Response

Returns the current client version.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Geth/v1.11.5-stable-a38f4108/linux-amd64/go1.20.2"
}
```

---

## EVM State

This section includes APIs for interacting with the Ethereum Virtual Machine (EVM) (retrieving or changing the EVM state), such as making calls to smart contracts, estimating gas, retrieving account balances and sending transactions.

---

### eth_call

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Executes a call to a read-only function of a smart contract immediately without creating a transaction on the blockchain.

##### Limits

> To prevent API abuse, the `gas` parameter in [eth_estimateGas](#eth_estimategas) and [eth_call](#eth_call) is capped at 10x (1000%) the current block gas limit. You can recreate this behavior in your local test environment (Ganache, Besu, Geth or other client) via the `rpc.gascap` command-line option.

#### Request Parameters

- TRANSACTION CALL OBJECT [required]
  - from: 20 Bytes - The address the transaction is sent from.
  - to: 20 Bytes - The address the transaction is directed to.
  - gas: [optional] hexadecimal value of the gas provided for the transaction execution. [eth_call](#eth_call) consumes zero gas, but this parameter may be needed by some executions.
  - gasPrice: [optional] hexadecimal value of the gasPrice used for each paid gas.
  - maxPriorityFeePerGas: [optional] Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - maxFeePerGas: [optional] Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - value: [optional] hexadecimal value of the value sent with this transaction.
  - data: [optional] Hash of the method signature and encoded parameters. See the [Ethereum contract ABI specification](https://docs.soliditylang.org/en/latest/abi-spec.html).
- BLOCK PARAMETER [required] - a hexadecimal block number, or the string "latest", "earliest" or "pending". See the [default block parameter](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block).

#### Response

The return value of the executed contract method.

#### Result Fields

- RETURN VALUE - the return value of the executed contract method.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_call","params":[{"to":"0x9788c4e93f9002a7ad8e72633b11e8d1ecd51f9b","data":"0xf0002ea90000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009b0a5becb3d9e069d424196e9b2c4114ac1d457f00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000"},"0x89a561"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_call","params": [{"to":"0x9788c4e93f9002a7ad8e72633b11e8d1ecd51f9b","data":"0xf0002ea90000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009b0a5becb3d9e069d424196e9b2c4114ac1d457f00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000"},"0x89a561"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000052663b0048aa576c0"
}
```

---

### eth_estimateGas

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.

##### Limits

> To prevent API abuse, the gas parameter in [eth_estimateGas](#eth_estimategas) and [eth_call](#eth_call) is capped at 10x (1000%) the current block gas limit. You can recreate this behavior in your local test environment (Ganache, Besu, Geth or other client) via the `rpc.gascap` command-line option.

#### Request Parameters

- TRANSACTION CALL OBJECT [required]
  - from: [optional] 20 Bytes - The address the transaction is sent from.
  - to: 20 Bytes - The address the transaction is directed to.
  - gas: [optional] hexadecimal value of the gas provided for the transaction execution. eth_estimateGas consumes zero gas, but this parameter may be needed by some executions.
  - gasPrice: [optional] hexadecimal value of the gasPrice used for each paid gas.
  - maxPriorityFeePerGas: [optional] Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - maxFeePerGas: [optional] Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - value: [optional] hexadecimal value of the value sent with this transaction.
  - data: [optional] Hash of the method signature and encoded parameters. See the [Ethereum contract ABI specification](https://docs.soliditylang.org/en/latest/abi-spec.html).

> If no gas limit is specified, geth uses the block gas limit from the pending block as an upper bound. As a result the returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending block gas limit.

#### Response

Returns the estimated amount of gas to complete the execution of a transaction.

#### Result Fields

- GAS USED - the estimated amount of gas used.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"from":"0x9b0a5becb3d9e069d424196e9b2c4114ac1d457f","data":"0x608060405234801561000f575f80fd5b506101438061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80632e64cec1146100385780636057361d14610056575b5f80fd5b610040610072565b60405161004d919061009b565b60405180910390f35b610070600480360381019061006b91906100e2565b61007a565b005b5f8054905090565b805f8190555050565b5f819050919050565b61009581610083565b82525050565b5f6020820190506100ae5f83018461008c565b92915050565b5f80fd5b6100c181610083565b81146100cb575f80fd5b50565b5f813590506100dc816100b8565b92915050565b5f602082840312156100f7576100f66100b4565b5b5f610104848285016100ce565b9150509291505056fea264697066735822122003f7c408c3ced127795bd75c931f5164abf7e5af84f56e9ab99ecb16bf2d396964736f6c63430008140033","value":"0x0"}],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_estimateGas","params": [{"from":"0x9b0a5becb3d9e069d424196e9b2c4114ac1d457f","data":"0x608060405234801561000f575f80fd5b506101438061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80632e64cec1146100385780636057361d14610056575b5f80fd5b610040610072565b60405161004d919061009b565b60405180910390f35b610070600480360381019061006b91906100e2565b61007a565b005b5f8054905090565b805f8190555050565b5f819050919050565b61009581610083565b82525050565b5f6020820190506100ae5f83018461008c565b92915050565b5f80fd5b6100c181610083565b81146100cb575f80fd5b50565b5f813590506100dc816100b8565b92915050565b5f602082840312156100f7576100f66100b4565b5b5f610104848285016100ce565b9150509291505056fea264697066735822122003f7c408c3ced127795bd75c931f5164abf7e5af84f56e9ab99ecb16bf2d396964736f6c63430008140033","value":"0x0"}],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1e081"
}
```

---

### eth_getBalance

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the balance of the account of given address.

#### Request Parameters

- ADDRESS [required] - a string representing the address (20 bytes) to check for balance
- BLOCK PARAMETER [required] - a hexadecimal block number, or the string "latest", "earliest" or "pending".

#### Response

Returns the balance of the account of given address.

##### Result Fields

- BALANCE - hexadecimal of the current balance in Wei.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x2366869b2b02b8"
}
```

---

### eth_getCode

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the compiled smart contract code, if any, at a given address.

#### Request Parameters

- ADDRESS [required] - a string representing the address (20 bytes) of the code
- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".

#### Response

Returns the compiled smart contract code at a given address.

#### Result Fields

- CODE - a hex of the code at the given address.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getCode","params":["0x2809f411492e2Dcd798A76FC265F99D540Eda0E5","latest"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getCode","params": ["0x2809f411492e2Dcd798A76FC265F99D540Eda0E5","latest"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100645780638da5cb5b1461006e575b600080fd5b61004e61008c565b60405161005b919061024a565b60405180910390f35b61006c610092565b005b61007661020b565b60405161008391906102a6565b60405180910390f35b60005481565b6000544210156100d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ce9061031e565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e9061038a565b60405180910390fd5b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9347426040516101989291906103aa565b60405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610208573d6000803e3d6000fd5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b61024481610231565b82525050565b600060208201905061025f600083018461023b565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061029082610265565b9050919050565b6102a081610285565b82525050565b60006020820190506102bb6000830184610297565b92915050565b600082825260208201905092915050565b7f596f752063616e27742077697468647261772079657400000000000000000000600082015250565b60006103086016836102c1565b9150610313826102d2565b602082019050919050565b60006020820190508181036000830152610337816102fb565b9050919050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b60006103746014836102c1565b915061037f8261033e565b602082019050919050565b600060208201905081810360008301526103a381610367565b9050919050565b60006040820190506103bf600083018561023b565b6103cc602083018461023b565b939250505056fea26469706673582212203f541b116d563492b6332765d9ed31a60ba76125cb4582ebbb59926f12ee68b964736f6c63430008120033"
}
```

---

### eth_getProof

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the account and storage values of the specified account including the Merkle-proof. This call can be used to verify that the data you are pulling from is not tampered with.

#### Request Parameters

- address - a string representing the address (20 bytes) to check for balance
- storageKeys - Array of 32-Byte storage keys that should be proofed and included. See [eth_getStorageAt](#eth_getstorageat).
- blockParameter - a hexadecimal block number, or the string "latest" or "earliest"

#### Response

Returns the account and storage values of the specified account including the Merkle-proof.

#### Result Fields

- balance: hexadecimal of the current balance in Wei.
- codeHash: 32-Byte hash of the code of the account.
- nonce: nonce of the account.
- storageHash: 32 Bytes - SHA3 of the StorageRoot. All storage will deliver a Merkle proof starting with this rootHash.
- accountProof: array of rlp-serialized MerkleTree-Nodes, starting with the stateRoot-Node, following the path of the SHA3 (address) as key.
- storageProof: array of storage-entries as requested. Each entry is an object with these properties:
  - key: the requested storage key.
  - value: the storage value.
  - proof: array of rlp-serialized MerkleTree-Nodes, starting with the storageHash-Node, following the path of the SHA3 (key) as path.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc": "2.0","method": "eth_getProof","id": 1,"params": ["0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842", ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"], "latest"]}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getProof","params": ["0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842", ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"], "latest"],"id":1}
```

##### Example Responses

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "accountProof": [
      "0xf90211a...0701bc80",
      "0xf90211a...0d832380",
      "0xf90211a...5fb20c80",
      "0xf90211a...0675b80",
      "0xf90151a0...ca08080"
    ],
    "balance": "0x0",
    "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "nonce": "0x0",
    "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "storageProof": [
      {
        "key": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "proof": ["0xf90211a...0701bc80", "0xf90211a...0d832380"],
        "value": "0x1"
      }
    ]
  }
}
```

---

### eth_getStorageAt

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the value from a storage position at a given address.

#### Request Parameters

- ADDRESS [required] - a string representing the address (20 bytes) of the storage
- STORAGE POSITION [required] - a hex code of the position in the storage
- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".

#### Response

Returns the value from a storage position at a given address.

#### Result Fields

- STORAGE VALUE - a hex code of the integer indicating the value of the storage position at the provided address.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getStorageAt","params":["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9", "0x65a8db"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getStorageAt","params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9", "0x65a8db"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```

---

### eth_getTransactionCount

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the number of transactions sent from an address.

#### Request Parameters

- ADDRESS [required] - a string representing the address (20 bytes) to check for transaction count for
- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".

#### Response

Returns the number of transactions sent from an address.

#### Result Fields

- TRANSACTION COUNT - a hex code of the integer representing the number of transactions sent from this address.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x7bb0699e75772d73c374347d790380a493dd3752","latest"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getTransactionCount","params": ["0x7bb0699e75772d73c374347d790380a493dd3752","latest"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1b"
}
```

### eth_sendRawTransaction

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Submits a pre-signed transaction for broadcast to the Ethereum network.

#### Request Parameters

- TRANSACTION DATA [required] - The signed transaction data.

#### Response

The transaction hash, or the zero hash if the transaction is not yet available.

#### Result Fields

- TRANSACTION HASH: 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params": ["0xf869018203e882520894f17f52151ebef6c7334fad080c5704d77216b732881bc16d674ec80000801ba02da1c48b670996dcb1f447ef9ef00b33033c48a4fe938f420bec3e56bfd24071a062e0aa78a81bf0290afbc3a9d8e9a068e6d74caa66c5e0fa8a46deaae96b0833"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],"id":1}
```

##### Example Responses

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

> NOTE: On Mainnet and Goerli, if this call causes the EVM to execute a REVERT operation, an error response of the following form is returned, with the revert reason pre-decoded as a string.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": 3,
    "message": "execution reverted: Dai/insufficient-balance",
    "data": "0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000"
  }
}
```

---

## Filters

This section contains APIs for creating and managing filters to monitor specific events on the blockchain, such as new blocks, pending transactions and logs.

---

### eth_newBlockFilter

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Creates a filter in a node to enable notifications for the arrival of new blocks.
You can use the [eth_getFilterChanges](#eth_getfilterchanges) method to check whether the state of the filter has changed.

##### Limits

> The filter expires if it remains inactive (no queries) for 5 minutes.

#### Request Parameters

None

#### Response

The unique ID of the filter.

#### Result Fields

- FILTER ID: a hexadecimal string, which indicates the ID of the newly created filter.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"id":1,"jsonrpc":"2.0","method":"eth_newBlockFilter"}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"id":1,"jsonrpc":"2.0","method":"eth_newBlockFilter"}
```

##### Example Responses

```json
{
  "result": "0x9298b6a4fdd9d422c008bec71e0c938e",
  "id": 1,
  "jsonrpc": "2.0"
}
```

---

### eth_newPendingTransactionFilter

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Creates a filter in a node to enable notifications for the arrival of new pending transactions.
You can use the [eth_getFilterChanges](#eth_getfilterchanges) method to check whether the state of the filter has changed.

##### Limits

> The filter expires if it remains inactive (no queries) for 5 minutes.

#### Request Parameters

None

#### Response

The unique ID of the filter.

#### Result Fields

- FILTER ID: a hexadecimal string, which indicates the ID of the newly created filter.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"id":1,"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter"}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
> {"id":1,"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter"}
```

##### Example Responses

```json
{
  "result": "0x54ad383863d890d0d265ea266f85fc36",
  "id": 1,
  "jsonrpc": "2.0"
}
```

---

### eth_newFilter

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Creates a filter object based on filter options to enable notifications (logs) for state changes.
You can use the [eth_getFilterChanges](#eth_getfilterchanges) method to check whether the state of the filter has changed.

##### Limits

> The filter expires if it remains inactive (no queries) for 5 minutes.

#### Request Parameters

- Filter object
  - address - [Optional] The contract address or the list of log addresses.
  - fromBlock - [Optional. Default value: "latest"] - A hexadecimal block number, or the string "latest", "earliest", or "pending".
  - toBlock - [Optional. Default value: "latest"] - A hexadecimal block number, or the string "latest", "earliest", or "pending".
  - topics - [Optional] - An array of 32-byte. Topics are order-dependent.

**A note on topic filters:** Topics are strongly order-dependent. A transaction with topics of `[A, B]` can be matched by the following topic filters:

- `[]`: any topic
- `[A]`: A in the first position (and any position after)
- `[null, B]`: anything in the first position and B in the second position (and any position after)
- `[A, B]`: A in the first position and B in the second position (and any position after)
- `[[A, B], [A, B]]`: (A or B) in the first position and (A or B) in the second position (and any position after)

#### Response

The unique ID of the filter.

#### Result Fields

- FILTER ID: a hexadecimal string, which indicates the ID of the newly created filter.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_newFilter",
  "params": [
    {
      "address": [
        "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"
      ],
      "fromBlock": "0x1082e00",
      "toBlock": "latest",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
      ]
    }
  ]
}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
> {"id":1,"jsonrpc":"2.0","method":"eth_newFilter","params":[{"address":["0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"],"fromBlock":"0x1082e00","toBlock":"latest","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]}]}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1e081"
}
```

---

### eth_getFilterChanges

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

过滤器的轮询方法，该方法返回自上次轮询以来发生的日志数组。
注意：Filter 必须通过调用 [eth_newFilter](#eth_newfilter)、[eth_newPendingTransactionFilter](#eth_newpendingtransactionfilter) 或 [eth_newBlockFilter](#eth_newblockfilter) 来创建。

Returns an array of log objects that have been emitted since the last poll. This method is a polling method for a filter.
Note: The filter must be created by calling [eth_newFilter](#eth_newfilter), [eth_newPendingTransactionFilter](#eth_newpendingtransactionfilter), or [eth_newBlockFilter](#eth_newblockfilter).

#### Request Parameters

- FILTER ID: a hexadecimal string.

#### Response

An array of log objects, or an empty array if nothing has changed since the last poll.

#### Result Fields

- LOG OBJECT ARRAY: an array of log objects, or an empty array if nothing has changed since the last poll.
  For filters created by using [eth_newBlockFilter](#eth_newblockfilter) or [eth_newPendingTransactionFilter](#eth_newpendingtransactionfilter), this method returns a 32-byte hash of the block or the transaction, such as `["0x90d02f7670ffad0c..."]`.
  For filters created by using [eth_newFilter](#eth_newfilter), a returned log object contains the following parameters:
  - removed: returns `true` if the log was removed due to a chain reorganization. The value is `false` for a valid log.
  - logIndex: the hexadecimal position of the log index in the block. For a pending log, null is returned.
  - transactionIndex: the hexadecimal number of the transaction index position where the log was created. For a pending log, null is returned.
  - transactionHash: the 32-byte hash of the transaction from which the log was created. For a pending log, null is returned.
  - blockHash: the 32-byte hash of the block where the log is located. For a pending log, null is returned.
  - blockNumber: the number of the block where the log is located. For a pending log, null is returned.
  - address: the 20-byte address from which the log originated.
  - data: contains non-indexed parameters of the log.
  - topics: an array of zero to four 32-byte DATA of indexed log arguments. (In Solidity, the first topic is the hash of the event signature, such as `Deposit(address, bytes32, uint256)`, unless you have declared the event with the anonymous specifier.)

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"id":1,"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["0x65e90793c6e1ee899755dcab110c915d"]}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
> {"id":1,"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["0x65e90793c6e1ee899755dcab110c915d"]}
```

##### Example Responses

- For filters created using [eth_newBlockFilter](#eth_newblockfilter) or [eth_newPendingTransactionFilter](#eth_newpendingtransactionfilter).

```json
{
  "result": [
    "0x90d02f7670ffad0c7167de3e0ad3c57cd0781707adc418f9c3f8efe49564b144",
    "0xeb1f6c7d686163dd7239271f2d30b767dd1343f8f0c247b92c61045fc9d7172c",
    "0xc3127ad348fede54644be15e6a3f14c2431cf4c86e2c6efe9e6e02c7a3ec6340",
    "0xea23065aa512725ac00570f62844f793f84a727a88120f93481363638fee6f80",
    "0xde597131b4ff075613a6c4a5b85b9a48b7a15d6df324d939e35374c97c775d4a"
  ],
  "id": 1,
  "jsonrpc": "2.0"
}
```

- For filters created using [eth_newFilter](#eth_newfilter).

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "address": "0xb5a5f22694352c15b00323844ad545abb2b11028",
      "blockHash": "0x99e8663c7b6d8bba3c7627a17d774238eae3e793dee30008debb2699666657de",
      "blockNumber": "0x5d12ab",
      "data": "0x0000000000000000000000000000000000000000000000a247d7a2955b61d000",
      "logIndex": "0x0",
      "removed": false,
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000bdc0afe57b8e9468aa95396da2ab2063e595f37e",
        "0x0000000000000000000000007503e090dc2b64a88f034fb45e247cbd82b8741e"
      ],
      "transactionHash": "0xa74c2432c9cf7dbb875a385a2411fd8f13ca9ec12216864b1a1ead3c99de99cd",
      "transactionIndex": "0x3"
    },
    {
      "address": "0xe38165c9f6deb144afc9c32c206b024817e1496d",
      "blockHash": "0x99e8663c7b6d8bba3c7627a17d774238eae3e793dee30008debb2699666657de",
      "blockNumber": "0x5d12ab",
      "data": "0x0000000000000000000000000000000000000000000000000000000025c6b720",
      "logIndex": "0x3",
      "removed": false,
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000080e73e47173b2d00b531bf83bc39e710157125c3",
        "0x0000000000000000000000008f6cc93795969e5bbbf07c66dfee7d41ad24f1ef"
      ],
      "transactionHash": "0x9e8f1cb1facb9a11a1cf947634053a0b2d557399f926b12127aa10497a2f0153",
      "transactionIndex": "0x5"
    }
  ]
}
```

---

### eth_getFilterLogs

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns an array of all logs that match the filter with a given ID.

##### Limits

> The filter expires if it remains inactive (no queries) for 5 minutes.
> This method is only used to get logs for filters that are created using [eth_newFilter](#eth_newfilter).

#### Request Parameters

- FILTER ID: a hexadecimal string.

#### Response

An array of log objects, or an empty array if nothing has changed since the last poll.

#### Result Fields

- LOG OBJECT ARRAY: an array of log objects, or an empty array if nothing has changed since the last poll.
  Parameters of log objects:
  - removed: returns true when the log was removed due to a chain reorganization. The value is false for a valid log.
  - logIndex: the hexadecimal position of the log index in the block. For a pending log, null is returned.
  - transactionIndex: the hexadecimal number of the transaction index position where the log was created. For a pending log, null is returned.
  - transactionHash: the 32-byte hash of the transaction from which the log was created. For a pending log, null is returned.
  - blockHash: the 32-byte hash of the block where the log is located. For a pending log, null is returned.
  - blockNumber: the number of the block where the log is located. For a pending log, null is returned.
  - address: the 20-byte address from which the log originated.
  - data: contains non-indexed parameters of the log.
  - topics: an array of zero to four 32-byte DATA of indexed log arguments. (In Solidity, the first topic is the hash of the event signature, such as `Deposit(address, bytes32, uint256)`, unless you have declared the event with the `anonymous` specifier.)

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"id":1,"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["0x4e82f216c80772807c0e2ee4230aa7a8"],}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
> {"id":1,"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["0x4e82f216c80772807c0e2ee4230aa7a8"],}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "address": "0xb5a5f22694352c15b00323844ad545abb2b11028",
      "blockHash": "0x99e8663c7b6d8bba3c7627a17d774238eae3e793dee30008debb2699666657de",
      "blockNumber": "0x5d12ab",
      "data": "0x0000000000000000000000000000000000000000000000a247d7a2955b61d000",
      "logIndex": "0x0",
      "removed": false,
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000bdc0afe57b8e9468aa95396da2ab2063e595f37e",
        "0x0000000000000000000000007503e090dc2b64a88f034fb45e247cbd82b8741e"
      ],
      "transactionHash": "0xa74c2432c9cf7dbb875a385a2411fd8f13ca9ec12216864b1a1ead3c99de99cd",
      "transactionIndex": "0x3"
    },
    {
      "address": "0xe38165c9f6deb144afc9c32c206b024817e1496d",
      "blockHash": "0x99e8663c7b6d8bba3c7627a17d774238eae3e793dee30008debb2699666657de",
      "blockNumber": "0x5d12ab",
      "data": "0x0000000000000000000000000000000000000000000000000000000025c6b720",
      "logIndex": "0x3",
      "removed": false,
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000080e73e47173b2d00b531bf83bc39e710157125c3",
        "0x0000000000000000000000008f6cc93795969e5bbbf07c66dfee7d41ad24f1ef"
      ],
      "transactionHash": "0x9e8f1cb1facb9a11a1cf947634053a0b2d557399f926b12127aa10497a2f0153",
      "transactionIndex": "0x5"
    }
  ]
}
```

---

### eth_uninstallFilter

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Uninstalls the filter with a given ID. You can call this method when a filter is no longer needed.
If a filter has not been requested by [eth_getFilterChanges](#eth_getfilterchanges) for a specific period of time, the filter times out and is automatically uninstalled.

#### Request Parameters

- FILTER ID: a hexadecimal string.

#### Response

The result of the filter uninstallation.

#### Result Fields

- UNINSTALLED FLAG: returns true if the filter was successfully uninstalled. Otherwise, it returns false.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"id":1,"jsonrpc":"2.0","method":"eth_uninstallFilter","params":["0x7038491cb7a541d7b5d4e09e90a340d"]}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"id":1,"jsonrpc":"2.0","method":"eth_uninstallFilter","params":["0x7038491cb7a541d7b5d4e09e90a340d"]}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

---

## History Blocks

This section provides APIs for accessing historical block data, such as block content, the fee history and the transaction count of blocks.

---

### eth_blockNumber

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the number of the “latest” block.

#### Request Parameters

None

#### Response

Returns the number of the “latest” block.

#### Result Fields

- BLOCK NUMBER - a hex code of an integer representing the current block number the client is on.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x89f7be"
}
```

---

### eth_feeHistory

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns historical gas information, allowing you to track trends over time.

#### Request Parameters

- blockCount: integer - Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. If blocks in the specified block range are not available, then only the fee history for available blocks is returned.
- newestBlock: string - Integer representing the highest number block of the requested range, or one of the string tags latest, earliest, or pending
- rewardPercentiles - [optional] A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used.

#### Response

Returns an object of historical gas information.

#### Result Fields

- oldestBlock - Lowest number block of the returned range expressed as a hexidecimal number.
- baseFeePerGas - Array of block base fees per gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Returns zeroes for blocks created before [EIP-1559](https://github.com/ethereum/EIPs/blob/2d8a95e14e56de27c5465d93747b0006bd8ac47f/EIPS/eip-1559.md).
- gasUsedRatio - An array of block gas used ratios. These are calculated as the ratio of `gasUsed` and `gasLimit`.
- reward - An array of effective priority fee per gas data points from a single block. All zeroes are returned if the block is empty.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"id": 1, "jsonrpc": "2.0", "method": "eth_feeHistory", "params": ["0x5", "latest", [20,30]] }'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_feeHistory","params":["0x5", "latest", []],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "result": {
    "baseFeePerGas": [
      "0x3da8e7618",
      "0x3e1ba3b1b",
      "0x3dfd72b90",
      "0x3d64eee76",
      "0x3d4da2da0",
      "0x3ccbcac6b"
    ],
    "gasUsedRatio": [
      0.5290747666666666, 0.49240453333333334, 0.4615576, 0.49407083333333335,
      0.4669053
    ],
    "oldestBlock": "0xfab8ac",
    "reward": [
      ["0x59682f00", "0x59682f00"],
      ["0x59682f00", "0x59682f00"],
      ["0x3b9aca00", "0x59682f00"],
      ["0x510b0870", "0x59682f00"],
      ["0x3b9aca00", "0x59682f00"]
    ]
  },
  "id": 0
}
```

---

### eth_getBlockByHash

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns information about a block by block hash.

#### Request Parameters

- BLOCK HASH [required] - a string representing the hash (32 bytes) of a block.
- SHOW TRANSACTION DETAILS FLAG [required] - if set to true, it returns the full transaction objects, if false only the hashes of the transactions.

#### Response

Returns information about a block by block hash.

#### Result Fields

- BLOCK - A block object, or null when no block was found
  - number: the block number. Null when the returned block is the pending block.
  - hash: 32 Bytes - hash of the block. Null when the returned block is the pending block.
  - parentHash: 32 Bytes - hash of the parent block.
  - nonce: 8 Bytes - hash of the generated proof-of-work. Null when the returned block is the pending block.
  - sha3Uncles: 32 Bytes - SHA3 of the uncles data in the block.
  - logsBloom: 256 Bytes - the bloom filter for the logs of the block. Null when the returned block is the pending block.
  - transactionsRoot: 32 Bytes - the root of the transaction trie of the block.
  - stateRoot: 32 Bytes - the root of the final state trie of the block.
  - receiptsRoot: 32 Bytes - the root of the receipts trie of the block.
  - miner: 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
  - difficulty: hexadecimal of the difficulty for this block.
  - totalDifficulty: hexadecimal of the total difficulty of the chain until this block.
  - extraData: the "extra data" field of this block.
  - size: hexadecimal of the size of this block in bytes.
  - gasLimit: the maximum gas allowed in this block.
  - gasUsed: the total used gas by all transactions in this block.
  - timestamp: the unix timestamp for when the block was collated.
  - transactions: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
  - uncles: an Array of uncle hashes.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",false],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getBlockByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",false],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0xbfabcdbd93dda",
    "extraData": "0x737061726b706f6f6c2d636e2d6e6f64652d3132",
    "gasLimit": "0x79f39e",
    "gasUsed": "0x79ccd3",
    "hash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
    "logsBloom": "0x4848112002a2020aaa0812180045840210020005281600c80104264300080008000491220144461026015300100000128005018401002090a824a4150015410020140400d808440106689b29d0280b1005200007480ca950b15b010908814e01911000054202a020b05880b914642a0000300003010044044082075290283516be82504082003008c4d8d14462a8800c2990c88002a030140180036c220205201860402001014040180002006860810ec0a1100a14144148408118608200060461821802c081000042d0810104a8004510020211c088200420822a082040e10104c00d010064004c122692020c408a1aa2348020445403814002c800888208b1",
    "miner": "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c",
    "mixHash": "0x3d1fdd16f15aeab72e7db1013b9f034ee33641d92f71c0736beab4e67d34c7a7",
    "nonce": "0x4db7a1c01d8a8072",
    "number": "0x5bad55",
    "parentHash": "0x61a8ad530a8a43e3583f8ec163f773ad370329b2375d66433eb82f005e1d6202",
    "receiptsRoot": "0x5eced534b3d84d3d732ddbc714f5fd51d98a941b28182b6efe6df3a0fe90004b",
    "sha3Uncles": "0x8a562e7634774d3e3a36698ac4915e37fc84a2cd0044cb84fa5d80263d2af4f6",
    "size": "0x41c7",
    "stateRoot": "0xf5208fffa2ba5a3f3a2f64ebd5ca3d098978bedd75f335f56b705d8715ee2305",
    "timestamp": "0x5b541449",
    "totalDifficulty": "0x12ac11391a2f3872fcd",
    "transactions": [
      "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",
      "0x311be6a9b58748717ac0f70eb801d29973661aaf1365960d159e4ec4f4aa2d7f",
      "0xe42b0256058b7cad8a14b136a0364acda0b4c36f5b02dea7e69bfd82cef252a2",
      "0x4eb05376055c6456ed883fc843bc43df1dcf739c321ba431d518aecd7f98ca11",
      "0x994dd9e72b212b7dc5fd0466ab75adf7d391cf4f206a65b7ad2a1fd032bb06d7",
      "0xf6feecbb9ab0ac58591a4bc287059b1133089c499517e91a274e6a1f5e7dce53",
      "0x7e537d687a5525259480440c6ea2e1a8469cd98906eaff8597f3d2a44422ff97",
      "0xa762220e92bed6d77a2c19ffc60dad77d71bd5028c5230c896ab4b9552a39b50",
      "0xf1fa677edda7e5add8e794732c7554cd5459a5c12781dc71de73c7937dfb2775",
      "0x3220af8e317fde6dac80b1199f9ceeafe60ada4974a7e04a75fbce1ac4cb46c3",
      "0x5566528978250828168f0d30bcc8a3689d129c75d820d604f7eb84c25b34ec81",
      "0x646c98e323a05862778f0c9063a989b6aefd94f28842a3a09d2edb37a050717d",
      "0xe951ea55764f7e8e0720f7042dd1db67525965302ed974a0c8e3b769bc1818e3",
      "0x7ecf2528b7df3831712501f5c60ef156bf5fcac9912199e0a64afcb963ea91ca",
      "0xc43b89783f68b2844918ea515cc146c006e5f162c9be9aedf5e7a6ae1f32e164",
      "0xd74503ede63d6fd41367796433aa14439902e8f57293a0583e19aa6ebf3f128e",
      "0x021e5b7d3ddac97b4c6cb9c3f333766a533c1ed9fbcfb8b2515c38ecd0c53f89",
      "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
      "0x25f65866dba34783200c25fb1c120b36326c9ad3a47e8bc34c3edbc9208f1378",
      "0x5336f5c4132ef00e8b469ecfd4ee0d6800f6bd60aefb1c62232cbce81c085ae2",
      "0xb87410cfe0a75c004f7637736b3de1e8f4e08e9e2b05ab963622a40a5505664d",
      "0x990857a27ec7cfd6dfd88015173adf81959b5abaff6eefbe8e9df6b0f40f2711",
      "0x3563ccb5734b7b5015122a20b558723afe992ff1109a04b57e02f26edd5a6a38",
      "0xd7885d9412cc494fbe680b016bf7402b633c34c66833b35cad59af2a4aff4f0b",
      "0x48e60927d6fb9ae76f69a6400490b5ffcb2f9da3105fad6c61f21256ef0c217c",
      "0x9e30af26ff3836c4b55af62ba134bc55db662cf1d396cca437d12a8195bfcbe4",
      "0x2476eeede4764c6871f50f3235ebeb9a56d33b41bc3bb1ce3c18c5d710a0609c",
      "0x1cd3520fbb1eb6f2f6f257ab7c3cba957806b0b87182baedb4f81c62868064c1",
      "0x78ae3aee0ff16d8ea4f394b7b80021804e1d9f35cdbb9c6189bb6cbf58bc52c4",
      "0xfcc75bad728b8d302ba0674ebe3122fc50e3b78fe4948ddfc0d37ee987e666ca",
      "0xd2175464d72bcc61b2e07aa3aac742b4184480d7a9f6ae5c2ba24d9c9bb9f304",
      "0x42b56b504e59e42a3dc94e740bb4231e6326daaac7a73ef93ee8db7b96ac5d71",
      "0xd42681091641cd2a71f18299e8e206d5659c3076b1c63adc26f5b7740e230d2b",
      "0x1202c354f0a00b31adf9e3d895e0c8f3896182bb3ab9fc69d6c21d31a1bf279c",
      "0xa5cea1f6957431caf589a8dbb58c102fb191b39967fbe8d26cecf6f28bb835da",
      "0x2045efeb2f5ea9176690ece680d3fd7ca9e945d0d572d17786810d323628f98c",
      "0xbf55d13976616a23114b724b14049eaaf91db3f1950320b5306006a6b648b24f",
      "0x9e5c5ea885eb1d6b1b3ffcf703e3381b7681f7420f35408d30ba93ec0cdf0792",
      "0x6f1a61dc4306ca5e976a1706afe1f32279548df98e0373c5fee0ea189ddb77a0",
      "0xc5c16b30c22ee4f90c3a2de70554f7975eb476592ff13c61986d760da6cf7f9d",
      "0xb09de28497227c0537df0a78797fa00407dcd04a4f90d9de602484b61f7bf169",
      "0x1bfea966fa7772a26b4b2c8add15ceedcb70a903618f5d4603d69f52b9954025",
      "0xe58be9c0e3cedd4444c76d1adc098ba40cbe21ef886b2bfc2edb6ed96ba8d966",
      "0x3a29096f712ccdafd56e9a3c635d4fe2e6224ac3666d466c21da66c8829bbfd6",
      "0x31feab77d7c1c87eb79af54193400c8edad16645e1ea5fcc10f2eaec51fe3992",
      "0x4e0278fce62dca8e23cfae6a020fcd3b2facc03244d54b964bbde424f902ffe1",
      "0x300239a64a50ad0e646c232f85cfa4f3d3ed30090cd574329c782d95c2b42532",
      "0x41755f354b06b4b8a452db1cc9b5c810c75b1bbe236603cbc0950c3c81b80c51",
      "0x1e3fbeffc326f1ffd8559c6024c12557e6014bc02c12d65dbc1baa4e1aed94b7",
      "0x4a459a32cf68e9b7697a3a656432b340d6d27c3d4a513e6cce770d63df99839a",
      "0x3ef484913d185de728c787a1053ec1444ec1c7a5827eecba521d3b406b088a89",
      "0x43afa584c21f27a2747a8397b00d3ec4b460d929b61b510d017f01037a3ded3f",
      "0x44e6a37a6c1d8696fa0537385b9d1bb535b2b3309b5482209e95b5b6c58fc8da",
      "0x2a8bca48147955efcfd697f1a97304ae4cc467a7778741c2c47e516610f0a876",
      "0x4c6bd64c8974f8b949cfe265da1c1bb997e3c886f024b38c99d170acc70b83df",
      "0x103f0cca1ae13600c5be5b217e92430a72b0471d05e283c105f5d0df36438b2a",
      "0x00a06bf6fbd07b3a89ef9031a2108c8fa31b467b33a6edcd6eb3687c158743cf",
      "0x0175496d8265dedd693cf88884626c33b699ebcf4f2110e4c7fb7603c53215b2",
      "0x11fb433ab551b33f30d00a34396835fab72e316e81d1e0afcbc92e79801f30c4",
      "0x060dc4541fd534d107f6e49b96d84f5ec6dbe4eb714890e800bd02399a6bfb7f",
      "0x01956de9f96f9a268c6524fffb9919d7fa3de7a4c25d53c2ccc43d0cb022a7ff",
      "0x15057378f2d223829269ec0f31ba4bb03146134220d34eb8eb7c403aa4a2e569",
      "0x16ea0218d72b5e3f69d0ae4daa8085150f5f7e69ee22a3b054744e35e2082879",
      "0x0baf4e8ff92058c1cac3b95c237edb4d2c12ad41d210356c209f1e0bf0d2d12a",
      "0x1a8ac77aff614caeca16a5a3a0931375a5a4fbe0ef1e15d6d15bf6f8e3c60f4f",
      "0xdb899136f41a3d4710907345b09d241490776383271e6b9887499fd05b80fcd4",
      "0x1007e17b1120d37fb930f953d8a3440ca11b8fd84470eb107c8b4a402a9813fd",
      "0x0910324706ffeebf8aa25ca0784636518bf67e5d173c22438a64dd43d5f4aa2a",
      "0x028f2bee56aee7005abcb2258d6d9f0f078a85a65c3d669aca40564ef4bd7f94",
      "0x14adac9bc94cde3166f4b7d42e8862a745483c708e51afbe89ecd6532acc532e",
      "0x54bed12ccad43523ba8527d1b99f5fa04a55b3a7724cfff2e0a21ec90b08590e",
      "0xcdf05df923f6e418505750069d6486276b15fcc3cd2f42a7044c642d19a86d51",
      "0x0c66977ed87db75074cb2bea66b254af3b20bb3315e8095290ceb1260b1b7449",
      "0x22626e2678da34b505b233ef08fc91ea79c5006dff00e33a442fa51a11e34c25",
      "0xe2989560000a1fc7c434c5e9c4bba82e1501bf435292ac25acc3cb182c1c2cd0",
      "0x348cfc85c58b7f3b2e8bdaa517dc8e3c5f8fb41e3ba235f28892b46bc3484756",
      "0x4ac009cebc1f2416b9e39bcc5b41cd53b1a9239e8f6c0ab043b8830ef1ffc563",
      "0xf2a96682362b9ffe9a77190bcbc47937743b6e1da2c56257f9b562f15bbd3cfa",
      "0xf1cd627c97746bc75727c2f0efa2d0dc66cca1b36d8e45d897e18a9b19af2f60",
      "0x241d89f7888fbcfadfd415ee967882fec6fdd67c07ca8a00f2ca4c910a84c7dd"
    ],
    "transactionsRoot": "0xf98631e290e88f58a46b7032f025969039aa9b5696498efc76baf436fa69b262",
    "uncles": [
      "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c"
    ]
  }
}
```

---

### eth_getBlockByNumber

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns information about a block by block number.

#### Request Parameters

- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".
- SHOW TRANSACTION DETAILS FLAG [required] - if set to true, it returns the full transaction objects, if false only the hashes of the transactions.

#### Response

Returns information about a block by block number.

#### Result Fields

- BLOCK - A block object, or null when no block was found
  - number: the block number. Null when the returned block is the pending block.
  - hash: 32 Bytes - hash of the block. Null when the returned block is the pending block.
  - parentHash: 32 Bytes - hash of the parent block.
  - nonce: 8 Bytes - hash of the generated proof-of-work. Null when the returned block is the pending block.
  - sha3Uncles: 32 Bytes - SHA3 of the uncles data in the block.
  - logsBloom: 256 Bytes - the bloom filter for the logs of the block. Null when the returned block is the pending block.
  - transactionsRoot: 32 Bytes - the root of the transaction trie of the block.
  - stateRoot: 32 Bytes - the root of the final state trie of the block.
  - receiptsRoot: 32 Bytes - the root of the receipts trie of the block.
  - miner: 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
  - difficulty: hexadecimal of the difficulty for this block.
  - totalDifficulty: hexadecimal of the total difficulty of the chain until this block.
  - extraData: the "extra data" field of this block.
  - size: hexadecimal the size of this block in bytes.
  - gasLimit: the maximum gas allowed in this block.
  - gasUsed: the total used gas by all transactions in this block.
  - timestamp: the unix timestamp for when the block was collated.
  - transactions: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
  - uncles: an Array of uncle hashes.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params": ["0x5BAD55",false],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params": ["0x5BAD55",false],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0xbfabcdbd93dda",
    "extraData": "0x737061726b706f6f6c2d636e2d6e6f64652d3132",
    "gasLimit": "0x79f39e",
    "gasUsed": "0x79ccd3",
    "hash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
    "logsBloom": "0x4848112002a2020aaa0812180045840210020005281600c80104264300080008000491220144461026015300100000128005018401002090a824a4150015410020140400d808440106689b29d0280b1005200007480ca950b15b010908814e01911000054202a020b05880b914642a0000300003010044044082075290283516be82504082003008c4d8d14462a8800c2990c88002a030140180036c220205201860402001014040180002006860810ec0a1100a14144148408118608200060461821802c081000042d0810104a8004510020211c088200420822a082040e10104c00d010064004c122692020c408a1aa2348020445403814002c800888208b1",
    "miner": "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c",
    "mixHash": "0x3d1fdd16f15aeab72e7db1013b9f034ee33641d92f71c0736beab4e67d34c7a7",
    "nonce": "0x4db7a1c01d8a8072",
    "number": "0x5bad55",
    "parentHash": "0x61a8ad530a8a43e3583f8ec163f773ad370329b2375d66433eb82f005e1d6202",
    "receiptsRoot": "0x5eced534b3d84d3d732ddbc714f5fd51d98a941b28182b6efe6df3a0fe90004b",
    "sha3Uncles": "0x8a562e7634774d3e3a36698ac4915e37fc84a2cd0044cb84fa5d80263d2af4f6",
    "size": "0x41c7",
    "stateRoot": "0xf5208fffa2ba5a3f3a2f64ebd5ca3d098978bedd75f335f56b705d8715ee2305",
    "timestamp": "0x5b541449",
    "totalDifficulty": "0x12ac11391a2f3872fcd",
    "transactions": [
      "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",
      "0x311be6a9b58748717ac0f70eb801d29973661aaf1365960d159e4ec4f4aa2d7f",
      "0xe42b0256058b7cad8a14b136a0364acda0b4c36f5b02dea7e69bfd82cef252a2",
      "0x4eb05376055c6456ed883fc843bc43df1dcf739c321ba431d518aecd7f98ca11",
      "0x994dd9e72b212b7dc5fd0466ab75adf7d391cf4f206a65b7ad2a1fd032bb06d7",
      "0xf6feecbb9ab0ac58591a4bc287059b1133089c499517e91a274e6a1f5e7dce53",
      "0x7e537d687a5525259480440c6ea2e1a8469cd98906eaff8597f3d2a44422ff97",
      "0xa762220e92bed6d77a2c19ffc60dad77d71bd5028c5230c896ab4b9552a39b50",
      "0xf1fa677edda7e5add8e794732c7554cd5459a5c12781dc71de73c7937dfb2775",
      "0x3220af8e317fde6dac80b1199f9ceeafe60ada4974a7e04a75fbce1ac4cb46c3",
      "0x5566528978250828168f0d30bcc8a3689d129c75d820d604f7eb84c25b34ec81",
      "0x646c98e323a05862778f0c9063a989b6aefd94f28842a3a09d2edb37a050717d",
      "0xe951ea55764f7e8e0720f7042dd1db67525965302ed974a0c8e3b769bc1818e3",
      "0x7ecf2528b7df3831712501f5c60ef156bf5fcac9912199e0a64afcb963ea91ca",
      "0xc43b89783f68b2844918ea515cc146c006e5f162c9be9aedf5e7a6ae1f32e164",
      "0xd74503ede63d6fd41367796433aa14439902e8f57293a0583e19aa6ebf3f128e",
      "0x021e5b7d3ddac97b4c6cb9c3f333766a533c1ed9fbcfb8b2515c38ecd0c53f89",
      "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
      "0x25f65866dba34783200c25fb1c120b36326c9ad3a47e8bc34c3edbc9208f1378",
      "0x5336f5c4132ef00e8b469ecfd4ee0d6800f6bd60aefb1c62232cbce81c085ae2",
      "0xb87410cfe0a75c004f7637736b3de1e8f4e08e9e2b05ab963622a40a5505664d",
      "0x990857a27ec7cfd6dfd88015173adf81959b5abaff6eefbe8e9df6b0f40f2711",
      "0x3563ccb5734b7b5015122a20b558723afe992ff1109a04b57e02f26edd5a6a38",
      "0xd7885d9412cc494fbe680b016bf7402b633c34c66833b35cad59af2a4aff4f0b",
      "0x48e60927d6fb9ae76f69a6400490b5ffcb2f9da3105fad6c61f21256ef0c217c",
      "0x9e30af26ff3836c4b55af62ba134bc55db662cf1d396cca437d12a8195bfcbe4",
      "0x2476eeede4764c6871f50f3235ebeb9a56d33b41bc3bb1ce3c18c5d710a0609c",
      "0x1cd3520fbb1eb6f2f6f257ab7c3cba957806b0b87182baedb4f81c62868064c1",
      "0x78ae3aee0ff16d8ea4f394b7b80021804e1d9f35cdbb9c6189bb6cbf58bc52c4",
      "0xfcc75bad728b8d302ba0674ebe3122fc50e3b78fe4948ddfc0d37ee987e666ca",
      "0xd2175464d72bcc61b2e07aa3aac742b4184480d7a9f6ae5c2ba24d9c9bb9f304",
      "0x42b56b504e59e42a3dc94e740bb4231e6326daaac7a73ef93ee8db7b96ac5d71",
      "0xd42681091641cd2a71f18299e8e206d5659c3076b1c63adc26f5b7740e230d2b",
      "0x1202c354f0a00b31adf9e3d895e0c8f3896182bb3ab9fc69d6c21d31a1bf279c",
      "0xa5cea1f6957431caf589a8dbb58c102fb191b39967fbe8d26cecf6f28bb835da",
      "0x2045efeb2f5ea9176690ece680d3fd7ca9e945d0d572d17786810d323628f98c",
      "0xbf55d13976616a23114b724b14049eaaf91db3f1950320b5306006a6b648b24f",
      "0x9e5c5ea885eb1d6b1b3ffcf703e3381b7681f7420f35408d30ba93ec0cdf0792",
      "0x6f1a61dc4306ca5e976a1706afe1f32279548df98e0373c5fee0ea189ddb77a0",
      "0xc5c16b30c22ee4f90c3a2de70554f7975eb476592ff13c61986d760da6cf7f9d",
      "0xb09de28497227c0537df0a78797fa00407dcd04a4f90d9de602484b61f7bf169",
      "0x1bfea966fa7772a26b4b2c8add15ceedcb70a903618f5d4603d69f52b9954025",
      "0xe58be9c0e3cedd4444c76d1adc098ba40cbe21ef886b2bfc2edb6ed96ba8d966",
      "0x3a29096f712ccdafd56e9a3c635d4fe2e6224ac3666d466c21da66c8829bbfd6",
      "0x31feab77d7c1c87eb79af54193400c8edad16645e1ea5fcc10f2eaec51fe3992",
      "0x4e0278fce62dca8e23cfae6a020fcd3b2facc03244d54b964bbde424f902ffe1",
      "0x300239a64a50ad0e646c232f85cfa4f3d3ed30090cd574329c782d95c2b42532",
      "0x41755f354b06b4b8a452db1cc9b5c810c75b1bbe236603cbc0950c3c81b80c51",
      "0x1e3fbeffc326f1ffd8559c6024c12557e6014bc02c12d65dbc1baa4e1aed94b7",
      "0x4a459a32cf68e9b7697a3a656432b340d6d27c3d4a513e6cce770d63df99839a",
      "0x3ef484913d185de728c787a1053ec1444ec1c7a5827eecba521d3b406b088a89",
      "0x43afa584c21f27a2747a8397b00d3ec4b460d929b61b510d017f01037a3ded3f",
      "0x44e6a37a6c1d8696fa0537385b9d1bb535b2b3309b5482209e95b5b6c58fc8da",
      "0x2a8bca48147955efcfd697f1a97304ae4cc467a7778741c2c47e516610f0a876",
      "0x4c6bd64c8974f8b949cfe265da1c1bb997e3c886f024b38c99d170acc70b83df",
      "0x103f0cca1ae13600c5be5b217e92430a72b0471d05e283c105f5d0df36438b2a",
      "0x00a06bf6fbd07b3a89ef9031a2108c8fa31b467b33a6edcd6eb3687c158743cf",
      "0x0175496d8265dedd693cf88884626c33b699ebcf4f2110e4c7fb7603c53215b2",
      "0x11fb433ab551b33f30d00a34396835fab72e316e81d1e0afcbc92e79801f30c4",
      "0x060dc4541fd534d107f6e49b96d84f5ec6dbe4eb714890e800bd02399a6bfb7f",
      "0x01956de9f96f9a268c6524fffb9919d7fa3de7a4c25d53c2ccc43d0cb022a7ff",
      "0x15057378f2d223829269ec0f31ba4bb03146134220d34eb8eb7c403aa4a2e569",
      "0x16ea0218d72b5e3f69d0ae4daa8085150f5f7e69ee22a3b054744e35e2082879",
      "0x0baf4e8ff92058c1cac3b95c237edb4d2c12ad41d210356c209f1e0bf0d2d12a",
      "0x1a8ac77aff614caeca16a5a3a0931375a5a4fbe0ef1e15d6d15bf6f8e3c60f4f",
      "0xdb899136f41a3d4710907345b09d241490776383271e6b9887499fd05b80fcd4",
      "0x1007e17b1120d37fb930f953d8a3440ca11b8fd84470eb107c8b4a402a9813fd",
      "0x0910324706ffeebf8aa25ca0784636518bf67e5d173c22438a64dd43d5f4aa2a",
      "0x028f2bee56aee7005abcb2258d6d9f0f078a85a65c3d669aca40564ef4bd7f94",
      "0x14adac9bc94cde3166f4b7d42e8862a745483c708e51afbe89ecd6532acc532e",
      "0x54bed12ccad43523ba8527d1b99f5fa04a55b3a7724cfff2e0a21ec90b08590e",
      "0xcdf05df923f6e418505750069d6486276b15fcc3cd2f42a7044c642d19a86d51",
      "0x0c66977ed87db75074cb2bea66b254af3b20bb3315e8095290ceb1260b1b7449",
      "0x22626e2678da34b505b233ef08fc91ea79c5006dff00e33a442fa51a11e34c25",
      "0xe2989560000a1fc7c434c5e9c4bba82e1501bf435292ac25acc3cb182c1c2cd0",
      "0x348cfc85c58b7f3b2e8bdaa517dc8e3c5f8fb41e3ba235f28892b46bc3484756",
      "0x4ac009cebc1f2416b9e39bcc5b41cd53b1a9239e8f6c0ab043b8830ef1ffc563",
      "0xf2a96682362b9ffe9a77190bcbc47937743b6e1da2c56257f9b562f15bbd3cfa",
      "0xf1cd627c97746bc75727c2f0efa2d0dc66cca1b36d8e45d897e18a9b19af2f60",
      "0x241d89f7888fbcfadfd415ee967882fec6fdd67c07ca8a00f2ca4c910a84c7dd"
    ],
    "transactionsRoot": "0xf98631e290e88f58a46b7032f025969039aa9b5696498efc76baf436fa69b262",
    "uncles": [
      "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c"
    ]
  }
}
```

---

### eth_getBlockTransactionCountByHash

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the number of transactions in the block with the given block hash.

#### Request Parameters

- BLOCK HASH [required] - a string representing the hash (32 bytes) of a block.

#### Response

Returns the number of transactions in the block with the given block hash.

#### Result Fields

- BLOCK TRANSACTION COUNT - a hex number of the integer representing the number of transactions in the provided block.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x50"
}
```

---

### eth_getBlockTransactionCountByNumber

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the number of transactions in the block with the given block number.

#### Request Parameters

- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".

#### Response

Returns the number of transactions in the block with the given block number.

#### Result Fields

- BLOCK TRANSACTION COUNT - a hex code of the integer representing the number of transactions in the provided block

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params": ["latest"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params": ["latest"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x9"
}
```

---

### eth_getUncleByBlockHashAndIndex

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns information about the 'Uncle' of a block by hash and the Uncle index position.

#### Request Parameters

- BLOCK HASH [required] - a string representing the hash (32 bytes) of a block
- UNCLE INDEX POSITION [required] - a hex of the integer indicating the uncle's index position.

#### Response

Returns information about the 'Uncle' of a block by hash and the Uncle index position.

#### Result Fields

- BLOCK - A block object, or null when no block was found
  - number: the block number. Null when the returned block is the pending block.
  - hash: 32 Bytes - hash of the block. null when its pending block.
  - parentHash: 32 Bytes - hash of the parent block.
  - nonce: 8 Bytes - hash of the generated proof-of-work. Null when the returned block is the pending block.
  - sha3Uncles: 32 Bytes - SHA3 of the uncles data in the block.
  - logsBloom: 256 Bytes - the bloom filter for the logs of the block. Null when the returned block is the pending block.
  - transactionsRoot: 32 Bytes - the root of the transaction trie of the block.
  - stateRoot: 32 Bytes - the root of the final state trie of the block.
  - receiptsRoot: 32 Bytes - the root of the receipts trie of the block.
  - miner: 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
  - difficulty: hexadecimal of the difficulty for this block.
  - totalDifficulty: hexadecimal of the total difficulty of the chain until this block.
  - extraData: the "extra data" field of this block.
  - size: hexadecimal the size of this block in bytes.
  - gasLimit: the maximum gas allowed in this block.
  - gasUsed: the total used gas by all transactions in this block.
  - timestamp: the unix timestamp for when the block was collated.
  - uncles: an Array of uncle hashes.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0xbf93da424b943",
    "extraData": "0x65746865726d696e652d657539",
    "gasLimit": "0x7a121d",
    "gasUsed": "0x79ea62",
    "hash": "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c",
    "logsBloom": "0x0948432021200401804810002000000000381001001202440000010020000080a016262050e44850268052000400100505022305a64000054004200b0c04110000080c1055c42001054b804940a0401401008a00112d80082113400c10006580140005011a40220020000010001c0a00082300434002000050840010102082801c2000148540201004491814020480080111a0300600000003800640024200109c00202010044000880000106810a1a010000028a0100000422000140011000050a2a44b3080001060800000540c108102102600d000004730404a880100600021080100403000180000062642408b440060590400080101e046f08000000430",
    "miner": "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
    "mixHash": "0x0b15fe0a9aa789c167b0f5ade7b72969d9f2193014cb4e98382254f60ffb2f4a",
    "nonce": "0xa212d6400b89b3f6",
    "number": "0x5bad54",
    "parentHash": "0x05e19fb68d9ec798073808e8b3170875cb327d4b6cde7d6f60fe194677bb26fd",
    "receiptsRoot": "0x90807b32c4aa4610c57289de57fa68ba50ed53f14dd2c25f1862aa049029dcd6",
    "sha3Uncles": "0xf763576c1ea6a8c61a206e16b1a2451bec5cba1c7545d7ff733a1e8c78715569",
    "size": "0x216",
    "stateRoot": "0xebc7a1603bfffe0a14bdb89f898e2f2824abb40f04579beb7b920c56d6e273c9",
    "timestamp": "0x5b54143f",
    "totalDifficulty": null,
    "transactionsRoot": "0x7562cba41e067b364b933e7b566fb2444f6954fef3964a5a487d4cd79d97a56c",
    "uncles": []
  }
}
```

---

### eth_getUncleByBlockNumberAndIndex

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns information about the 'Uncle' of a block by number and the Uncle index position.

#### Request Parameters

- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".
- UNCLE INDEX POSITION [required] - a hex of the integer indicating the uncle's index position.

#### Response

Returns information about the "Uncle" of a block by number and the uncle index position.

#### Result Fields

EN

- BLOCK - A block object, or null when no block was found
  - number: the block number. null when its pending block.
  - hash: 32 Bytes - hash of the block. null when its pending block.
  - parentHash: 32 Bytes - hash of the parent block.
  - nonce: 8 Bytes - hash of the generated proof-of-work. null when its pending block.
  - sha3Uncles: 32 Bytes - SHA3 of the uncles data in the block.
  - logsBloom: 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
  - transactionsRoot: 32 Bytes - the root of the transaction trie of the block.
  - stateRoot: 32 Bytes - the root of the final state trie of the block.
  - receiptsRoot: 32 Bytes - the root of the receipts trie of the block.
  - miner: 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
  - difficulty: hexadecimal of the difficulty for this block.
  - totalDifficulty: hexadecimal of the total difficulty of the chain until this block.
  - extraData: the "extra data" field of this block.
  - size: hexadecimal the size of this block in bytes.
  - gasLimit: the maximum gas allowed in this block.
  - gasUsed: the total used gas by all transactions in this block.
  - timestamp: the unix timestamp for when the block was collated.
  - uncles: an Array of uncle hashes.

> Note: An uncle doesn't contain individual transactions.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex","params": ["0x29c","0x0"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex","params": ["0x29c","0x0"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0x57f117f5c",
    "extraData": "0x476574682f76312e302e302f77696e646f77732f676f312e342e32",
    "gasLimit": "0x1388",
    "gasUsed": "0x0",
    "hash": "0x932bdf904546a2287a2c9b2ede37925f698a7657484b172d4e5184f80bdd464d",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0x5bf5e9cf9b456d6591073513de7fd69a9bef04bc",
    "mixHash": "0x4500aa4ee2b3044a155252e35273770edeb2ab6f8cb19ca8e732771484462169",
    "nonce": "0x24732773618192ac",
    "number": "0x299",
    "parentHash": "0xa779859b1ee558258b7008bbabff272280136c5dd3eb3ea3bfa8f6ae03bf91e5",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x21d",
    "stateRoot": "0x2604fbf5183f5360da249b51f1b9f1e0f315d2ff3ffa1a4143ff221ad9ca1fec",
    "timestamp": "0x55ba4827",
    "totalDifficulty": null,
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}
```

---

### eth_getUncleCountByBlockHash

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the number of uncles in a block from a block matching the given block hash.

#### Request Parameters

- BLOCK HASH [required] - a string representing the hash (32 bytes) of a block.

#### Response

Returns the number of uncles in a block from a block matching the given block hash.

#### Result Fields

- BLOCK TRANSACTION COUNT - a hex code of the integer representing the number of uncles in the provided block.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```

---

### eth_getUncleCountByBlockNumber

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the number of uncles in a block from a block matching the given block number.

#### Request Parameters

- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".

#### Response

Returns the number of uncles in a block from a block matching the given block number.

#### Result Fields

- BLOCK TRANSACTION COUNT - a hex code of the integer representing the number of uncles in the provided block.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params": ["0x5bad55"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params": ["0x5bad55"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```

---

## History Transactions

This section includes APIs for retrieving historical transaction data and transaction receipts. The transaction data can be retrieved in various ways, including the combination of a block hash and an in-block index, the combination of a block number and an in-block index, or the transaction hash.

---

### eth_getTransactionByBlockHashAndIndex

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns information about a transaction by block hash and transaction index position.

#### Request Parameters

- BLOCK HASH [required] - a string representing the hash (32 bytes) of a block.
- TRANSACTION INDEX POSITION [required] - a hex of the integer representing the position in the block.

#### Response

Returns information about a transaction by block hash and transaction index position.

#### Result Fields

- TRANSACTION - A transaction object, or null when no transaction was found
  - accessList: [optional] list of addresses and storage keys the transaction plans to access. See [access list transactions](https://eips.ethereum.org/EIPS/eip-2930).
  - blockHash: 32 Bytes - hash of the block including this transaction. null when it's pending.
  - blockNumber: number of the block including this transaction. null when it's pending.
  - chainID: [optional] chain ID specifying the network. Returned only for [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - from: 20 Bytes - address of the sender.
  - gas: gas provided by the sender.
  - gasPrice: gas price provided by the sender in Wei.
  - hash: 32 Bytes - hash of the transaction.
  - input: the data sent along with the transaction.
  - maxPriorityFeePerGas: [optional] maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - maxFeePerGas: [optional] maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - nonce: the number of transactions made by the sender prior to this one.
  - r: 32 Bytes - ECDSA signature r.
  - s: 32 Bytes - ECDSA signature s.
  - to: 20 Bytes - address of the receiver. null when it's a contract creation transaction.
  - transactionIndex: the transaction's index position in the block, in hexadecimal. null when it's pending.
  - type: the transaction type.
  - v: ECDSA recovery ID.
  - value: value transferred in Wei.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35","0x0"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
    "blockNumber": "0x5bad55",
    "from": "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
    "gas": "0x249f0",
    "gasPrice": "0x174876e800",
    "hash": "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",
    "input": "0x6ea056a9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bd8d7fa6f8cc00",
    "nonce": "0x5e4724",
    "r": "0xd1556332df97e3bd911068651cfad6f975a30381f4ff3a55df7ab3512c78b9ec",
    "s": "0x66b51cbb10cd1b2a09aaff137d9f6d4255bf73cb7702b666ebd5af502ffa4410",
    "to": "0x4b9c25ca0224aef6a7522cabdbc3b2e125b7ca50",
    "transactionIndex": "0x0",
    "type": "0x0",
    "v": "0x25",
    "value": "0x0"
  }
}
```

---

### eth_getTransactionByBlockNumberAndIndex

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns information about a transaction by block number and transaction index position.

#### Request Parameters

- BLOCK PARAMETER [required] - hexadecimal block number, or the string "latest", "earliest" or "pending".
- TRANSACTION INDEX POSITION [required] - a hex of the integer representing the position in the block.

#### Response

Returns information about a transaction by block number and transaction index position.

#### Result Fields

- TRANSACTION - A transaction object, or null when no transaction was found
  - accessList: [optional] list of addresses and storage keys the transaction plans to access. See [access list transactions](https://eips.ethereum.org/EIPS/eip-2930).
  - blockHash: 32 Bytes - hash of the block including this transaction. null when it's pending.
  - blockNumber: number of the block including this transaction. null when it's pending.
  - chainID: [optional] chain ID specifying the network. Returned only for [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - from: 20 Bytes - address of the sender.
  - gas: gas provided by the sender.
  - gasPrice: gas price provided by the sender in Wei.
  - hash: 32 Bytes - hash of the transaction.
  - input: the data sent along with the transaction.
  - maxPriorityFeePerGas: [optional] maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - maxFeePerGas: [optional] maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - nonce: the number of transactions made by the sender prior to this one.
  - r: 32 Bytes - ECDSA signature r.
  - s: 32 Bytes - ECDSA signature s.
  - to: 20 Bytes - address of the receiver. null when it's a contract creation transaction.
  - transactionIndex: the transaction's index position in the block, in hexadecimal. null when it's pending.
  - type: the transaction type.
  - v: ECDSA recovery ID.
  - value: value transferred in Wei.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIndex","params": ["0x5BAD55","0x0"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIndex","params": ["0x5BAD55","0x0"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
    "blockNumber": "0x5bad55",
    "from": "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
    "gas": "0x249f0",
    "gasPrice": "0x174876e800",
    "hash": "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",
    "input": "0x6ea056a9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bd8d7fa6f8cc00",
    "nonce": "0x5e4724",
    "r": "0xd1556332df97e3bd911068651cfad6f975a30381f4ff3a55df7ab3512c78b9ec",
    "s": "0x66b51cbb10cd1b2a09aaff137d9f6d4255bf73cb7702b666ebd5af502ffa4410",
    "to": "0x4b9c25ca0224aef6a7522cabdbc3b2e125b7ca50",
    "transactionIndex": "0x0",
    "type": "0x0",
    "v": "0x25",
    "value": "0x0"
  }
}
```

---

### eth_getTransactionByHash

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns information about a transaction for a given hash.

#### Request Parameters

- TRANSACTION HASH [required] - a string representing the hash (32 bytes) of a transaction

#### Response

Returns information about a transaction for a given hash.

#### Result Fields

- TRANSACTION - A transaction object, or null when no transaction was found
  - accessList: [optional] list of addresses and storage keys the transaction plans to access. See [access list transactions](https://eips.ethereum.org/EIPS/eip-2930).
  - blockHash: 32 Bytes - hash of the block including this transaction. null when it's pending.
  - blockNumber: number of the block including this transaction. null when it's pending.
  - chainID: [optional] chain ID specifying the network. Returned only for [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - from: 20 Bytes - address of the sender.
  - gas: gas provided by the sender.
  - gasPrice: gas price provided by the sender in Wei.
  - hash: 32 Bytes - hash of the transaction.
  - input: the data sent along with the transaction.
  - maxPriorityFeePerGas: [optional] maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - maxFeePerGas: [optional] maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See [EIP-1559 transactions](https://notes.ethereum.org/@vbuterin/eip-1559-faq).
  - nonce: the number of transactions made by the sender prior to this one.
  - r: 32 Bytes - ECDSA signature r.
  - s: 32 Bytes - ECDSA signature s.
  - to: 20 Bytes - address of the receiver. null when it's a contract creation transaction.
  - transactionIndex: the transaction's index position in the block, in hexadecimal. null when it's pending.
  - type: the transaction type.
  - v: ECDSA recovery ID.
  - value: value transferred in Wei.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
    "blockNumber": "0x5bad55",
    "from": "0x398137383b3d25c92898c656696e41950e47316b",
    "gas": "0x1d45e",
    "gasPrice": "0xfa56ea00",
    "hash": "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
    "input": "0xf7d8c88300000000000000000000000000000000000000000000000000000000000cee6100000000000000000000000000000000000000000000000000000000000ac3e1",
    "nonce": "0x18",
    "r": "0x2a378831cf81d99a3f06a18ae1b6ca366817ab4d88a70053c41d7a8f0368e031",
    "s": "0x450d831a05b6e418724436c05c155e0a1b7b921015d0fbc2f667aed709ac4fb5",
    "to": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    "transactionIndex": "0x11",
    "type": "0x0",
    "v": "0x25",
    "value": "0x1c6bf526340000"
  }
}
```

---

### eth_getTransactionReceipt

POST https://api.zan.top/node/v1/eth/mainnet/{apiKey}

#### Function

Returns the receipt of a transaction by transaction hash. Note that the receipt is not available for pending transactions.

#### Request Parameters

- TRANSACTION HASH [required] - a string representing the hash (32 bytes) of a transaction

#### Response

Returns the receipt of a transaction by transaction hash.

#### Result Fields

- TRANSACTION RECEIPT - A transaction receipt object, or null when no receipt was found:
  - blockHash: 32 Bytes - hash of the block including this transaction.
  - blockNumber: block number including this transaction.
  - contractAddress: 20 Bytes - the contract address created, if the transaction was a contract creation, otherwise null.
  - cumulativeGasUsed: the total amount of gas used when this transaction was executed in the block.
  - effectiveGasPrice: the actual value per gas deducted from the sender's account. Before [EIP-1559](https://notes.ethereum.org/@vbuterin/eip-1559-faq), equal to the gas price.
  - from: 20 Bytes - address of the sender.
  - gasUsed: the amount of gas used by this specific transaction alone.
  - logs: Array - Array of log objects, which this transaction generated.
  - logsBloom: 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.
  - One of the following:
    - root: 32 bytes of post-transaction stateroot (pre Byzantium)
    - status: either 1 (success) or 0 (failure)
  - to: 20 Bytes - address of the receiver. null when the transaction is a contract creation transaction.
  - transactionHash: 32 Bytes - hash of the transaction.
  - transactionIndex: hexadecimal of the transaction's index position in the block.
  - type: the transaction type.

#### Examples

##### Example Requests

```bash
## JSON-RPC over HTTP POST
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
curl https://api.zan.top/node/v1/eth/mainnet/{apiKey} \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}'

## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
>{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}
```

##### Example Responses

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
    "blockNumber": "0x5bad55",
    "contractAddress": null,
    "cumulativeGasUsed": "0xb90b0",
    "effectiveGasPrice": "0x746a528800",
    "from": "0x398137383b3d25c92898c656696e41950e47316b",
    "gasUsed": "0x1383f",
    "logs": [
      {
        "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
        "blockHash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
        "blockNumber": "0x5bad55",
        "data": "0x000000000000000000000000398137383b3d25c92898c656696e41950e47316b00000000000000000000000000000000000000000000000000000000000cee6100000000000000000000000000000000000000000000000000000000000ac3e100000000000000000000000000000000000000000000000000000000005baf35",
        "logIndex": "0x6",
        "removed": false,
        "topics": [
          "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"
        ],
        "transactionHash": "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
        "transactionIndex": "0x11"
      }
    ],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000200000000000000000000000000000",
    "status": "0x1",
    "to": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    "transactionHash": "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
    "transactionIndex": "0x11",
    "type": "0x0"
  }
}
```

---

## WebSocket Subscriptions

This section covers APIs for managing WebSocket subscriptions to receive real-time updates on events happening on the blockchain, such as new blocks and transactions.

---

### eth_subscribe

wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}

#### Function

Subscribes to a specific type of event and returns the subscription ID in the response.
For each event that matches the subscription, a notification with the relevant data is sent along with the subscription ID.

#### Request Parameters

- SUBSCRIPTION EVENT - 指定订阅类型。共三个选项：

1. newHeads - 订阅此方法将在每次有新区块头添加到链上时产生新的通知（包括链分叉后重组时的新区块）。在链发生重组时，订阅会产生新链的所有新区块头。因此，订阅可能产生相同高度的多个区块头。
2. logs - 将返回包含在新区块中的匹配给定过滤条件的日志。在链发生重组时，以前在旧链上发送过的日志将被重新发送，但是 `removed` 属性将是 true，并将产生在新链中的交易日志。因此，订阅可能多次产生相同交易的日志。
   - address - [可选] 一个地址或一个地址数组。只返回从这些地址创建的日志。
   - topics - [可选] 只记录与指定主题匹配的日志。
3. newPendingTransactions - 返回被添加到待定状态且经经签名的所有交易的哈希值（每个交易产生一个哈希值）。若链发生重组，原来在主链上的某些交易可能会因为被包含在了其他链上而被排除在新的主链之外。这时，这些交易又会被加入到待定状态中。因此，订阅可能多次产生相同交易的日志。

- SUBSCRIPTION EVENT: specifies the type of events you want to subscribe to. Valid values:

1. newHeads: returns a notification each time a new block header is appended to the chain, including those generated from chain reorganizations. In case of a chain reorganization, the subscription emits all new block headers for the new chain. Therefore, a subscription could emit block headers at the same height multiple times.
2. logs: returns logs that are included in the newly added blocks and match the given filter. In case of a chain reorganization, the previously emitted logs on the old chain are re-emitted with the `removed` property set to true. Logs from transactions in the new chain are emitted. Therefore, a subscription could emit logs for the same transaction multiple times.
   - address - [Optional] An address or an array of addresses. Only logs that are created from these addresses are returned.
   - topics - [Optional] Only records logs that match the specified topics.
3. newPendingTransactions: returns hashes for all transactions that are added to the pending state and signed with keys available in the node (a hash for each transaction). In case of a chain reorganization, some transactions that were originally on the canonical chain may be excluded from the new canonical chain because they are included in other chains. In this case, these transactions are added to the pending state again. Therefore, a subscription can emit logs for the same transaction multiple times.

#### Response

The subscription ID.

#### Result Fields

- SUBSCRIPTION ID: the ID of the newly created subscription.

#### Examples

##### Example Requests

```bash
## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
> {"jsonrpc":"2.0", "id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
> {"jsonrpc":"2.0", "id": 1, "method": "eth_subscribe", "params": ["newPendingTransactions"]}
> {"jsonrpc":"2.0", "id": 1, "method": "eth_subscribe", "params": ["logs", {"address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]]}
```

##### Example Responses

```json
{
  "result": "87be5b00-608c-45fd-a66a-f5df5e5508d3",
  "session": "03b13a6f-eb29-4720-9c43-c22a7e5c0ae3",
  "id": 1,
  "jsonrpc": "2.0"
}
```

---

### eth_unsubscribe

wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}

#### Function

Cancels a subscription of a given ID.

#### Request Parameters

- SUBSCRIPTION ID - [Required] The subscription ID, which is the result returned from [eth_subscribe](#eth_subscribe).

#### Response

The unsubscription result.

#### Result Fields

#### Examples

##### Example Requests

```bash
## JSON-RPC over WSS
## Replace {apiKey} with the API key you obtained from the ZAN dashboard.
## You can also replace the mainnet with any other supported networks.
wscat -c wss://api.zan.top/node/ws/v1/eth/mainnet/{apiKey}
> {"jsonrpc":"2.0", "id": 1, "method": "eth_unsubscribe", "params": ["87be5b00-608c-45fd-a66a-f5df5e5508d3"]}
```

##### Example Responses

```json
{
  "result": false,
  "session": "783bc470-82f7-4d60-9716-c1cc00189af4",
  "id": 1,
  "jsonrpc": "2.0"
}
```
