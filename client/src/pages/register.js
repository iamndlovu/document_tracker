import React from 'react';
import Layout from '../components/Layout';
import RegistrationForm from './../components/registrationForm/RegistrationForm';

const login = () => {
	return (
		<Layout title="Register - Document Tracker">
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
};

export default login;
