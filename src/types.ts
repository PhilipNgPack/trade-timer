export interface Row {
  symbol: string;
  orderDate: Date;
  transactionType: string;
}

export type TransactionType = "bought" | "sold";
