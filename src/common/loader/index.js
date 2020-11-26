import React from 'react';
import Styles from './styles/index.module.scss';

export const Loader = () => {
  return (
    <div className={Styles.loader}>
      <span className={Styles.spinner}></span>
    </div>
  )
};
