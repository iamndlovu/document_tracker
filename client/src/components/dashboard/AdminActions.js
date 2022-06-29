import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

import styles from './AdminActions.module.scss';

const AdminActions = () => {
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

	return (
		<section className={styles.AdminActions}>
			<div className={styles.users}>
				<h3>User Management</h3>
				<nav role="menu">
					<NavLink to="/register" role="menuitem">
						Add New User
					</NavLink>
					<NavLink to="/users" role="menuitem">
						All Users
					</NavLink>
				</nav>
			</div>
			<div className={styles.system}>
				<h3>System</h3>
				<nav>
					<NavLink to="/system/reports" role="menuitem">
						System Reports
					</NavLink>
				</nav>
			</div>
			<div className={styles.categories}>
				<h3>File Categories</h3>
				<ul>
					{(categories &&
						categories.length > 0 &&
						categories.map(category => (
							<li key={category._id}>{category.name}</li>
						))) ||
						msg}
				</ul>
				<p>
					{categories && (
						<>
							Total categories: {categories.length}.{' '}
							<Link to="/categories">Show All</Link>
						</>
					)}
				</p>
			</div>
		</section>
	);
};

export default AdminActions;
