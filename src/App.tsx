import { Component, useState } from "react";
import Table from "./Table";
import Form from "./Form";
import type { Trade } from "./types";

export const EditTrade = () => {
  const initialFormStateForTradeLogBeingEdited = {
    id: -1,
    symbol: "",
    orderDate: new Date(),
    transactionType: "",
  };

  const [tradeLogBeingEdited, setTradeLogBeingEdited] = useState(
    initialFormStateForTradeLogBeingEdited
  );

  const editRow = (trade: Trade) => {
    setTradeLogBeingEdited(trade);
  };
};

class App extends Component {
  state = {
    loggedTrades: [] as Trade[],
  };

  removeLoggedTrade = (index: number) => {
    const { loggedTrades } = this.state;
    this.setState({
      loggedTrades: loggedTrades.filter((loggedTrade: Trade, i: number) => {
        return i !== index;
      }),
    });
  };

  handleAdd = (loggedTrade: Trade) => {
    this.setState({ loggedTrades: [...this.state.loggedTrades, loggedTrade] });
  };

  render() {
    const { loggedTrades } = this.state;

    return (
      <div className="container">
        <Table
          loggedTrades={loggedTrades}
          removeLoggedTrade={this.removeLoggedTrade}
          editTrade={EditTrade}
        />
        <Form handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
