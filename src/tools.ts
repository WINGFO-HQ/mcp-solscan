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
}
