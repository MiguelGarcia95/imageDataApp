import React, {Component} from 'react';
import {connect} from 'react-redux';

import DropZone from '../../UI/DropZone';
import MenuItem from '../../UI/MenuItem';
import {getImageLabels, getImageWebLabels} from '../../../store/actions/image';
import './style.css';



class MenuHeader extends Component {

  onGetImageLabels = image => this.props.getImageLabels(image);
  onGetImageWebLabels = image => this.props.getImageWebLabels(image);

  render() {
    const {dropZoneOpened, onImageDrop, preview, image} = this.props;

    return (
      <section className={`drop_zone_container ${dropZoneOpened ? 'filled' : '' }`}>
        <DropZone onImageDrop={onImageDrop} isEmpty={dropZoneOpened ? false : true} />
        {preview && (
          <section className="button_container">
            <section className="buttons">
              <MenuItem title='Web Detection' onItemClick={() => this.onGetImageWebLabels(image)} />
              <MenuItem title='Label Detection' onItemClick={() => this.onGetImageLabels(image)}  />
            </section>
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
  }
}

export default connect(null, mapDispatchToProps)(MenuHeader);