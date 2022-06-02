import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './AdminActions.module.scss';

const AdminActions = () => {
	// TODO: GET File categories
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
					<li>Student Records</li>
					<li>Memo</li>
					<li>lorem</li>
					<li>dolor</li>
				</ul>
				<p>
					Total categories: 11. <Link to="/categories">Show All</Link>
				</p>
			</div>
		</section>
	);
};

export default AdminActions;
