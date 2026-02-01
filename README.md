# Solscan MCP Server

A Model Context Protocol (MCP) server that provides LLMs with real-time access to Solana blockchain data through **Solscan API v2**.

## 🚀 Features

- **get_account**: Fetch SOL balance, token metadata, and owner program
- **get_transaction**: Retrieves detailed transaction execution status, logs, and instruction data
- **get_account_transactions**: Get recent transactions for an account
- **get_account_transfers**: Get SPL transfers for an account
- **get_account_tokens**: Get token holdings (sorted by value)
- **get_account_nfts**: Get NFT holdings
- **get_account_stake_accounts**: Get stake accounts
- **get_account_defi_activities**: Get DeFi trading history
- **get_account_nft_activities**: Get NFT trading history

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

## License

MIT
