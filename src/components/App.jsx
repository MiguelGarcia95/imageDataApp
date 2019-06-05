import React, {Component} from 'react';
import {connect} from 'react-redux';
import {displayError, clearError} from '../store/actions/error';
import Preview from './UI/Preview';
import DropZone from './UI/DropZone';
import MenuHeader from './UI/MenuHeader';
import Loading from './UI/Loading';
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

  getFileType = fileName => {
    return fileName.substring(fileName.lastIndexOf('.')+1, fileName.length) || fileName
  }

  isFileImage = base64 => {
    if (base64.substring(0,10) === 'data:image') {
      return true;
    } else {
      return false;
    }
  }

  toggleOnImage = () => this.setState({fullscreen: true});
  toggleOffImage = () => this.setState({fullscreen: false});
  
  onImageDrop = file => {
    const image = file[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      if (this.isFileImage(reader.result)) {
        this.setState({
          image: {
            base64: reader.result,
            preview: URL.createObjectURL(file),
            type: this.getFileType(file.name)
          }
        })
      } else {
        this.props.displayError('File submitted is not an image.');
      }
    }
  }

  displayError = () => {
    setTimeout(() => {
      this.props.clearError();
    }, 1000000);
    return (
      <section className="error">
        <p>{this.props.error}</p>

      </section>
    )
  }

  render() {
    const {preview} = this.state.image;
    const {isLoading, error, imageLabels, imageWebLabels} = this.props;
    return (
      <section className="app">

        {isLoading && <Loading /> }

        {error && this.displayError()}

        <MenuHeader 
          preview={preview}
          image={this.state.image}
        />

        <DropZone onImageDrop={this.onImageDrop} preview={preview} />

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
    imageObjects: state.image.imageObjects,
    imageText: state.image.imageText,
    imageProperties: state.image.imageProperties,
    imageSafeSearch: state.image.imageSafeSearch,
    isLoading: state.ui.isLoading,
    error: state.error.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayError: error => dispatch(displayError(error)),
    clearError: () => dispatch(clearError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
