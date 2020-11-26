import React from 'react';
import { Link } from'react-router-dom';
import cx from 'classnames';
import Styles from './styles/index.module.scss';

import { UserAvatar } from '../userAvatar';
import { healthAppRoutes } from '../../navigation/healthAppRoutes';

export const Header = (props) => {
  return (
    <div className={cx([Styles.header, props.isHome ? Styles.headerFullWidth : null ])}>
      {!props.isHome && (
        <Link to={healthAppRoutes.root} className={Styles.homeLink}>Homepage</Link>
      )}

      <UserAvatar
        sex={props.sex}
        fname={props.fname}
        lname={props.lname}
        logout={props.logout}
      />
    </div>
  )
}
