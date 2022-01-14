import React, { Component } from "react";
import type { TransactionType } from "./types";

// any, any --> Props, State

interface Props {
  (symbol: string, orderDate: string): "";
}

class Form extends Component<any, any> {
  transactionType: TransactionType = "bought";

  initialState = {
    symbol: "",
    orderDate: "",
  };

  state = this.initialState;

  handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,

      // this.transactionType: value == "buy" ? "bought" : "sold"
    });
  };

  submitForm = () => {
    this.props.handleAdd(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { symbol, orderDate } = this.state;

    return (
      <form>
        <div className="transactionType">
          <label htmlFor={"buy"}>buy transaction</label>
          <input
            type={"radio"}
            id={"buy"}
            name={"transactionType"}
            value={"buy"}
            checked={this.transactionType === "bought"}
            onChange={this.handleChange}
          />
          <label htmlFor={"sell"}>sell transaction</label>
          <input
            type={"radio"}
            id={"sell"}
            name={"transactionType"}
            value={"sell"}
            checked={this.transactionType === "sold"}
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
