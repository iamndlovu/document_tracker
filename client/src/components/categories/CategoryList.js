import React, { useEffect, useState } from 'react';
import CategoryListItem from './CategoryListItem';
import AddForm from './AddForm';
import axios from 'axios';

import styles from './CategoryList.module.scss';

const CategoryList = () => {
	const [categories, setCategories] = useState(null);
	const [msg, setMsg] = useState('Loading categories...');

	useEffect(() => {
		axios
			.get('http://localhost:5000/categories')
			.then(res => res.data)
			.then(data => {
				setCategories(data);
				if (data.length < 1) setMsg('No categories found!');
			})
			.catch(err => setMsg(err));
	});

	const handleAdd = data => {
		axios
			.post('http://localhost:5000/categories/add', data, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then(res => setCategories(prev => [...prev, res.data]))
			.catch(err => alert(err));
	};

	return (
		<>
			<h1 className={'heading ' + styles.heading}>Document Categories</h1>
			<AddForm handleAdd={handleAdd} />
			<ul className={styles.CategoryList}>
				{(categories &&
					categories.length > 0 &&
					categories.map(category => (
						<CategoryListItem item={category} key={category._id} />
					))) ||
					msg}
			</ul>
		</>
	);
};

export default CategoryList;
