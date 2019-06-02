import React, {Component} from 'react';
import {connect} from 'react-redux';
import {testFunctions} from '../store/actions/test';
import DropZone from './UI/DropZone';
import Preview from './UI/Preview';
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

  onImageUpload = () => {
    this.props.testFunctions(this.state.image);
  }

  toggleOnImage = () => this.setState({fullscreen: true});
  toggleOffImage = () => this.setState({fullscreen: false});

  onImageDrop = file => {
    const image = file[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      console.log(reader)
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
    const {preview, type, fullscreen} = this.state.image;
    const dropZoneOpened = preview ? true : false ;
    return (
      <section className="app">
        {/* <h1 onClick={this.onImageUpload} >Hey</h1> */}

        <section className={`drop_zone_container ${dropZoneOpened ? 'filled' : '' }`}>
          <DropZone onImageDrop={this.onImageDrop} isEmpty={dropZoneOpened ? false : true} />
          {preview && (
            <section className="button_container">
              <section className="buttons">
                <section className="button">
                  <p>Web Detection</p>
                </section>
                <section className="button">
                  <p>Label Detection</p>
                </section>
                <section className="button">
                  <p>Label Detection</p>
                </section>
                <section className="button">
                  <p>Label Detection</p>
                </section>
                <section className="button">
                  <p>Label Detection</p>
                </section>
                <section className="button">
                  <p>Label Detection</p>
                </section>
              </section>
            </section>
          ) }
        </section>

        <section className="page_content">
          <Preview 
            preview={preview} 
            fullscreen={fullscreen}
            toggleOnImage={this.toggleOnImage}
            toggleOffImage={this.toggleOffImage}
          />
        </section>


      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    testFunctions: image => dispatch(testFunctions(image))
  }
}

export default connect(null, mapDispatchToProps)(App);
