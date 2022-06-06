import React from 'react';
import { Navigate } from 'react-router-dom';
import UserList from '../components/users/UserList';
import Layout from '../components/Layout';

const Users = ({ user }) => {
	return (
		<Layout title="Users - Document Tracker">
			{user ? (
				<main
					style={{
						width: '100%',
						flexGrow: 1,
					}}
				>
					<UserList user={user} />
				</main>
			) : (
				<Navigate to="/login" replace />
			)}
		</Layout>
	);
};

export default Users;
