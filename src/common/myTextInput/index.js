import React from 'react';
import Styles from "./styles/index.module.scss";

export const MyTextInput = ({label, meta, ...props}) => (
  <>
    <div className={Styles.inputRow}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...props} />

      {meta.touched && meta.error && (
        <span className={Styles.textDanger}>{meta.error}</span>
      )}
    </div>
  </>
);
