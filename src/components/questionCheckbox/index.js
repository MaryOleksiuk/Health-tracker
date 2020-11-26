import React, { useEffect, useState } from 'react';
import Styles from './styles/index.module.scss';
import cx from 'classnames';

export const QuestionCheckbox = (props) => {
  const [currentValue, setCurrentValue] = useState(0);

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

  const type = props.data.kind;
  const submitAnswer = () => {
    if(initialValue) {
      update(type, currentValue, initialValue.hash)
    } else {
      create(type, currentValue);
    }
  };

  const cupsArray = new Array(13);
  const cups = [...cupsArray].map((cup, i) => {
    const isSelected = currentValue > i;

    const handleClick = () => {
      const nextIndex = i + 1;
      const previousIndex = currentValue - 1;

      if (currentValue === nextIndex) {
        setCurrentValue(previousIndex)
      } else {
        setCurrentValue(nextIndex);
      }
    }

    return (
      <span key={i} className={cx(Styles.element, isSelected ? Styles.selected : null)} onClick={handleClick} />
    )
  });
  const waterAmount = currentValue && currentValue * 250;

  return (
    <div className={Styles.question}>
      <h1>{props.data.title}</h1>

      <div className={Styles.elements}>
        { cups }
        <span className={Styles.size}>{waterAmount} ml</span>
      </div>
      <button onClick={submitAnswer} className={cx([Styles.sendAnswer])}>Reply</button>
    </div>
  )
};
