import React from 'react';

import styles from './CategoryListItem.module.scss';

const CategoryListItem = ({ item }) => {
	// eslint-disable-next-line
	const { name, _id } = item;
	return (
		<li className={styles.CategoryListItem}>
			<span>{name}</span>
			<span role="button">X</span>
		</li>
	);
};

export default CategoryListItem;
