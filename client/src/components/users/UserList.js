import React from 'react';
import UserListItem from './UserListItem';
import Restricted from '../Restricted';

import styles from './UserList.module.scss';

const UserList = ({ user }) => {
	const level = user.level.toLowerCase();

	// TODO: Get users from DB
	const users = [1, 12, 13, 11, 10, 16, 18];

	return (
		(level === 'admin' && (
			<ul className={styles.UserList}>
				{users.map(id => (
					<div key={id}>
						<UserListItem user={user} />
					</div>
				))}
			</ul>
		)) || <Restricted />
	);
};

export default UserList;
