import React, { Component } from "react";
import type { TransactionType } from "./types";

// any, any --> Props, State
class Form extends Component<any, any> {
  initialState = {
    symbol: "",
    orderDate: "",
    TransactionType: "buy",
  };

  state = this.initialState;

  handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      TransactionType: [value == "buy" ? "bought" : "sold"],
    });
  };

  submitForm = () => {
    this.props.handleAdd(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { symbol, orderDate, TransactionType } = this.state;

    return (
      <form>
        <div className="transactionType">
          <label htmlFor={"buy"}>buy transaction</label>
          <input
            type={"radio"}
            id={"buy"}
            name={"transactionType"}
            value={"buy"}
            checked={TransactionType === "bought"}
            onChange={this.handleChange}
          />
          <label htmlFor={"sell"}>sell transaction</label>
          <input
            type={"radio"}
            id={"sell"}
            name={"transactionType"}
            value={"sell"}
            checked={TransactionType === "sold"}
            onChange={this.handleChange}
          />
        </div>

        <div className="symbol">
          <label htmlFor={"symbol"}>symbol</label>
          <input
            type={"text"}
            name={"symbol"}
            id={"symbol"}
            value={symbol}
            onChange={this.handleChange}
          />
        </div>

        <div className="orderDate">
          <label htmlFor={"orderDate"}>order date</label>
          <input
            type={"date"}
            name={"orderDate"}
            id={"orderDate"}
            value={orderDate}
            onChange={this.handleChange}
          />
        </div>
        <input type={"button"} value={"add"} onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
