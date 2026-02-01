import { fetchWithHeaders } from "../utils.js";


export async function getTokenMeta(tokenAddress: string): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/token/meta?address=${tokenAddress}`;
    console.error(`Fetching Token Meta API: ${apiUrl}`);
    const apiData = await fetchWithHeaders(apiUrl);
    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for token meta: ${tokenAddress}`);
    }
    return apiData;
  } catch (error) {
    console.error("Token Meta error:", error);
    throw error;
  }
}


export async function getTokenHolders(tokenAddress: string, page: number = 1, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/token/holders?address=${tokenAddress}&page=${page}&page_size=${limit}`;
    console.error(`Fetching Token Holders API: ${apiUrl}`);
    const apiData = await fetchWithHeaders(apiUrl);
    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for token holders: ${tokenAddress}`);
    }
    return apiData;
  } catch (error) {
    console.error("Token Holders error:", error);
    throw error;
  }
}


export async function getTrendingTokens(limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/token/trending?limit=${limit}`;
    console.error(`Fetching Trending Tokens API: ${apiUrl}`);
    const apiData = await fetchWithHeaders(apiUrl);
    if (apiData.success === false) {
      throw new Error(`API returned unsuccessful response for trending tokens`);
    }
    return apiData;
  } catch (error) {
    console.error("Trending Tokens error:", error);
    throw error;
  }
}


export async function getTokenPrice(tokenAddress: string): Promise<any> {
    
    return getTokenMeta(tokenAddress);
}


export async function getTokenTransfers(tokenAddress: string, page: number = 1, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/token/transfer?address=${tokenAddress}&page=${page}&page_size=${limit}`;
    console.error(`Fetching Token Transfers API: ${apiUrl}`);
    const apiData = await fetchWithHeaders(apiUrl);
    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for token transfers: ${tokenAddress}`);
    }
    return apiData;
  } catch (error) {
    console.error("Token Transfers error:", error);
    throw error;
  }
}


export async function getTokenList(sortBy: string = "market_cap", direction: string = "desc", page: number = 1, limit: number = 10): Promise<any> {
    try {
      const apiUrl = `https://api-v2.solscan.io/v2/token/leaderboard?sort_by=${sortBy}&sort_order=${direction}&page=${page}&page_size=${limit}`;
      console.error(`Fetching Token List API: ${apiUrl}`);
      const apiData = await fetchWithHeaders(apiUrl);
      if (!apiData.success) { 
         throw new Error(`API returned unsuccessful response for token list`);
      }
      return apiData;
    } catch (error) {
      console.error("Token List error:", error);
      throw error;
    }
}

