import React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1});
  }

  reset(event) {
    event.preventDefault();
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}>CLICK ME!!!</button>
        <span>{this.state.count}</span>
        <br/>
        <button onClick={this.reset.bind(this)}>reset!</button>
      </div>
    );
  }
}


export default ClickCounter;