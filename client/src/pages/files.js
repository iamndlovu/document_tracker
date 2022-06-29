import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Files = ({ user }) => {
	return (
		<Layout title="Documents - Document Tracker" user={user}>
			{user ? (
				<main
					style={{
						width: '100%',
						flexGrow: 1,

						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<h1>Document list</h1>
				</main>
			) : (
				<Navigate to="/login" replace />
			)}
		</Layout>
	);
};

export default Files;
