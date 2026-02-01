# Solscan MCP Server

A Model Context Protocol (MCP) server that provides LLMs with real-time access to Solana blockchain data through **Solscan API v2**.

## 🚀 Features

- **Account Intelligence**: Comprehensive data on balances, transactions, transfers, and holdings (Tokens, NFTs, Stake).
- **Market Analytics**: Track trending tokens, top lists, price data, and holder distributions.
- **Activity History**: Deep dive into DeFi trading and NFT activities.
- **Network Transparency**: Direct access to block details, transaction logs, and chain status.

## 📦 Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

## 🛠 Usage with Claude Desktop

To use this MCP server with Claude Desktop, add the following to your Claude Desktop configuration:

```json
{
  "mcpServers": {
    "solscan": {
      "command": "node",
      "args": [
        "C:\\YOUR_USERNAME\\YOUR_PROJECT_PATH\\mcp-solscan\\dist\\index.js"
      ]
    }
  }
}
```

## 🐳 Docker Support

You can also run this server using Docker:

```bash
docker-compose up --build -d
```

## 🔧 Architecture

The server uses **Solscan API v2** (public endpoints) to fetch data directly, ensuring:

- **Speed**: Direct API calls are faster than browser automation.
- **Reliability**: Structured JSON responses.
- **Efficiency**: Minimal resource usage compared to running a headless browser.

## 📝 Tools Reference

| Tool                          | Description                                       |
| :---------------------------- | :------------------------------------------------ |
| `get_account`                 | Get details of a Solana account from Solscan.     |
| `get_transaction`             | Get details of a Solana transaction from Solscan. |
| `get_account_transactions`    | Get recent transactions of a Solana account.      |
| `get_account_transfers`       | Get SPL transfers of a Solana account.            |
| `get_account_tokens`          | Get tokens held by a Solana account.              |
| `get_account_nfts`            | Get NFTs held by a Solana account.                |
| `get_account_stake_accounts`  | Get stake accounts held by a Solana account.      |
| `get_account_defi_activities` | Get DeFi trading history of a Solana account.     |
| `get_account_nft_activities`  | Get NFT trading history of a Solana account.      |
| `get_token_meta`              | Get metadata of a token from Solscan.             |
| `get_token_holders`           | Get holders of a token from Solscan.              |
| `get_token_list`              | Get list of top tokens from Solscan.              |
| `get_token_trending`          | Get trending tokens from Solscan.                 |
| `get_token_price`             | Get current price of a token from Solscan.        |
| `get_token_transfers`         | Get transfers of a token from Solscan.            |
| `get_chain_info`              | Get current chain info (latest block/slot).       |
| `get_block_detail`            | Get details of a specific block.                  |
| `get_block_transactions`      | Get transactions in a specific block.             |

## License

MIT
