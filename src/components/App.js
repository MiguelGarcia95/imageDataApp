import React, {Component} from 'react';
import {connect} from 'react-redux';
import {testFunctions} from '../store/actions/test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 onClick={this.props.testFunctions} >Hey</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    testFunctions: () => dispatch(testFunctions())
  }
}

export default connect(null, mapDispatchToProps)(App);
