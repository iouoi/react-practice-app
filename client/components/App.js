//import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from './Child'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillMount(){
  // 	console.log('mounted')
  // }
  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    if (this.state.clicked){
      return(
        <div>
          <button onClick={this.handleClick}>hide em</button>
          <Child/>
          <Child/>
        </div>
      )
    }else {
      return(
        <button onClick={this.handleClick}>show em</button>
        )
    }
  }

}

export default App;