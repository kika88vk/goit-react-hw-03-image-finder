import css from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openImage = () => {
    this.setState(state => ({ showModal: !state.showModal }));
    console.log('openImage');
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
            onClick={this.openImage}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.openImage}>
            <img width="1400" height="900" src={bigPhoto} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
