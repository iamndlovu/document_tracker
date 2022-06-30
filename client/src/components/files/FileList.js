import React from 'react';
import RecentFiles from '../dashboard/RecentFiles';

import styles from './FileList.module.scss';

const FileList = () => {
	return (
		<section className={styles.FileList}>
			<h1 className={`heading ${styles.heading}`}>Documents</h1>
			<RecentFiles showAll={true} />
		</section>
	);
};

export default FileList;
