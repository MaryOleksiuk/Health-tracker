import React from 'react';
import Styles from "./styles/index.module.scss";
import cx from "classnames";

export const MyRadioInput = ({label, value, ...props}) => (
  <>
      <label className={cx([Styles.answer, props.selected === props.value ? Styles.selected : null])} htmlFor={props.id || props.name}>{label}</label>
      <input value={value} {...props} />
  </>
);
