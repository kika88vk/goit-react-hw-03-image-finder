import css from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  bigPhoto = this.props.bigPhoto;
  smallPhoto = this.props.smallPhoto;
  tags = this.props.tags;

  static propTypes = {
    bigPhotog: PropTypes.string,
    smallPhoto: PropTypes.string,
    tags: PropTypes.string,
  };

  state = {
    showModal: false,
  };

  togglePopUpImage = () => {
    this.setState(state => ({ showModal: !state.showModal }));
    console.log('togglePopUpImage');
  };

  render() {
    const { bigPhoto, smallPhoto, tags } = this.props;
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            src={smallPhoto}
            alt={tags}
            className={css.ImageGalleryItemImage}
            onClick={this.togglePopUpImage}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.togglePopUpImage}>
            <img width="1400" height="900" src={bigPhoto} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
