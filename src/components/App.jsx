import React, { Component } from 'react';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

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
        <Searchbar onPropSubmit={this.handleFormSubmit} />
        <ImageGallery imageTags={this.state.imageTags} />
      </div>
    );
  }
}
