import { fetchWithHeaders } from "../utils.js";
import { SolscanResponse } from "../types.js";

export async function getTransactionDetail(signature: string): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/transaction/detail?tx=${signature}`;
    console.error(`Fetching API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl) as SolscanResponse;

    if (!apiData.success || !apiData.data) {
      throw new Error(`API returned unsuccessful response or missing data for signature: ${signature}`);
    }
    
    return apiData as any;

  } catch (error) {
    console.error("Transaction error:", error);
    throw error;
  }
}
