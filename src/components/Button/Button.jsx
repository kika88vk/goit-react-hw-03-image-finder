import css from './Button.module.css';
import React, { Component } from 'react';

export class Button extends Component {
  state = {
    pageBtn: 2,
  };

  handleClick = () => {
    this.setState(prevState => ({ pageBtn: prevState.pageBtn + 1 }));
    console.log('click + 1: ', this.state.pageBtn);
  };

  // handleChangePage = () => {
  //   this.props.onChangePage(this.state.pageBtn);
  //   console.log('page after click', this.state.pageBtn);
  // };

  render() {
    return (
      <div className={css.ButtonWraper} onClick={this.handleChangePage}>
        <button type="submit" className={css.Button} onClick={this.handleClick}>
          Load more
        </button>
      </div>
    );
  }
}
