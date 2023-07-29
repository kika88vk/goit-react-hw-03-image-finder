import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import React, { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageTags !== this.props.imageTags) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.imageTags}&page=1&key=37262675-c60479e6538b2ce74a07e98ab&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(
              new Error(`Don't found ${this.props.imageTags} pictures`)
            );
          })
          .then(images =>
            this.setState({ images: images.hits, status: 'resolved' })
          )
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  }
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
          {images.length > 0 && <Button />}
        </>
      );
    }
  }
}
