import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import React, { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { apiImages } from 'components/ApiImages/ApiImages';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  tags = this.props.imageTags;

  static propTypes = {
    tags: PropTypes.string,
  };

  state = {
    images: null,
    error: null,
    status: 'idle',
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageTags !== this.props.imageTags) {
      this.setState({ status: 'pending' });

      apiImages(this.props.imageTags, this.state.page)
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

      apiImages(this.props.imageTags, this.state.page)
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleBtnChangePage = page => {
    this.setState({ page });
    console.log(page);
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <h1 className={css.heading}>Enter what you're looking for</h1>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h1 className={css.heading}>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          {images.length === 0 && (
            <h1 className={css.heading}>Sorry, pictures are not found!</h1>
          )}

          <ul className={css.ImageGallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                bigPhoto={image.largeImageURL}
                smallPhoto={image.webformatURL}
                tags={image.tags}
              />
            ))}
          </ul>
          {images.length > 0 && (
            <Button onChangePage={this.handleBtnChangePage} />
          )}
        </>
      );
    }
  }
}
