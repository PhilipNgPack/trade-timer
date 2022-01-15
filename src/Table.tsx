import type { Row, Trade } from "./types";
import { EditTrade } from "./App";

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
  editTrade: any;
}

const Table = (props: Props) => {
  const TableBody = (
    <tbody>
      {props.loggedTrades.map((loggedTrade: Trade, index: number) => {
        return (
          <tr key={index}>
            <td>{loggedTrade.symbol}</td>
            <td>{loggedTrade.orderDate}</td>
            <td>{loggedTrade.transactionType}</td>
            <td>
              <button onClick={() => props.editTrade()}>edit</button>
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
