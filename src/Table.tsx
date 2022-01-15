import type { Trade } from "./types";

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
  removeLoggedTrade: (index: number) => void;
  editTrade: () => void;
}

const Table = (props: Props) => {
  return (
    <table>
      <TableHeader />
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
    </table>
  );
};

export default Table;
