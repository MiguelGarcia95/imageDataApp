import React, {Component} from 'react';
import {connect} from 'react-redux';
import {testFunctions} from '../store/actions/test';
import './App.css';

class App extends Component {
  state = {
    image: {
      base64: null,
      preview: null
    }
  }

  handleImageSelect = event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        image: {
          base64: reader.result,
          preview: URL.createObjectURL(file),
        }
      })
    }
  }

  onImageUpload = () => {
    this.props.testFunctions(this.state.image);
  }

  render() {
    const {preview} = this.state.image;
    return (
      <div className="App">
        <h1 onClick={this.onImageUpload} >Hey</h1>

        <section className="text">
          <input type='file' onChange={this.handleImageSelect} />
        </section>

        {preview && <img src={preview} />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    testFunctions: image => dispatch(testFunctions(image))
  }
}

export default connect(null, mapDispatchToProps)(App);
