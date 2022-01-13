import React, { Component, useState } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    tradeLogs: [],
  };

  removeTradeLog = (index: number) => {
    const { tradeLogs } = this.state;

    this.setState({
      tradeLogs: tradeLogs.filter((tradeLog, i: number) => {
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
        <Table tradeLogData={tradeLogs} removeTradeLog={this.removeTradeLog} />
        <Form handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
