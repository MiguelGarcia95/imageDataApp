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
      // using this data, resize the image in preview_image_resized to fit the 
      // 400 height and 400 width container
      // if width bigger than height, then width === 400, and height is proportional to it
      // console.log('height', image.naturalHeight);
      // console.log('width', image.naturalWidth);
      this.resizePreviewImage(image.naturalWidth, image.naturalHeight)
    }
  }

  resizePreviewImage = (width, height) => {
    let image = document.querySelector('.preview_image_resized');
    let imageGrid = document.querySelector('.preview_grid');
    if (width > height) {
      image.style.width = '400px';
      image.style.height = `${400*height/width}px`;
      imageGrid.style.width = '400px';
      imageGrid.style.height = `${400*height/width}px`;
    } else {
      image.style.height = '400px';
      image.style.width = `${400*width/height}px`;
      image.style.marginLeft = `${200 - ((400*width/height)/2)}px`;
      imageGrid.style.height = '400px';
      imageGrid.style.width = `${400*width/height}px`;
      imageGrid.style.marginLeft = `${200 - ((400*width/height)/2)}px`;
    }
  }
  render() {
    return (
      <section className='data_container' >
        <section className="preview_container">
          <section className="preview_grid"></section>
          <section className="preview_image">
            <img className="preview_image_resized" src={this.props.preview} />
          </section>
        </section>


        {/* <WebLabels labels={this.props.imageWebLabels} />
        <SimilarImages images={this.props.imageWebLabels} />

        <Labels labels={this.props.imageLabels} />

        <Objects objects={this.props.imageObjects} />

        <Text text={this.props.imageText} />

        <Properties properties={this.props.imageProperties} />

        <SafeSearch safeSearch={this.props.imageSafeSearch} /> */}


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