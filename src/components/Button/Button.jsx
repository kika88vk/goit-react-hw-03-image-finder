import css from './Button.module.css';

export const Button = () => {
  return (
    <div className={css.ButtonWraper}>
      <button className={css.Button}>Load more</button>
    </div>
  );
};
