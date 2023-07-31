import css from './Button.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onChangePage }) => {
  return (
    <div className={css.ButtonWraper}>
      <button type="submit" className={css.Button} onClick={onChangePage}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onChangePage: PropTypes.func,
};
