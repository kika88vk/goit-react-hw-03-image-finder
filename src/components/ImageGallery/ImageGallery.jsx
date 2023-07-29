import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import React, { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageTags !== this.props.imageTags) {
      this.setState({ loading: true, images: null });
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
          .then(images => this.setState({ images: images.hits }))
          .catch(error => this.setState({ error }))
          .finally(this.setState({ loading: false }));
      }, 1000);
    }
  }
  render() {
    const { loading, images, error } = this.state;
    return (
      <>
        {error && <h1 className={css.heading}>{this.state.error.message}</h1>}
        {images && images.length === 0 && (
          <h1 className={css.heading}>Sorry, pictures are not found!</h1>
        )}
        {loading && <Loader />}
        <ul className={css.ImageGallery}>
          {images &&
            images.map(image => (
              <ImageGalleryItem
                key={image.id}
                bigPhoto={image.largeImageURL}
                smallPhoto={image.webformatURL}
              />
            ))}
        </ul>
        <div>{images && <Button />}</div>
      </>
    );
  }
}
