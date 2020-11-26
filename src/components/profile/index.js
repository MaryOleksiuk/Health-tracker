import React from 'react';
import Styles from './styles/index.module.scss';
import { UserForm } from '../userForm';
import cx from 'classnames';
import { useScore } from '../../bus/tracker/hooks/useScore';

export const Profile = (props) => {
  const { resetScore } = useScore();

  const clearAllData = () => {
    resetScore();
  }

  const { profile } = props;

  return (
    <>
      <h1>Profile</h1>
      <UserForm user={profile} />

      <button type='reset' className={cx([Styles.clearData])} onClick={clearAllData}>Clear all data</button>
    </>
)};
