import type { Row, Trade } from "./types";

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
  loggedTrades: Trade[];
  removeLoggedTrade: any;
  editRow: any;
}

const Table = (props: Props) => {
  const TableBody = (
    <tbody>
      {props.loggedTrades.map((row: Row, index: number) => {
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
              <button onClick={() => props.removeLoggedTrade(index)}>
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
