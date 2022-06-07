import React from 'react';
import Layout from '../components/Layout';
import LoginForm from './../components/loginForm/LoginForm';

const login = () => {
	return (
		<Layout title="Login - Document Tracker" user={undefined}>
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
				<LoginForm />
			</main>
		</Layout>
	);
};

export default login;
