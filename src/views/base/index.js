import React from 'react';

import Styles from './styles/index.module.scss';

import { Header } from '../../components/header';
import { Widget } from '../../components/widget';
import { Loader } from "../../common/loader";
import cx from "classnames";

export const Base = (props) => {
  const {
    profile,
    isLoading,
    isHome,
    hideWidget,
    logout,
    children,
    score,
    isFullWidth,
    isFlex
  } = props;

  if (!profile) {
    return null;
  }

  const loader = isLoading && (
    <Loader />
  );

  return (
    <section className={Styles.dashboard}>
      <div className={cx([Styles.sidebar, profile.sex === 'm' ? Styles.male : null, profile.sex === 'f' ? Styles.female : null ])}>
        { loader }
      </div>

      <div className={Styles.wrap}>
        <Header
          isHome={isHome}
          sex={profile.sex}
          fname={profile.fname}
          lname={profile.lname}
          logout={logout}
         />

        <div className={cx([Styles.content, isFullWidth ? Styles.fullWidth : null, isFlex ? Styles.isFlex : null])}>
            {children}

            {(score !== null && !hideWidget) && (
              <Widget score={score} />
            )}
        </div>
      </div>
    </section>
  )
}
