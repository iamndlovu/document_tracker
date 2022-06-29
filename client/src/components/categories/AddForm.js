import React, { useState } from 'react';

import styles from './AddForm.module.scss';

const AddForm = ({ handleAdd }) => {
	const [name, setName] = useState('');

	const onChangeName = e => setName(e.target.value);

	const onSubmitForm = e => {
		e.preventDefault();
		const data = new FormData();
		data.append('name', name);
		handleAdd(data);
		setName('');
	};

	return (
		<form onSubmit={onSubmitForm} className={styles.AddForm}>
			<div className={styles.formGroup}>
				<input
					type="text"
					placeholder="Add new category"
					required
					value={name}
					onChange={onChangeName}
				/>
			</div>
			<input type="submit" value="Add" />
		</form>
	);
};

export default AddForm;
