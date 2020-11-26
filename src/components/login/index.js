import React from 'react';
import { useFormik } from 'formik';
import { MyTextInput } from '../../common/myTextInput';
import { useProfile } from '../../bus/user/hooks/useProfile';
import { validationSchema } from './validationSchema';
import { initialValues } from './initialValues';
import Styles from './styles/index.module.scss';
import cx from 'classnames';


export const Login = () => {
  const { login } = useProfile();

  const onFormSubmit = ({ email, password }, { setSubmitting }) => {
    setSubmitting(true);
    const encryptedCreds = btoa(`${email}:${password}`);
    login(encryptedCreds);
  };

  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    isSubmitting
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onFormSubmit
  });

  return (
    <section className={Styles.login}>
      <div className={Styles.content}>
        <h1>Welcome</h1>

        <form onSubmit={handleSubmit}>
          <MyTextInput
            label='Email'
            name='email'
            type='email'
            placeholder='Enter your email'
            meta={getFieldMeta('email')}
            {...getFieldProps('email')}
          />

          <MyTextInput
            label='Password'
            name='password'
            type='password'
            placeholder='Enter your password'
            meta={getFieldMeta('password')}
            {...getFieldProps('password')}
          />

          <div className={Styles.controls}>
            <button className={cx([ isSubmitting ? Styles.loading : null])} type='submit'>Login</button>
          </div>

          {isSubmitting && <span className="spinner"></span>}

        </form>
      </div>
    </section>
  )
};
