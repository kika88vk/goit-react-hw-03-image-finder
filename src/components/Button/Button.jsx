import css from './Button.module.css';
import React, { Component } from 'react';

export class Button extends Component {
  state = {
    page: 2,
  };

  handleClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    console.log('this.state.page', this.state.page);
  };

  handleChangePage = () => {
    this.props.onChangePage(this.state.page);
  };
  render() {
    // const onSumbit = this.props.onSubmit;
    return (
      <div className={css.ButtonWraper}>
        <button
          className={css.Button}
          onClick={this.handleClick}
          onSubmit={this.handleChangePage}
        >
          Load more
        </button>
      </div>
    );
  }
}
