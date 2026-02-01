export interface TransactionInfo {
  signature: string;
  status: string; 
  slot: string;
  block: string;
  fee: string;
  from: string;
  to: string;
  timestamp: string;
  compute_units: string;
  recent_block_hash: string;
  version: string;
  instructions: string[];
  logs: string;
}


export interface SolscanResponse {
  success: boolean;
  data: {
    trans_id: string;
    block_id: number;
    trans_time: number;
    fee: number;
    signer: string[];
    raw_tx: {
      version: string;
      transaction: {
        message: {
          recentBlockhash: string;
          accountKeys: { pubkey: string; signer: boolean; writable: boolean }[];
        };
      };
      meta: {
        err: any;
        computeUnitsConsumed: number;
        logMessages: string[];
      };
    };
  };
}
