import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';

import styles from '../loginForm/LoginForm.module.scss';

const RegistrationForm = () => {
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
			background: 'red',
			overflow: 'hidden',
		},
		previewImg: {
			//height: '100%',
			width: '90%',
		},
	}));

	const classes = useStyles();

	return (
		<form className={styles.LoginForm}>
			<div className={styles.formGroup}>
				<label htmlFor="firstname" className={styles.offscreen}>
					Your First Name
				</label>
				<input
					type="text"
					name="firstname"
					id="firstname"
					placeholder="First Name"
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
					required
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="username" className={styles.offscreen}>
					Your username
				</label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
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
					required
				></textarea>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="level" className={styles.offscreen}>
					Select Access Level
				</label>
				<select name="level" id="level" placeholder="Access level" required>
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
					onChange={files => console.log('Files:', files)}
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
			<div className={styles.formGroup}>
				<label htmlFor="confirm" className={styles.offscreen}>
					Confirm password
				</label>
				<input
					type="password"
					name="confirm"
					id="confirm"
					placeholder="Confirm Password"
					required
				/>
			</div>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default RegistrationForm;
