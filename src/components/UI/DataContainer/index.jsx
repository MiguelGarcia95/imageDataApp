import React, { Component } from 'react'
import {connect} from 'react-redux';

import WebLabels from '../Data/WebLabels';
import SimilarImages from '../Data/SimilarImages';
import Labels from '../Data/Labels';
import Objects from '../Data/Objects';
import Text from '../Data/Text';
import Properties from '../Data/Properties';
import SafeSearch from '../Data/SafeSearch';
import './style.css';

class DataContainer extends Component {
  componentDidUpdate() {
    if (this.props.dataHasBeenFetched) {
      let image = document.querySelector('#preview_image');
      this.resizePreviewImage(image.naturalWidth, image.naturalHeight)
    }
  }

  resizePreviewImage = (width, height) => {
    let image = document.querySelector('.preview_image_resized');
    let imageGrid = document.querySelector('.preview_grid');
    const maxHeight = 400;
    if (width > height) {
      this.updateDomStyle(image, '400px', `${400*height/width}px`);
      this.updateDomStyle(imageGrid, '400px', `${400*height/width}px`);
    } else {
      this.updateDomStyle(image, `${400*width/height}px`, '400px', `${200 - ((400*width/height)/2)}px`);
      this.updateDomStyle(imageGrid, `${400*width/height}px`, '400px', `${200 - ((400*width/height)/2)}px`);
    }
  }

  updateDomStyle = (item, width, height, margin) => {
    item.style.width = width;
    item.style.height = height;
    if (margin) {
      item.style.marginLeft = margin;
    }
  }

  setMargin = view => {
    const {imageWebLabels, imageLabels, imageSafeSearch, imageProperties, imageObjects, imageText } = this.props;
    switch (view) {
      case 'imageText':
        if (imageText && !imageWebLabels && !imageLabels && !imageSafeSearch && !imageProperties && !imageObjects) {
          return 'marginLeft';
        } else {
          return '';
        }
      case 'imageObjects':
        if (imageObjects && !imageWebLabels && !imageLabels && !imageSafeSearch && !imageProperties) {
          return 'marginLeft';
        } else {
          return '';
        }
      case 'imageProperties':
        if (imageProperties && !imageWebLabels && !imageLabels && !imageSafeSearch) {
          return 'marginLeft';
        } else {
          return '';
        }
      case 'imageSafeSearch':
        if (imageSafeSearch && !imageWebLabels && !imageLabels) {
          return 'marginLeft';
        } else {
          return '';
        }
      case 'imageLabels':
        if (imageLabels && !imageWebLabels) {
          return 'marginLeft';
        } else {
          return '';
        }
      case 'imageWebLabels':
        if (imageWebLabels) {
          return 'marginLeft';
        } else {
          return '';
        }
      default:
        break;
    }
  }


  render() {
    const {
      preview, dataHasBeenFetched, imageWebLabels, imageLabels, imageSafeSearch, imageProperties, imageObjects, imageText
    } = this.props;
    return (
      <section className='data_container' >
        {dataHasBeenFetched && (
          <React.Fragment>
            <section className="preview_container">
              <section className="preview_grid"></section>
              <section className="preview_image">
                <img className="preview_image_resized" src={preview} />
              </section>
            </section>
            <section className="data">
              <section className={`web-labels ${this.setMargin('imageWebLabels')}`}>
                <WebLabels labels={imageWebLabels} />
              </section>
              <section className={`labels ${this.setMargin('imageLabels')}`}>
                <Labels labels={imageLabels} /> 
              </section>
              <section className={`safe_search ${this.setMargin('imageSafeSearch')}`}>
                <SafeSearch safeSearch={imageSafeSearch} />
              </section>
              <section className={`properties ${this.setMargin('imageProperties')}`}>
                <Properties properties={imageProperties} />
              </section>
              <section className={`objects ${this.setMargin('imageObjects')}`}>
                <Objects objects={imageObjects} />
              </section>
              <section className={`text ${this.setMargin('imageText')}`}>
                <Text text={imageText} />
              </section>
              <section className={`images`}>
                <SimilarImages images={imageWebLabels} />
              </section>
            </section>
          </React.Fragment>
        )}
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    imageLabels: state.image.imageLabels,
    imageWebLabels: state.image.imageWebLabels,
    imageObjects: state.image.imageObjects,
    imageText: state.image.imageText,
    imageProperties: state.image.imageProperties,
    imageSafeSearch: state.image.imageSafeSearch
  }
}

export default connect(mapStateToProps)(DataContainer);