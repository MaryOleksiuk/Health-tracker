import React from 'react';
import { categories } from './categoriesData';
import { Category } from '../category';
import Styles from './styles/index.module.scss';

export const CategoriesList = () => {
  const categoriesList = categories.map(category => {
    return (
      <Category
        key={category.id}
        data={category}/>
    )
  });

  return (
    <div className={Styles.navigation}>
      <h1>How is your day?</h1>
      <div className={Styles.items}>
        {categoriesList}
      </div>
    </div>
  )
}
