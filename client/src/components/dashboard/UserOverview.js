import React from 'react';

import styles from './UserOverview.module.scss';

const UserOverview = ({ user }) => {
	return (
		<section className={styles.UserOverview}>
			<div className={styles.container}>
				<div className={styles.avatar}>
					<img src={user.picture} alt={user.username} />
				</div>
				<div className={styles.userInfo}>
					<h2>{user.fullName}</h2>
					<h4>
						<span className={styles.username}>@{user.username}</span>
						<span className={styles.separator}></span>
						<span className={styles.level}>{user.level}</span>
					</h4>
					<p>{user.bio}</p>
				</div>
			</div>
		</section>
	);
};

export default UserOverview;
