import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    if (this.state.value === 1) this.setState({ value: this.state.value - 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
