import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
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
    const {preview} = this.state.image;
    const {isLoading, imageLabels, imageWebLabels} = this.props;
    const dropZoneOpened = preview ? true : false ;
    return (
      <section className="app">

        {isLoading && <section>...Loading</section> }

        {/* <MenuHeader 
          dropZoneOpened={dropZoneOpened} 
          onImageDrop={this.onImageDrop} 
          preview={preview}
          image={this.state.image}
        /> */}

        <section className="dropzone">
          <section className="drop_grid"></section>
          <section className="drop_content">
            <section className="center_image">
              <FontAwesomeIcon 
                icon={faPlus} size="2x" color='white'
                className='icon plus' 
              />
              <FontAwesomeIcon 
                icon={faImage} size="6x" color='white'
                className='icon image' 
              />
            </section>
            <section className="content">
              <p>Drop Image Here</p>
              <small>Or Click To Open FIle</small>
            </section>
          </section>
        </section>

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
  }
}

export default connect(mapStateToProps)(App);
