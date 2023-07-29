import React, { Component } from 'react';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    imageTags: '',
  };

  handleFormSubmit = imageTags => {
    this.setState({ imageTags });
    console.log(imageTags);
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onPropSumit={this.handleFormSubmit} />
        <ImageGallery imageTags={this.state.imageTags} />
      </div>
    );
  }
}
