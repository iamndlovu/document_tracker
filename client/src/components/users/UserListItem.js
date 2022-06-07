import React from 'react';

import styles from './UserListItem.module.scss';

const UserListItem = ({ user }) => {
	// eslint-disable-next-line
	const { fullName, username, level, bio, email, picture, updatedAt, _id } =
		user;
	return (
		<li className={styles.UserListItem}>
			<section className={styles.dp}>
				<img src={picture} alt={username} />
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
				<button>Edit User</button>
				<button className={styles.danger}>Delete User</button>
				<button>View Activity</button>
			</section>
		</li>
	);
};

export default UserListItem;
