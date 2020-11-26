import React, { useEffect, useState } from 'react';
import Styles from './styles/index.module.scss';
import cx from 'classnames';

export const Question = (props) => {
  const [currentValue, setCurrentValue] = useState();

  const {
    create,
    update,
    initialValue
  } = props;

  useEffect(() => {
    if (initialValue && initialValue.hash !== 0) {
      setCurrentValue(initialValue.value);
    }
  }, [initialValue]);

  // Question options
  const options = props.data.options || {};

  const list = options.map((option, i) => {
    const handleClick = () => {
      setCurrentValue(option.value);
    }

    return (
      <span
        key={i}
        className={cx(Styles.answer, option.value === currentValue ? Styles.selected : null)}
        onClick={handleClick}
      >
        { option.answer }
      </span>
    )
  });

  const type = props.data.kind;

  const submitAnswer = () => {
    if(initialValue) {
      update(type, currentValue, initialValue.hash)
    } else {
      create(type, currentValue);
    }
  };

  return (
    <div className={Styles.question}>
      <h1>{props.data.title}</h1>

      <div className={Styles.answers}>
        { list }
      </div>
      <button onClick={submitAnswer} className={cx([Styles.sendAnswer])}>Reply</button>

    </div>
  )
};
