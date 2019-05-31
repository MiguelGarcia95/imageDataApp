import React, {Component} from 'react';
import {connect} from 'react-redux';
import {testFunctions} from '../store/actions/test';
import './App.css';
import DragNDrop from './UI/DragNDrop';

class App extends Component {
  state = {
    image: {
      base64: null,
      preview: null,
      type: null,
    },
    files: [
      'nice.pdf',
      'verycool.jpg',
      'amazing.png',
      'goodstuff.mp3',
      'thankyou.doc'
      ]
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
          type: this.getFileType(file.name)
        }
      })
    }
  }

  getFileType = fileName => {
    return fileName.substring(fileName.lastIndexOf('.')+1, fileName.length) || fileName
  }

  onImageUpload = () => {
    this.props.testFunctions(this.state.image);
  }

  handleDrop = (files) => {
    let fileList = this.state.files
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    this.setState({files: fileList})
  }

  render() {
    const {preview, type} = this.state.image;
    console.log(type);
    return (
      <div className="App">
        <h1 onClick={this.onImageUpload} >Hey</h1>
        <section style={{width: '300px', height: '300px'}}>
          <DragNDrop>
          <div style={{height: 300, width: 250}}>
            {this.state.files.map((file) =>
              <div>{file}</div>
            )}
          </div>
          </DragNDrop>
        </section>

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
