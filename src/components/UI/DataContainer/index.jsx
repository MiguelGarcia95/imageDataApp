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


  render() {
    return (
      <section className='data_container' >
        {this.props.dataHasBeenFetched && (
          <React.Fragment>
            <section className="preview_container">
              <section className="preview_grid"></section>
              <section className="preview_image">
                <img className="preview_image_resized" src={this.props.preview} />
              </section>
            </section>
            <section className="labels">
              {/* <WebLabels labels={this.props.imageWebLabels} />
              <Labels labels={this.props.imageLabels} /> */}
            </section>
            <section className="safe_search">
              {/* <SafeSearch safeSearch={this.props.imageSafeSearch} /> */}
            </section>
            <section className="properties">
              {/* <Properties properties={this.props.imageProperties} /> */}
            </section>
            <section className="objects">
              {/* <Objects objects={this.props.imageObjects} /> */}
            </section>
            <section className="text">
              {/* <Text text={this.props.imageText} /> */}
            </section>
            <section className="images">
              {/* <SimilarImages images={this.props.imageWebLabels} /> */}
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