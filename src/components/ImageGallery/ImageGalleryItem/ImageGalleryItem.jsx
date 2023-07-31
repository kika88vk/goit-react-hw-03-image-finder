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

  openModal = () => {
    this.setState({ showModal: true });
    console.log('open modal');
  };

  closeModal = () => {
    this.setState({ showModal: false });
    console.log('close modal');
  };

  render() {
    const { bigPhoto, smallPhoto, tags } = this.props;
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.openModal}>
          <img
            src={smallPhoto}
            alt={tags}
            className={css.ImageGalleryItemImage}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>
            <img width="1400" height="900" src={bigPhoto} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
