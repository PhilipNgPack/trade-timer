import React, { Component } from "react";
import type { TransactionType, Trade } from "./types";

// any, any --> Props, State

interface Props {
  handleAdd: any;
}

class Form extends Component<Props> {
  emptyFormData = {
    symbol: "",
    orderDate: "",
    transactionType: "bought",
  };

  state = this.emptyFormData;

  handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      transactionType: value == "buy" ? "bought" : "sold",
    });
  };

  submitForm = () => {
    this.props.handleAdd(this.state);
    this.setState(this.emptyFormData);
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
            checked={this.state.transactionType === "bought"}
            onChange={this.handleChange}
          />
          <label htmlFor={"sell"}>sell transaction</label>
          <input
            type={"radio"}
            id={"sell"}
            name={"transactionType"}
            value={"sell"}
            checked={this.state.transactionType === "sold"}
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
