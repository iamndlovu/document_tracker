import React from 'react';

import styles from './AddForm.module.scss';

const AddForm = () => {
	return (
		<form className={styles.AddForm}>
			<div className={styles.formGroup}>
				<input type="text" placeholder="Add new category" />
			</div>
			<input type="submit" value="Add" />
		</form>
	);
};

export default AddForm;
