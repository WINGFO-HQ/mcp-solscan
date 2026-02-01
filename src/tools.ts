import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getTransactionDetail } from "./services/transaction.js";
import { 
  getAccountDetail, 
  getAccountTransactions, 
  getAccountTransfers,
  getAccountDefiActivities,
  getAccountNftActivities,
  getAccountTokens,
  getAccountNfts,
  getAccountStakeAccounts
} from "./services/account.js";
import { 
  getTokenMeta, 
  getTokenHolders, 
  getTokenList,
  getTrendingTokens, 
  getTokenPrice,
  getTokenTransfers
} from "./services/token.js";
import { 
  getChainInfo, 
  getBlockDetail, 
  getBlockTransactions 
} from "./services/general.js";

export function registerTools(server: McpServer) {
  
  server.tool(
    "get_transaction",
    "Get details of a Solana transaction from Solscan",
    {
      signature: z.string(),
    },
    async ({ signature }) => {
      try {
        const data = await getTransactionDetail(signature);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting transaction: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_account",
    "Get details of a Solana account from Solscan",
    {
      address: z.string(),
    },
    async ({ address }) => {
      try {
        const data = await getAccountDetail(address);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_account_transactions",
    "Get recent transactions of a Solana account from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
      
      const validLimits = [10, 20, 30, 40];
      const actualLimit = validLimits.includes(limit) ? limit : 10;
      
      try {
        const data = await getAccountTransactions(address, actualLimit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account transactions: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_account_transfers",
    "Get SPL transfers of a Solana account from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
      removeSpam: z.boolean().optional().default(true),
      excludeAmountZero: z.boolean().optional().default(true),
    },
    async ({ address, limit, removeSpam, excludeAmountZero }) => {
      try {
        const data = await getAccountTransfers(address, limit, removeSpam, excludeAmountZero);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account transfers: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_account_defi_activities",
    "Get DeFi activities (dextrading) of a Solana account from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
      try {
        const data = await getAccountDefiActivities(address, limit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account defi activities: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_account_nft_activities",
    "Get NFT activities of a Solana account from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
      try {
        const data = await getAccountNftActivities(address, limit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account nft activities: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_account_tokens",
    "Get tokens held by a Solana account from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
      const validLimits = [10, 20, 30, 40];
      const actualLimit = validLimits.includes(limit) ? limit : 10;
      
      try {
        const data = await getAccountTokens(address, 1, actualLimit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account tokens: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );
  
  server.tool(
    "get_account_nfts",
    "Get NFTs held by a Solana account from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
      const validLimits = [10, 20, 30, 40];
      const actualLimit = validLimits.includes(limit) ? limit : 10;
      
      try {
        const data = await getAccountNfts(address, 1, actualLimit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account NFTs: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_account_stake_accounts",
    "Get stake accounts held by a Solana account from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
      const validLimits = [10, 20, 30, 40];
      const actualLimit = validLimits.includes(limit) ? limit : 10;
      
      try {
        const data = await getAccountStakeAccounts(address, 1, actualLimit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting account stake accounts: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  

  
  server.tool(
    "get_token_meta",
    "Get metadata of a token from Solscan",
    {
      address: z.string(),
    },
    async ({ address }) => {
      try {
        const data = await getTokenMeta(address);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting token meta: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_token_holders",
    "Get holders of a token from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
      const validLimits = [10, 20, 30, 40];
      const actualLimit = validLimits.includes(limit) ? limit : 10;

      try {
        const data = await getTokenHolders(address, 1, actualLimit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting token holders: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_token_list",
    "Get list of top tokens from Solscan",
    {
      limit: z.number().optional().default(10),
      sortBy: z.enum(["market_cap", "volume_24h", "price", "holder"]).optional().default("market_cap"),
      direction: z.enum(["asc", "desc"]).optional().default("desc"), 
    },
    async ({ limit, sortBy, direction }) => {
      try {
        const data = await getTokenList(sortBy, direction, 1, limit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting token list: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_token_trending",
    "Get trending tokens from Solscan",
    {
      limit: z.number().optional().default(10),
    },
    async ({ limit }) => {
      try {
        const data = await getTrendingTokens(limit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting trending tokens: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_token_price",
    "Get current price of a token from Solscan (via metadata)",
    {
      address: z.string(),
    },
    async ({ address }) => {
      try {
        const data = await getTokenPrice(address);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting token price: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_token_transfers",
    "Get transfers of a token from Solscan",
    {
      address: z.string(),
      limit: z.number().optional().default(10),
    },
    async ({ address, limit }) => {
       const validLimits = [10, 20, 30, 40];
       const actualLimit = validLimits.includes(limit) ? limit : 10;
       try {
        const data = await getTokenTransfers(address, 1, actualLimit);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting token transfers: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  

  
  server.tool(
    "get_chain_info",
    "Get current chain info (latest block/slot) from Solscan",
    {},
    async () => {
      try {
        const data = await getChainInfo();
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting chain info: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_block_detail",
    "Get details of a specific block",
    {
      block: z.union([z.string(), z.number()]),
    },
    async ({ block }) => {
      try {
        const data = await getBlockDetail(block);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting block detail: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );

  
  server.tool(
    "get_block_transactions",
    "Get transactions in a specific block",
    {
      block: z.union([z.string(), z.number()]),
    },
    async ({ block }) => {
      try {
        const data = await getBlockTransactions(block);
        const result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
        return result as any;
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting block transactions: ${err.message}`,
            },
          ],
          isError: true,
        } as any;
      }
    }
  );
}
