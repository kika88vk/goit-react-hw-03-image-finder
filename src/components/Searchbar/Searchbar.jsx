import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  propSubmit = this.props.onPropSubmit;
  static propTypes = {
    PropSubmit: PropTypes.func,
  };

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
    this.props.onPropSubmit(this.state.imageTags);
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
