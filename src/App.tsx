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
    console.log("Hello world!");
    setTradeLogBeingEdited(trade);
  };
};

class App extends Component {
  state = {
    tradeLogs: [],
  };

  removeTradeLog = (index: number) => {
    const { tradeLogs } = this.state;

    this.setState({
      tradeLogs: tradeLogs.filter((tradeLog: any, i: number) => {
        return i !== index;
      }),
    });
  };

  // updateRow = (tradeLog: any) => {
  //   setEditing(false);
  // };

  handleAdd = (tradeLog: any) => {
    this.setState({ tradeLogs: [...this.state.tradeLogs, tradeLog] });
  };

  render() {
    const { tradeLogs } = this.state;

    return (
      <div className="container">
        <Table
          tradeLogData={tradeLogs}
          removeTradeLog={this.removeTradeLog}
          editRow={EditTrade}
        />
        <Form handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
