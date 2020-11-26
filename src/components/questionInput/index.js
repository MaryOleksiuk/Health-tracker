import React, { useEffect, useState } from 'react';
import Styles from './styles/index.module.scss';
import cx from 'classnames';

export const QuestionInput = (props) => {
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

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  }

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
        <div className={Styles.inputRow}>
          <input type="number" value={currentValue || ''} onChange={handleChange} placeholder='Please enter your number'/>
        </div>
      </div>
      <button onClick={submitAnswer} className={cx([Styles.sendAnswer])}>Reply</button>

    </div>
  )
};
