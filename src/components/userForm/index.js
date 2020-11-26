import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Styles from './styles/index.module.scss';
import cx from 'classnames';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { useProfile } from '../../bus/user/hooks/useProfile';

export const UserForm = (props) => {
  const { register, updateUser } = useProfile();
  const user = props.user ? props.user : initialValues;

  const isUserProfile = !!props.user;
  const [sex, setSex] = useState(user.sex);

  const handleSubmit = (fields, { setSubmitting }) => {
    setSubmitting(true);

    if(isUserProfile) {
      updateUser(fields);
    } else {
      register(fields);
    }
  };

return (
  <Formik
    enableReinitialize={true}
    initialValues={user}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {(props) => {
      const {handleSubmit, handleReset, touched, errors, isSubmitting} = props;

      return (
        <Form onSubmit={handleSubmit} onReset={handleReset}>
          <div className={Styles.gender}>
            <Field type='radio' as='input' name='sex' id='female' value='f' placeholder='' checked={sex === 'f'} onClick={() => setSex('f')} />
            <label htmlFor='female' className={cx([Styles.female, sex === 'f' ? Styles.selected : null])}>
              <span>Female</span>
            </label>

            <Field type='radio' as='input' name='sex' id='male' value='m' placeholder='' checked={sex === 'm'} onClick={() => setSex('m')}  />
            <label htmlFor='male' className={cx([Styles.male, sex === 'm' ? Styles.selected : null])}>
              <span>Male</span>
            </label>

            <span className={Styles.textDanger}>{ touched.sex && errors.sex }</span>
          </div>

          { !isUserProfile && (
            <>
            <div className={Styles.inputRow}>
            <label htmlFor="email">Email</label>
            <Field type='email' as='input' name='email' id='email' placeholder='Enter your email'/>

            <span className={Styles.textDanger}>{touched.email && errors.email}</span>
          </div>

            <div className={Styles.inputRow}>
              <label htmlFor='password'>Password</label>
              <Field type='password' as='input' name='password' id='password' placeholder='Enter your password' />

              <span className={Styles.textDanger}>{ touched.password && errors.password }</span>
            </div>
            </>
          )}

          <div className={Styles.inputRow}>
            <label htmlFor='fname'>Name</label>
            <Field type='text' as='input' name='fname' id='fname' placeholder='Enter your name'/>

            <span className={Styles.textDanger}>{touched.fname && errors.fname}</span>
          </div>

          <div className={Styles.inputRow}>
            <label htmlFor='lname'>Surname</label>
            <Field type='text' as='input' name='lname' id='lname' placeholder='Enter your surname'/>

            <span className={Styles.textDanger}>{touched.lname && errors.lname}</span>
          </div>

          <div className={Styles.inputRow}>
            <label htmlFor='height'>Height</label>
            <Field type='number' as='input' name='height' id='height' placeholder='Enter your height'/>

            <span className={Styles.textDanger}>{touched.height && errors.height}</span>
          </div>

          <div className={Styles.inputRow}>
            <label htmlFor='age'>Age</label>
            <Field type='number' as='input' name='age' id='age' placeholder='Enter your age'/>

            <span className={Styles.textDanger}>{touched.age && errors.age}</span>
          </div>

          <div className={Styles.inputRow}>
            <label htmlFor='weight'>Weight</label>
            <Field type='number' as='input' name='weight' id='weight' placeholder='Enter your weight'/>

            <span className={Styles.textDanger}>{touched.weight && errors.weight}</span>
          </div>

          <div className={Styles.controls}>
            {!isUserProfile && (
              <button type='reset' className={cx([Styles.clearData, isSubmitting ? Styles.loading : null])}>Clear
              </button>
            )
            }
            <button type='submit' className={cx([isSubmitting ? Styles.loading : null])}> { isUserProfile ? 'Update profile' : 'Register' }</button>
          </div>

          {isSubmitting && <span className="spinner"></span>}
        </Form>
      )
    }}
  </Formik>
)};
