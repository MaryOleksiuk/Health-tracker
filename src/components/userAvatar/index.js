import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Styles from './styles/index.module.scss';
import { healthAppRoutes } from '../../navigation/healthAppRoutes';

export const UserAvatar = ({ sex, fname, lname, logout }) => {
  const userLogout = () => {
    logout();
  };

  return (
    <div className={cx([Styles.avatar, sex === 'm' ? Styles.male : null, sex === 'f' ? Styles.female : null])}>
      <div className={Styles.column}>
        <Link to={healthAppRoutes.profile} className={Styles.name}>{fname}</Link>
        <span onClick={userLogout}>Logout</span>
      </div>
    </div>
  )
}
