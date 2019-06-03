import React from 'react';
import {connect} from 'react-redux';

import DropZone from '../../UI/DropZone';
import MenuItem from '../../UI/MenuItem';
import {getImageLabels, getImageWebLabels} from '../../../store/actions/image';
import './style.css';


const MenuHeader = ({dropZoneOpened, onImageDrop, preview}) => {
  return (
    <section className={`drop_zone_container ${dropZoneOpened ? 'filled' : '' }`}>
      <DropZone onImageDrop={onImageDrop} isEmpty={dropZoneOpened ? false : true} />
      {preview && (
        <section className="button_container">
          <section className="buttons">
            <MenuItem title='Web Detection' />
            <MenuItem title='Label Detection' />
          </section>
        </section>
      ) }
    </section>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getImageLabels: image => dispatch(getImageLabels(image)),
    getImageWebLabels: image => dispatch(getImageWebLabels(image)),
  }
}

export default connect(null, mapDispatchToProps)(MenuHeader);