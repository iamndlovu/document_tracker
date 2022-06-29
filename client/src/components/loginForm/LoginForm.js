import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from './LoginForm.module.scss';

const LoginForm = ({ handler }) => {
	const [users, setUsers] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		axios.get('http://localhost:5000/users').then(res => setUsers(res.data));
	});

	const submitForm = e => {
		e.preventDefault();

		users.forEach(user => {
			if (user.email === email && user.password === password) {
				handler(user);
				return;
			}
		});

		alert('Wrong email or password');
	};

	return (
		<form className={styles.LoginForm}>
			<div className={styles.formGroup}>
				<label htmlFor="email" className={styles.offscreen}>
					Your email address
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					required
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="password" className={styles.offscreen}>
					Your password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					required
				/>
			</div>
			<input type="submit" value="LOGIN" />
		</form>
	);
};

export default LoginForm;
