import React, { Component } from 'react'
import {connect} from 'react-redux';

import WebLabels from '../Data/WebLabels';
import SimilarImages from '../Data/SimilarImages';
import './style.css';

class DataContainer extends Component {
  render() {
    return (
      <section className='data_container' >
        <WebLabels labels={this.props.imageWebLabels} />
        <SimilarImages images={this.props.imageWebLabels} />
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