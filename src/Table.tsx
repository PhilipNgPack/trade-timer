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

const TableBody = (props) => {
  const rows = props.tradeLogData.map((row, index) => {
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
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { tradeLogData, removeTradeLog } = props;

  return (
    <table>
      <TableHeader />
      <TableBody tradeLogData={tradeLogData} removeTradeLog={removeTradeLog} />
    </table>
  );
};

export default Table;
