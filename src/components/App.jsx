import React, {Component} from 'react';
import {connect} from 'react-redux';
import {displayError, clearError} from '../store/actions/error';
import {resetImage} from '../store/actions/image';
import Preview from './UI/Preview';
import DropZone from './UI/DropZone';
import MenuHeader from './UI/MenuHeader';
import DataContainer from './UI/DataContainer';
import Loading from './UI/Loading';
import Error from './UI/Error';
import './style.css';

class App extends Component {
  state = {
    image: {
      base64: null,
      preview: null,
      type: null,
      width: null
    },
    fullscreen: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoading !== this.props.isLoading && this.hasDataBeenFetched()) {
      this.scrollDown();
    }
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
    this.props.clearError();
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      if (this.isFileImage(reader.result)) {
        this.setState({
          image: {
            base64: reader.result,
            preview: URL.createObjectURL(image),
            type: this.getFileType(image.name)
          }
        })
      } else {
        this.props.displayError({message: 'File submitted is not an image.'});
      }
    }
  }

  resetImage = () => {
    this.setState({
      image: {
        base64: null,
        preview: null,
        type: null,
      }
    })
    this.props.resetImage();
  }

  hasDataBeenFetched = () => {
    const {      
      imageLabelsSuccess, imageWebLabelsSuccess, imageObjectsSuccess, 
      imageTextSuccess, imagePropertiesSuccess, imageSafeSearchSuccess
    } = this.props;

    if (imageLabelsSuccess || imageWebLabelsSuccess || imageObjectsSuccess || imageTextSuccess || imagePropertiesSuccess || imageSafeSearchSuccess) {
      return true;
    } 
    return false;
  }

  scrollDown = () => {
    // window.scrollTo(0, this.dataContainer.offsetTop)
    this.dataContainer.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const {preview} = this.state.image;
    const {isLoading, error} = this.props;
    const dataHasBeenFetched = this.hasDataBeenFetched();
    return (
      <section className="app">

        {isLoading && <Loading /> }
        {error && <Error error={error} onErrorClick={this.props.clearError} />}

        <section className={`title ${preview ? 'closed' : ''}`}>
        {/* <section className={`title`} onClick={this.scrollDown} > */}
          <h1>Upload Image to Analyze.</h1> 
        </section>

        <MenuHeader preview={preview} image={this.state.image} resetImage={this.resetImage} />
        <DropZone onImageDrop={this.onImageDrop} preview={preview} />
        <Preview 
          preview={preview} 
          fullscreen={this.state.fullscreen}
          toggleOnImage={this.toggleOnImage}
          toggleOffImage={this.toggleOffImage}
          resetImage={this.resetImage}
          dataHasBeenFetched={dataHasBeenFetched}      
        />

        {/* <DataContainer  /> */}
        <section className='data-container-ref' ref={el => this.dataContainer = el}  ></section>
        <DataContainer
          preview={preview}   
          dataHasBeenFetched={dataHasBeenFetched}      
        />

      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    error: state.error.error,
    imageLabelsSuccess: state.image.imageLabelsSuccess,
    imageWebLabelsSuccess: state.image.imageWebLabelsSuccess,
    imageObjectsSuccess: state.image.imageObjectsSuccess,
    imageTextSuccess: state.image.imageTextSuccess,
    imagePropertiesSuccess: state.image.imagePropertiesSuccess,
    imageSafeSearchSuccess: state.image.imageSafeSearchSuccess,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayError: error => dispatch(displayError(error)),
    clearError: () => dispatch(clearError()),
    resetImage: () => dispatch(resetImage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
