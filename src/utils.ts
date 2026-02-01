export async function fetchWithHeaders(url: string): Promise<any> {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Origin': 'https://solscan.io',
      'Referer': 'https://solscan.io/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });

  if (!response.ok) {
    throw new Error(`API Request Failed: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}
