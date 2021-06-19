import React from 'react';
import Counts from './counts';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 , previousCounts: [] };
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1});
  }

  reset(event) {
    event.preventDefault();
    const previousCounts = this.state.previousCounts;
    previousCounts.push(this.state.count);
    this.setState({ count: 0, previousCounts });
  }

  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}>CLICK ME!!!</button>
        <span>{this.state.count}</span>
        <br/>
        <button onClick={this.reset.bind(this)}>reset!</button>
        <Counts previousCounts = {this.state.previousCounts}/>
      </div>
    );
  }
}


export default ClickCounter;