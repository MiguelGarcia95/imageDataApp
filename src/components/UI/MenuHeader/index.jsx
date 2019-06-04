import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuItem from '../../UI/MenuItem';
import {
  getImageLabels, getImageWebLabels, getImageObjects, getImageProperties, getImageSafeSearch, getImageText
} from '../../../store/actions/image.js';
import './style.css';



class MenuHeader extends Component {

  onGetImageLabels = image => this.props.getImageLabels(this.props.image);
  onGetImageWebLabels = image => this.props.getImageWebLabels(this.props.image);
  onGetImageObjects = image => this.props.getImageObjects(this.props.image);
  onGetImageProperties = image => this.props.getImageProperties(this.props.image);
  onGetImageSafeSearch = image => this.props.getImageSafeSearch(this.props.image);
  onGetImageText = image => this.props.getImageText(this.props.image);

  render() {
    const {preview, image} = this.props;

    return (
      <section className={`buttons ${preview ? 'opened' : '' }`}>
        {preview && (
          <section className="button_container">
            <MenuItem title='Web Detection' onItemClick={() => this.onGetImageWebLabels(image)} />
            <MenuItem title='Label Detection' onItemClick={() => this.onGetImageLabels(image)}  />
            <MenuItem title='Object Detection' onItemClick={() => this.onGetImageObjects(image)}  />
            <MenuItem title='Image Properties' onItemClick={() => this.onGetImageProperties(image)}  />
            <MenuItem title='Image Safe Search' onItemClick={() => this.onGetImageSafeSearch(image)}  />
            <MenuItem title='Text Detection' onItemClick={() => this.onGetImageText(image)}  />
          </section>
        ) }
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImageLabels: image => dispatch(getImageLabels(image)),
    getImageWebLabels: image => dispatch(getImageWebLabels(image)),
    getImageObjects: image => dispatch(getImageObjects(image)),
    getImageProperties: image => dispatch(getImageProperties(image)),
    getImageSafeSearch: image => dispatch(getImageSafeSearch(image)),
    getImageText: image => dispatch(getImageText(image)),
  }
}

export default connect(null, mapDispatchToProps)(MenuHeader);