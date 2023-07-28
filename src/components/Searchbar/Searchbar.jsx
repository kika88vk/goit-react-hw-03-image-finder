import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {};

  render() {
    const onSubmit = this.props.onSubmit;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button
            type="submit"
            className={css.SearchFormButton}
            onClick={onSubmit}
          >
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
