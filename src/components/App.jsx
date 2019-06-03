import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getImageLabels, getImageWebLabels} from '../store/actions/image.js';
import Preview from './UI/Preview';
import MenuHeader from './UI/MenuHeader';
import './style.css';

class App extends Component {
  state = {
    image: {
      base64: null,
      preview: null,
      type: null,
    },
    fullscreen: false
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

  toggleOnImage = () => this.setState({fullscreen: true});
  toggleOffImage = () => this.setState({fullscreen: false});

  
  onGetImageLabels = () => this.props.getImageLabels(this.props.image);
  onGetImageWebLabels = () => this.props.getImageWebLabels(this.props.image);

  onImageDrop = file => {
    const image = file[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      this.setState({
        image: {
          base64: reader.result,
          preview: URL.createObjectURL(image),
          type: this.getFileType(image.name)
        }
      })
    }
  }

  render() {
    const {preview, type} = this.state.image;
    const dropZoneOpened = preview ? true : false ;
    return (
      <section className="app">

        <MenuHeader 
          dropZoneOpened={dropZoneOpened} 
          onImageDrop={this.onImageDrop} 
          preview={preview}
          onGetImageLabels={this.onGetImageLabels}
          onGetImageWebLabels={this.onGetImageWebLabels}
        />

        <section className="page_content">
          <Preview 
            preview={preview} 
            fullscreen={this.state.fullscreen}
            toggleOnImage={this.toggleOnImage}
            toggleOffImage={this.toggleOffImage}
          />
        </section>


      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageLabels: state.image.imageLabels,
    imageWebLabels: state.image.imageWebLabels,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImageLabels: image => dispatch(getImageLabels(image)),
    getImageWebLabels: image => dispatch(getImageWebLabels(image)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
