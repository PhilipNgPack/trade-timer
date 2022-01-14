import type { Row } from "./types";

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

interface Props {
  tradeLogData: any;
  removeTradeLog: any;
  editRow: any;
}

const Table = (props: Props) => {
  const TableBody = (
    <tbody>
      {props.tradeLogData.map((row: Row, index: number) => {
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
              <button onClick={() => props.removeTradeLog(index)}>
                delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <table>
      <TableHeader />
    </table>
  );
};

export default Table;
