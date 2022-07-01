import React, { useState } from 'react';

import formStyles from '../loginForm/LoginForm.module.scss';

const EditFile = ({ handler }) => {
	const [message, setMessage] = useState('');
	const [file, setFile] = useState(null);

	const onChangeMessage = e => setMessage(e.target.value);
	const onChangeFile = e => setFile(e.target.files[0]);

	const onFormSubmit = e => {
		e.preventDefault();

		const docInfo = { message, newFile: file };

		handler(docInfo).then(() => {
			setMessage('');
			setFile(null);
			e.target.reset();
		});
	};

	return (
		<div
			style={{
				maxWidth: '768px',
			}}
		>
			<form className={formStyles.LoginForm} onSubmit={onFormSubmit}>
				<div className={formStyles.formGroup}>
					<textarea
						placeholder="Commit message"
						value={message}
						onChange={onChangeMessage}
						style={inputStyle}
						required
					></textarea>
				</div>

				<div className={formStyles.formGroup}>
					<input
						type="file"
						onChange={onChangeFile}
						style={inputStyle}
						required
					/>
				</div>
				<input type="submit" value="Push" />
			</form>
		</div>
	);
};

const inputStyle = {
	background: 'rgba(255, 255, 255, 0.9)',
};

export default EditFile;
