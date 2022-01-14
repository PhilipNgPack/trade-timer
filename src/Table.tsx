import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>symbol</th>
        <th>order date</th>
        <th>transaction type</th>
      </tr>
    </thead>
  );
};

const TableBody = (props: {
  tradeLogData: any[];
  removeTradeLog: (arg0: any) => void;
  editRow: (arg0: any, arg1: any, arg3: any) => void;
}) => {
  const rows = props.tradeLogData.map(
    (
      row: {
        symbol: string;
        orderDate: Date;
        transactionType: string;
      },
      index: number
    ) => {
      return (
        <tr key={index}>
          <td>{row.symbol}</td>
          <td>{row.orderDate}</td>
          <td>{row.transactionType}</td>
          <td>
            <button
              onClick={() =>
                props.editRow(row.symbol, row.orderDate, row.transactionType)
              }
            >
              edit
            </button>
            <button onClick={() => props.removeTradeLog(index)}>delete</button>
          </td>
        </tr>
      );
    }
  );

  return <tbody>{rows}</tbody>;
};

const Table = (props: {
  tradeLogData: any;
  removeTradeLog: any;
  editRow: any;
}) => {
  const { tradeLogData, removeTradeLog, editRow } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        tradeLogData={tradeLogData}
        removeTradeLog={removeTradeLog}
        editRow={editRow}
      />
    </table>
  );
};

export default Table;
