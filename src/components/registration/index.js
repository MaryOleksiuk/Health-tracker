import React from 'react';
import Styles from './styles/index.module.scss';
import { UserForm } from '../userForm';

export const Registration = () => {
  return (
    <section className={Styles.registration}>
      <div className={Styles.left}>
        <div className={Styles.content}>
          <h1>Registration</h1>
          <UserForm />
        </div>
      </div>

      <div className={Styles.right}></div>
    </section>
  )
}
