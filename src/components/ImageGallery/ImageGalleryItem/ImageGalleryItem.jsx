import css from './ImageGalleryItem.module.css';
import * as basicLightbox from 'basiclightbox';

export const ImageGalleryItem = ({ bigPhoto, smallPhoto, tags }) => {
  const openImage = () => {
    basicLightbox.create(`<img  src=${bigPhoto}>`).show();
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={smallPhoto}
        alt={tags}
        className={css.ImageGalleryItemImage}
        onClick={() => openImage}
      />
    </li>
  );
};
