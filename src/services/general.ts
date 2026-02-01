import { fetchWithHeaders } from "../utils.js";

export async function getChainInfo(): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/common/chaininfo`;
    console.error(`Fetching Chain Info API: ${apiUrl}`);
    const apiData = await fetchWithHeaders(apiUrl);
    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for chain info`);
    }
    return apiData;
  } catch (error) {
    console.error("Chain Info error:", error);
    throw error;
  }
}


export async function getBlockDetail(block: string | number): Promise<any> {
    try {
        const apiUrl = `https://api-v2.solscan.io/v2/block/detail?block=${block}`;
        console.error(`Fetching Block Detail API: ${apiUrl}`);
        const apiData = await fetchWithHeaders(apiUrl);
        if (!apiData.success) {
            throw new Error(`API returned unsuccessful response for block detail: ${block}`);
        }
        return apiData;
    } catch (error) {
        console.error("Block Detail error:", error);
        throw error;
    }
}




export async function getBlockTransactions(block: string | number): Promise<any> {
    try {
        const apiUrl = `https://api-v2.solscan.io/v2/block/transactions?block=${block}`;
        console.error(`Fetching Block Transactions API: ${apiUrl}`);
        const apiData = await fetchWithHeaders(apiUrl);
        
        if (apiData.success === false) {
             throw new Error(`API returned unsuccessful response for block transactions: ${block}`);
        }
        return apiData;
    } catch (error) {
        console.error("Block Transactions error:", error);
        throw error;
    }
}
