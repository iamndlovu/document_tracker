import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import LoginForm from './../components/loginForm/LoginForm';

const login = ({ user }) => {
	return (
		(user && <Navigate to="/" />) || (
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
		)
	);
};

export default login;
