import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileItem from './FileItem';
import NewFile from '../files/NewFile';
import axios from 'axios';

import styles from './RecentFiles.module.scss';
import EditFile from '../files/EditFile';

const RecentFiles = ({ showAll }) => {
	const [files, setFiles] = useState(null);
	const [activeEdit, setActiveEdit] = useState(null);
	const [showNewDocForm, setShowNewDocForm] = useState(false);
	const [showEditDocForm, setShowEditDocForm] = useState(false);

	const toggleShowNewDocForm = () => setShowNewDocForm(prev => !prev);
	const toggleShowEditDocForm = () => setShowEditDocForm(prev => !prev);

	const handleAdd = async data => {
		try {
			const res = await axios.post('http://localhost:5000/files/add', data, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			const newDoc = await res.data;
			setFiles(prev => [newDoc, ...prev]);

			const commitData = new FormData();
			commitData.append('message', `New Document - ${newDoc.name}`);
			commitData.append('file', newDoc._id);
			commitData.append(
				'user',
				JSON.parse(localStorage.getItem('dts_user'))._id
			);

			let newCommit = await axios.post(
				'http://localhost:5000/commits/add',
				commitData,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			);
			setShowNewDocForm(false);
			newCommit = newCommit.data;

			const histData = new FormData();
			histData.append('commit', newCommit._id);

			axios.post(
				`http://localhost:5000/files/update/history/${newDoc._id}`,
				histData,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			);
		} catch (err) {
			alert(`Failed to add document:\n ${err}`);
		}
	};

	const handleDelete = async id => {
		try {
			const res = await axios.delete(`http://localhost:5000/files/${id}`);
			alert(res.data);
			if (res.data) {
				const newArr = files.filter(file => file._id !== id);
				setFiles(newArr);
			}
		} catch (err) {
			alert(`Failed to delete document:\n ${err}`);
		}
	};

	const handleEdit = async ({ message, newFile }) => {
		const user = JSON.parse(localStorage.getItem('dts_user'))._id;
		const file = activeEdit;

		if (file === null) return;
		else {
			try {
				const commData = new FormData();
				commData.append('message', message);
				commData.append('user', user);
				commData.append('file', file);

				const commRes = await axios.post(
					'http://localhost:5000/commits/add',
					commData,
					{
						headers: { 'Content-Type': 'multipart/form-data' },
					}
				);
				const commit = commRes.data._id;

				const pushData = new FormData();
				pushData.append('commit', commit);
				pushData.append('file', newFile);
				pushData.append('type', newFile.name.split('.').pop());

				const pushRes = await axios.post(
					'http://localhost:5000/push/add',
					pushData,
					{
						headers: { 'Content-Type': 'multipart/form-data' },
					}
				);

				console.log(pushRes.data);
				setShowEditDocForm(false);
				setActiveEdit(null);
			} catch (err) {
				alert(err);
			}
		}
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/files')
			.then(res => res.data)
			.then(data => {
				if (data.length < 7) setFiles(data);
				else {
					if (showAll) setFiles(data);
					else {
						let newArr = [];
						for (let i = 0; i < 6; i++) {
							newArr[i] = data[i];
						}
						setFiles(newArr);
					}
				}
			})
			.catch(err => alert(err));
	}, [showAll]);

	return (
		<section className={styles.RecentFiles}>
			{showAll ? (
				<button
					onClick={() => toggleShowNewDocForm()}
					className={styles.ctaButton}
				>
					New Document
				</button>
			) : (
				<h2 className={styles.sectionHeader}>Recently Added Documents</h2>
			)}
			{/* new file modal */}
			<div className={`${styles.modal} ${showNewDocForm && styles.show}`}>
				<NewFile handler={handleAdd} />
			</div>
			{showNewDocForm && (
				<button
					onClick={() => toggleShowNewDocForm()}
					className={styles.closeBtn}
				>
					x
				</button>
			)}
			{/* modal end */}
			{/* edit file modal */}
			<div className={`${styles.modal} ${showEditDocForm && styles.show}`}>
				<EditFile handler={handleEdit} />
			</div>
			{showEditDocForm && (
				<button
					onClick={() => {
						setActiveEdit(null);
						toggleShowEditDocForm();
					}}
					className={styles.closeBtn}
				>
					x
				</button>
			)}
			{/* modal end */}
			<table>
				<thead>
					<tr>
						<th>File</th>
						<th>File Name</th>
						<th>File Type</th>
						<th>Description</th>
						<th>Owner</th>
						<th>Added</th>
						{showAll && <th>Actions</th>}
					</tr>
				</thead>
				<tbody>
					{files &&
						files.map(file => (
							<FileItem
								showAll={showAll}
								handler={handleDelete}
								toggle={toggleShowEditDocForm}
								setActiveEdit={setActiveEdit}
								key={file._id}
								file={file}
							/>
						))}
				</tbody>
			</table>
			{!showAll && (
				<>
					Number of Files: {(files && files.length) || 'counting...'}
					<div className={styles.cta}>
						<Link to={`/files`}>Show All</Link>
					</div>
				</>
			)}
		</section>
	);
};

export default RecentFiles;
