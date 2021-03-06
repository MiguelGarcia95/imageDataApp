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
    let previewContainer = document.querySelector('.preview_container');
    let maxWH = previewContainer.clientHeight;
    let halfWH = maxWH/2;
    if (width > height) {
      this.updateDomStyle(image, `${maxWH}px`, `${maxWH*height/width}px`);
      this.updateDomStyle(imageGrid, `${maxWH}px`, `${maxWH*height/width}px`);
    } else {
      this.updateDomStyle(image, `${maxWH*width/height}px`, `${maxWH}px`, `${halfWH - ((maxWH*width/height)/2)}px`);
      this.updateDomStyle(imageGrid, `${maxWH*width/height}px`, `${maxWH}px`, `${halfWH - ((maxWH*width/height)/2)}px`);
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
    const {
      preview, dataHasBeenFetched, imageWebLabels, imageLabels, imageSafeSearch, imageProperties, imageObjects, imageText
    } = this.props;
    return (
      <section className={`data_container ${dataHasBeenFetched ? '' : 'closed'}`} >
        {dataHasBeenFetched && (
          <React.Fragment>
            <section className="preview_container">
              <section className="preview_grid"></section>
              <section className="preview_image">
                <img className="preview_image_resized" src={preview} />
              </section>
            </section>
            <section className="data">
              <section className='web-labels'>
                <WebLabels labels={imageWebLabels} />
              </section>
              <section className='labels'>
                <Labels labels={imageLabels} /> 
              </section>
              <section className='safe_search'>
                <SafeSearch safeSearch={imageSafeSearch} />
              </section>
              <section className='properties'>
                <Properties properties={imageProperties} />
              </section>
              <section className='objects'>
                <Objects objects={imageObjects} />
              </section>
              <section className='text'>
                <Text text={imageText} />
              </section>
              <section className='images'>
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