import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import RegistrationForm from './../components/registrationForm/RegistrationForm';

const register = ({ user }) => {
	const level = user.level.toLowerCase();
	if (level === 'admin')
		return (
			<Layout title="Register - Document Tracker" user={user}>
				<main
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						flexGrow: 1,
						height: '100%',
					}}
				>
					<RegistrationForm />
				</main>
			</Layout>
		);
	else <Navigate to="/" replace />;
};

export default register;
