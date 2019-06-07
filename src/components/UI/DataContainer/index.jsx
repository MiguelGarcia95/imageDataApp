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
  render() {
    return (
      <section className='data_container' >
        <WebLabels labels={this.props.imageWebLabels} />
        <SimilarImages images={this.props.imageWebLabels} />

        <Labels labels={this.props.imageLabels} />

        <Objects objects={this.props.imageObjects} />

        <Text text={this.props.imageText} />

        <Properties properties={this.props.imageProperties} />

        <SafeSearch safeSearch={this.props.imageSafeSearch} />


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