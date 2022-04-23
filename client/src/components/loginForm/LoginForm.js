import React from 'react';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
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
