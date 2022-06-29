import React from 'react';

import styles from './UserListItem.module.scss';

const UserListItem = ({ user, handlers }) => {
	const { fullName, username, level, bio, email, picture, updatedAt, _id } =
		user;
	const { deleteUser, toggleForm } = handlers;

	return (
		<li className={styles.UserListItem}>
			<section className={styles.dp}>
				<img src={`http://localhost:5000${picture}`} alt={username} />
			</section>
			<section className={styles.bio}>
				<b>Bio:</b>
				<p>{bio}</p>
			</section>
			<section className={styles.name}>
				<h2>{fullName}</h2>
				<h3>@{username}</h3>
				<p>{email}</p>
			</section>
			<section className={styles.info}>
				<div>
					<b>Access level: </b> {level}
				</div>
				<div>
					<b>Last updated: </b>
					{updatedAt}
				</div>
			</section>
			<section className={styles.actions}>
				<button onClick={() => toggleForm(_id)}>Edit User</button>
				<button className={styles.danger} onClick={() => deleteUser(_id)}>
					Delete User
				</button>
				<button>View Activity</button>
			</section>
		</li>
	);
};

export default UserListItem;
