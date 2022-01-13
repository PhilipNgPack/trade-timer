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
}) => {
  const rows = props.tradeLogData.map(
    (
      row: {
        symbol:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined;
        orderDate:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined;
        transactionType:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined;
      },
      index: React.Key | null | undefined
    ) => {
      return (
        <tr key={index}>
          <td>{row.symbol}</td>
          <td>{row.orderDate}</td>
          <td>{row.transactionType}</td>
          <td>
            <button onClick={() => props.removeTradeLog(index)}>delete</button>
          </td>
        </tr>
      );
    }
  );

  return <tbody>{rows}</tbody>;
};

const Table = (props: { tradeLogData: any; removeTradeLog: any }) => {
  const { tradeLogData, removeTradeLog } = props;

  return (
    <table>
      <TableHeader />
      <TableBody tradeLogData={tradeLogData} removeTradeLog={removeTradeLog} />
    </table>
  );
};

export default Table;
