import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileItem from './FileItem';
import axios from 'axios';

import styles from './RecentFiles.module.scss';

const RecentFiles = () => {
	const [files, setFiles] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:5000/files')
			.then(res => res.data)
			.then(data => setFiles(data))
			.catch(err => alert(err));
	});

	return (
		<section className={styles.RecentFiles}>
			<h2 className={styles.sectionHeader}>Recently Added Files</h2>
			<table>
				<thead>
					<tr>
						<th>File</th>
						<th>File Name</th>
						<th>File Type</th>
						<th>Description</th>
						<th>Owner</th>
						<th>Added</th>
					</tr>
				</thead>
				<tbody>
					{files && files.map(file => <FileItem key={file._id} file={file} />)}
				</tbody>
			</table>
			Number of Files: {(files && files.length) || 'counting...'}
			<div className={styles.cta}>
				<Link to={`/files`}>Show All</Link>
			</div>
		</section>
	);
};

export default RecentFiles;
