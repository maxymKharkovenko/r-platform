import React, { Component } from "react";
import "./GameComponents.scss";
import data from "../../data/dataSet";

interface dataItem {
  ua: string;
  used: boolean;
}

interface State {
  value: string;
  data: dataItem[];
}

interface FieldProps {
  nameClub: string;
}

class GameComponent extends Component<FieldProps, State> {
  constructor(props: FieldProps) {
    super(props);
    this.state = {
      data,
      value: "",
    };
  }

  nextWord = (e: any) => {
    const dataSet = this.state.data;
    const item = dataSet[Math.floor(Math.random() * dataSet.length)];

    if (!item.used) {
      item.used = true;
      this.setState({
        data: dataSet,
        value: item.ua,
      });
    } else {
      alert("all words used");
    }
    console.log("next!");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <button
              className="custom-btn-red"
              type="submit"
              onClick={this.nextWord}
            >
              miss
            </button>
          </div>
          <div className="col-sm">{this.state.value}</div>
          <div className="col-sm">
            <button
              className="custom-btn-green"
              type="submit"
              onClick={this.nextWord}
            >
              miss
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameComponent;
