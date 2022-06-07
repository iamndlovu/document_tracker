import React from 'react';
import Layout from '../components/Layout';

const logs = ({ user }) => {
	return (
		<Layout title="History - Document Tracker" user={user}>
			<h1 className="heading">User Logs</h1>
		</Layout>
	);
};

export default logs;
