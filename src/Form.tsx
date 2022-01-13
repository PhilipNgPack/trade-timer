import React, { Component } from "react";

class Form extends Component<any, any> {
  initialState = {
    symbol: "",
    orderDate: "",
    transactionType: "",
  };

  state = this.initialState;

  handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  // can simplify: if not a buy, must be a sell
  handleBuy = () => {
    this.setState({
      transactionType: "last bought",
    });
  };

  handleSell = () => {
    this.setState({
      transactionType: "last sold",
    });
  };

  submitForm = () => {
    this.props.handleAdd(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { symbol, orderDate, transactionType } = this.state;

    return (
      <form>
        <label htmlFor={"buy"}>buy transaction</label>
        <input
          type={"radio"}
          id={"buy"}
          name={"transactionType"}
          value={"buy"}
          checked={transactionType === "last bought"}
          onChange={this.handleBuy}
        />
        <label htmlFor={"sell"}>sell transaction</label>
        <input
          type={"radio"}
          id={"sell"}
          name={"transactionType"}
          value={"sell"}
          checked={transactionType === "last sold"}
          onChange={this.handleSell}
        />

        <label htmlFor={"symbol"}>symbol</label>
        <input
          type={"text"}
          name={"symbol"}
          id={"symbol"}
          value={symbol}
          onChange={this.handleChange}
        />
        <label htmlFor={"orderDate"}>order date</label>
        <input
          type={"date"}
          name={"orderDate"}
          id={"orderDate"}
          value={orderDate}
          onChange={this.handleChange}
        />
        <input type={"button"} value={"add"} onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
