export type TransactionType = "bought" | "sold";

export interface Row {
  symbol: string;
  orderDate: Date;
  transactionType: TransactionType;
}

export interface Trade {
  id: number;
  symbol: string;
  orderDate: Date;
  transactionType: TransactionType;
}
