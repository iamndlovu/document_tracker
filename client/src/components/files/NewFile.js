import React, { useEffect, useState } from 'react';
import axios from 'axios';

import formStyles from '../loginForm/LoginForm.module.scss';

const NewFile = ({ handler }) => {
	const [category, setCategory] = useState(null);
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [file, setFile] = useState(null);
	const [categoryList, setCategoryList] = useState([]);

	const onChangeCategory = e => setCategory(e.target.value);
	const onChangeName = e => setName(e.target.value);
	const onChangeType = e => setType(e.target.value);
	const onChangeDescription = e => setDescription(e.target.value);
	const onChangeFile = e => setFile(e.target.files[0]);

	const onFormSubmit = e => {
		e.preventDefault();

		const docInfo = new FormData();
		docInfo.append('name', name);
		docInfo.append('category', category);
		docInfo.append('description', description);
		docInfo.append('type', type);
		docInfo.append('owner', JSON.parse(localStorage.getItem('dts_user'))._id);
		docInfo.append('file', file);

		handler(docInfo).then(() => {
			setName('');
			setType('');
			setDescription('');
			setFile(null);
			setCategory(null);
			e.target.reset();
		});
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/categories')
			.then(res => setCategoryList(res.data))
			.catch(err => alert('Failed to get category list:\n ' + err));
	});

	return (
		<div
			style={{
				maxWidth: '768px',
			}}
		>
			<form className={formStyles.LoginForm} onSubmit={onFormSubmit}>
				<div className={formStyles.formGroup}>
					<input
						type="text"
						placeholder="Document name"
						value={name}
						onChange={onChangeName}
						style={inputStyle}
						required
					/>
				</div>
				<div className={formStyles.formGroup}>
					<input
						type="text"
						placeholder="Document type e.g. PDF"
						value={type}
						onChange={onChangeType}
						style={inputStyle}
						required
					/>
				</div>
				<div className={formStyles.formGroup}>
					<textarea
						placeholder="Brief document description"
						value={description}
						onChange={onChangeDescription}
						style={inputStyle}
						required
					></textarea>
				</div>
				<div className={formStyles.formGroup}>
					<select
						style={inputStyle}
						name="category"
						id="category"
						placeholder="Category"
						value={category}
						onChange={onChangeCategory}
						required
					>
						<option value={null}>--Select Category--</option>
						{categoryList.map(category => (
							<option key={category._id} value={category._id}>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div className={formStyles.formGroup}>
					<input
						type="file"
						onChange={onChangeFile}
						style={inputStyle}
						required
					/>
				</div>
				<input type="submit" value="Upload" />
			</form>
		</div>
	);
};

const inputStyle = {
	background: 'rgba(255, 255, 255, 0.9)',
};

export default NewFile;
