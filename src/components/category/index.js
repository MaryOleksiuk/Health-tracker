import React from 'react';
import cx from 'classnames';
import Styles from './styles/index.module.scss';

export const Category = ({ data }) => {
  return (
    <a href={data.link} className={cx([Styles.link, Styles[`category${data.id}`]])}>
      <span className={Styles.title}>{data.title}</span>
      <span className={Styles.description}>{data.description}</span>
    </a>
  )
}
