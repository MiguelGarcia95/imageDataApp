import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuItem from '../../UI/MenuItem';
import {
  getImageLabels, getImageWebLabels, getImageObjects, getImageProperties, getImageSafeSearch, getImageText
} from '../../../store/actions/image.js';
import { faTags, faChild, faObjectUngroup, faCogs, faFont, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';



class MenuHeader extends Component {

  onGetImageLabels = () => this.props.getImageLabels(this.props.image);
  onGetImageWebLabels = () => this.props.getImageWebLabels(this.props.image);
  onGetImageObjects = () => this.props.getImageObjects(this.props.image);
  onGetImageProperties = () => this.props.getImageProperties(this.props.image);
  onGetImageSafeSearch = () => this.props.getImageSafeSearch(this.props.image);
  onGetImageText = () => this.props.getImageText(this.props.image);

  render() {
    const {
      preview, image, imageLabelsSuccess, imageWebLabelsSuccess, imageObjectsSuccess, 
      imageTextSuccess, imagePropertiesSuccess, imageSafeSearchSuccess
    } = this.props;

    return (
      <section className={`buttons ${preview ? 'opened' : '' }`}>
        {/* {preview && (

        ) } */}
        <React.Fragment>
          <section className='sub-title'>
            What do you want to do? 
          </section>
          <section className="button_container">
            <MenuItem title='Web' icon={faSearch} onItemClick={() => this.onGetImageWebLabels(image)} disabled={imageWebLabelsSuccess} />
            <MenuItem title='Label' icon={faTags} onItemClick={() => this.onGetImageLabels(image)} disabled={imageLabelsSuccess} />
            <MenuItem title='Objects' icon={faObjectUngroup} onItemClick={() => this.onGetImageObjects(image)} disabled={imageObjectsSuccess} />
            <MenuItem title='Properties' icon={faCogs} onItemClick={() => this.onGetImageProperties(image)} disabled={imagePropertiesSuccess} />
            <MenuItem title='Safe Search' icon={faChild} onItemClick={() => this.onGetImageSafeSearch(image)} disabled={imageSafeSearchSuccess} />
            <MenuItem title='Text' icon={faFont} onItemClick={() => this.onGetImageText(image)} disabled={imageTextSuccess} />
          </section>
        </React.Fragment>
      </section>
    )
  }
}

const mapStateToprops = state => {
  return {
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
    getImageLabels: image => dispatch(getImageLabels(image)),
    getImageWebLabels: image => dispatch(getImageWebLabels(image)),
    getImageObjects: image => dispatch(getImageObjects(image)),
    getImageProperties: image => dispatch(getImageProperties(image)),
    getImageSafeSearch: image => dispatch(getImageSafeSearch(image)),
    getImageText: image => dispatch(getImageText(image)),
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(MenuHeader);