import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import RequestList from '../components/requests/RequestList';

const Requests = ({ user }) => {
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
					<RequestList />
				</main>
			) : (
				<Navigate to="/login" replace />
			)}
		</Layout>
	);
};

export default Requests;
