import { fetchWithHeaders } from "../utils.js";

export async function getAccountDetail(address: string): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account?address=${address}&view_as=account`;
    console.error(`Fetching Account API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account error:", error);
    throw error;
  }
}

export async function getAccountTransactions(address: string, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account/transaction?address=${address}&page_size=${limit}&sort=desc`;
    console.error(`Fetching Account Transactions API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address transactions: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account Transactions error:", error);
    throw error;
  }
}

export async function getAccountTransfers(address: string, limit: number = 10, removeSpam: boolean = true, excludeAmountZero: boolean = true): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account/transfer?address=${address}&page=1&page_size=${limit}&remove_spam=${removeSpam}&exclude_amount_zero=${excludeAmountZero}`;
    console.error(`Fetching Account Transfers API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address transfers: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account Transfers error:", error);
    throw error;
  }
}

export async function getAccountDefiActivities(address: string, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account/activity/dextrading?address=${address}&page=1&page_size=${limit}`;
    console.error(`Fetching Account DeFi Activities API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address defi activities: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account DeFi Activities error:", error);
    throw error;
  }
}

export async function getAccountNftActivities(address: string, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account/activity/nft?address=${address}&page=1&page_size=${limit}`;
    console.error(`Fetching Account NFT Activities API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address nft activities: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account NFT Activities error:", error);
    throw error;
  }
}

export async function getAccountTokens(address: string, page: number = 1, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account/positions?address=${address}&page=${page}&page_size=${limit}&sort_by=position_value&sort_order=desc`;
    console.error(`Fetching Account Positions API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address positions: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account Tokens/Positions error:", error);
    throw error;
  }
}

export async function getAccountNfts(address: string, page: number = 1, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account/tokenaccounts?address=${address}&page=${page}&page_size=${limit}&type=nft&hide_zero=true`;
    console.error(`Fetching Account NFTs API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address nfts: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account NFTs error:", error);
    throw error;
  }
}

export async function getAccountStakeAccounts(address: string, page: number = 1, limit: number = 10): Promise<any> {
  try {
    const apiUrl = `https://api-v2.solscan.io/v2/account/stake?address=${address}&limit=${limit}&page=${page}`;
    console.error(`Fetching Account Stake Accounts API: ${apiUrl}`);

    const apiData = await fetchWithHeaders(apiUrl);

    if (!apiData.success) {
      throw new Error(`API returned unsuccessful response for address stake accounts: ${address}`);
    }

    return apiData;

  } catch (error) {
    console.error("Account Stake error:", error);
    throw error;
  }
}

