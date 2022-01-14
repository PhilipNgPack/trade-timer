import React, { Component, useState } from "react";
import Table from "./Table";
import Form from "./Form";

export const EditTrade = () => {
  const initialFormState = {
    id: null,
    symbol: "",
    orderDate: "",
    transactionType: "",
  };
  // initial form state for currentlyEdit
  const [tradeLogBeingEdited, setTradeLogBeingEdited] =
    useState(initialFormState);

  const editRow = (trade: any) => {
    console.log("Hello world!");
    setTradeLogBeingEdited({
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
