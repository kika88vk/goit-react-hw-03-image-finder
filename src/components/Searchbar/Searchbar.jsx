import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = {
    imageTags: '',
  };

  handleTagChange = evt => {
    this.setState({ imageTags: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.imageTags.trim() === '') {
      return;
    }
    this.props.onPropSumit(this.state.imageTags);
    this.setState({ imageTags: '' });
  };
  render() {
    const onSubmit = this.props.onSubmit;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={css.SearchFormButton}
            onClick={onSubmit}
          >
            <ImSearch style={{ width: 25, height: 25 }} />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.imageTags}
            onChange={this.handleTagChange}
          />
        </form>
      </header>
    );
  }
}
