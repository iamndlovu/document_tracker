import React from 'react';
import CategoryListItem from './CategoryListItem';

import styles from './CategoryList.module.scss';
import AddForm from './AddForm';

const CategoryList = () => {
	//TODO: FETCH FROM DB
	const categories = [
		{
			_id: '1tysdbr9rnfo-4f4k4fmmffe8h',
			name: 'Financial',
		},
		{
			_id: '1tysdbr9rnfo-4fuk4fmmffe8h',
			name: 'Academia',
		},
		{
			_id: '1tysd0r9rnfo-4f4k4fmmffe8h',
			name: 'Sports',
		},
		{
			_id: '1tysdbrprnfo-4f4k4fmmffe8h',
			name: 'Health',
		},
	];

	return (
		<>
			<h1 className={'heading ' + styles.heading}>Document Categories</h1>
			<AddForm />
			<ul className={styles.CategoryList}>
				{categories.map(category => (
					<CategoryListItem item={category} key={category._id} />
				))}
			</ul>
		</>
	);
};

export default CategoryList;
