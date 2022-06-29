import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';

import styles from '../loginForm/LoginForm.module.scss';

const RegistrationForm = ({ user, toggleForm }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [bio, setBio] = useState('');
	const [level, setLevel] = useState(null);
	const [picture, setPicture] = useState(null);

	useEffect(() => {
		if (user) {
			const { username, email, bio, password } = user;
			setUsername(username);
			setEmail(email);
			setBio(bio);
			setPassword(password);
			setConfirm(password);
		}
	}, [user]);

	const onChangeFirstName = e => setFirstName(e.target.value);
	const onChangeLastName = e => setLastName(e.target.value);
	const onChangeUsername = e => setUsername(e.target.value);
	const onChangeEmail = e => setEmail(e.target.value);
	const onChangePassword = e => setPassword(e.target.value);
	const onChangeConfirm = e => setConfirm(e.target.value);
	const onChangeBio = e => setBio(e.target.value);
	const onChangeLevel = e => setLevel(e.target.value);
	// const onChangePicture = e => setPicture(e.target.files[0]);
	const onChangeDp = pic => setPicture(pic);

	const onSubmitForm = e => {
		e.preventDefault();

		if (password !== confirm) {
			alert('Passwords do not match');
			return;
		}
		const fullName = `${firstName} ${lastName}`;
		const formData = new FormData();
		formData.append('picture', picture);
		formData.append('username', username);
		formData.append('level', level);
		formData.append('email', email);
		formData.append('password', password);
		formData.append('bio', bio);
		formData.append('fullName', fullName);

		if (user && toggleForm) {
			axios
				.post(`http://localhost:5000/users/update/${user._id}`, formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				})
				.then(res => res.data)
				.then(data => console.log(data))
				.then(() => toggleForm())
				.catch(error => alert(error));
		} else {
			axios
				.post('http://localhost:5000/users/add', formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				})
				.then(res => res.data)
				.then(data => console.log(data))
				.then(() => alert('User added'))
				.catch(error => alert(error));
		}
	};

	const useStyles = makeStyles(() => ({
		dropZone: {
			height: '100%',
			fullWidth: 'true',
			overflow: 'hidden',
		},
		previewContainer: {
			container: 'true',
			width: 'calc(100% - 64px)',
			height: '100%',
			overflow: 'hidden',
		},
		preview: {
			width: '96%',
			maxWidth: '96%',
			height: '96%',
			item: 'true',
			xs: '12',
			flex: '1',
			overflow: 'hidden',
		},
		previewImg: {
			//height: '100%',
			width: '90%',
		},
	}));

	const classes = useStyles();

	return (
		<form className={styles.LoginForm} onSubmit={onSubmitForm}>
			{!user && (
				<>
					<div className={styles.formGroup}>
						<label htmlFor="firstname" className={styles.offscreen}>
							Your First Name
						</label>
						<input
							type="text"
							name="firstname"
							id="firstname"
							placeholder="First Name"
							value={firstName}
							onChange={onChangeFirstName}
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="lastname" className={styles.offscreen}>
							Your Last Name(s)
						</label>
						<input
							type="text"
							name="lastname"
							id="lastname"
							placeholder="Last Name(s)"
							value={lastName}
							onChange={onChangeLastName}
							required
						/>
					</div>
				</>
			)}
			<div className={styles.formGroup}>
				<label htmlFor="username" className={styles.offscreen}>
					Your username
				</label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
					value={username}
					onChange={onChangeUsername}
					required
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="email" className={styles.offscreen}>
					Your email address
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					value={email}
					onChange={onChangeEmail}
					required
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="bio" className={styles.offscreen}>
					Your bio
				</label>
				<textarea
					id="bio"
					name="bio"
					placeholder="Write a short bio here"
					value={bio}
					onChange={onChangeBio}
					required
				></textarea>
			</div>
			{!user && (
				<>
					<div className={styles.formGroup}>
						<label htmlFor="level" className={styles.offscreen}>
							Select Access Level
						</label>
						<select
							name="level"
							id="level"
							placeholder="Access level"
							value={level}
							onChange={onChangeLevel}
							required
						>
							<option value={null}>--Select Access Level--</option>
							<option value="Administrator">Administrator</option>
							<option value="Register">Register</option>
							<option value="Staff">Staff</option>
						</select>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="picture" className={styles.offscreen}>
							Upload a profile picture
						</label>
						<DropzoneArea
							id="picture"
							name="picture"
							acceptedFiles={['image/*']}
							dropzoneText={'Drag and drop a profile photo here or click'}
							filesLimit={1}
							dropzoneClass={classes.dropZone}
							previewGridClasses={{
								item: classes.preview,
							}}
							showPreviewsInDropzone={true}
							getPreviewIcon={file => {
								if (file.file.type.split('/')[0] === 'image')
									return (
										<img
											className={classes.previewImg}
											role="presentation"
											src={file.data}
										/>
									);
							}}
							showAlerts={['error', 'info']}
							onChange={files => onChangeDp(files[0])}
						/>
					</div>
				</>
			)}
			<div className={styles.formGroup}>
				<label htmlFor="password" className={styles.offscreen}>
					Your password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					value={password}
					onChange={onChangePassword}
					required
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="confirm" className={styles.offscreen}>
					Confirm password
				</label>
				<input
					type="password"
					name="confirm"
					id="confirm"
					placeholder="Confirm Password"
					value={confirm}
					onChange={onChangeConfirm}
					required
				/>
			</div>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default RegistrationForm;
