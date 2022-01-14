import React, { Component, useState } from "react";
import Table from "./Table";
import Form from "./Form";

export const EditTrade = () => {
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    symbol: "",
    orderDate: "",
    transactionType: "",
  };
  const [currentTradeLog, setCurrentTradeLog] = useState(initialFormState);

  const editRow = (trade: any) => {
    setEditing(true);
    setCurrentTradeLog({
      id: trade.id,
      symbol: trade.symbol,
      orderDate: trade.orderDate,
      transactionType: trade.transactionType,
    });
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
