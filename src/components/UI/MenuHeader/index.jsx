import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuItem from '../../UI/MenuItem';
import {
  getImageLabels, getImageWebLabels, getImageObjects, getImageProperties, getImageSafeSearch, getImageText
} from '../../../store/actions/image.js';
import { faTags, faChild, faObjectUngroup, faCogs, faWrench, faFont, faSearch } from '@fortawesome/free-solid-svg-icons';
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
          <React.Fragment>
            <section className='sub-title'>
              What do you want to do? 
            </section>
            <section className="button_container">
              <MenuItem title='Web' icon={faSearch} onItemClick={() => this.onGetImageWebLabels(image)} />
              <MenuItem title='Label' icon={faTags} onItemClick={() => this.onGetImageLabels(image)}  />
              <MenuItem title='Objects' icon={faObjectUngroup} onItemClick={() => this.onGetImageObjects(image)}  />
              <MenuItem title='Properties' icon={faCogs} onItemClick={() => this.onGetImageProperties(image)}  />
              <MenuItem title='Safe Search' icon={faChild} onItemClick={() => this.onGetImageSafeSearch(image)}  />
              <MenuItem title='Text' icon={faFont} onItemClick={() => this.onGetImageText(image)}  />
            </section>
          </React.Fragment>
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