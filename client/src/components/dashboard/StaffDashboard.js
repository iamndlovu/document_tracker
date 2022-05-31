import React from 'react';
import UserOverview from './UserOverview';

import styles from './StaffDashboard.module.scss';
import RecentActivity from './RecentActivity';
import RecentFiles from './RecentFiles';

const StaffDashboard = ({ user }) => {
	return (
		<main className={styles.StaffDashboard}>
			<div className={styles.overview}>
				<UserOverview user={user} />
			</div>
			<div className={styles.activity}>
				<div className={styles.container}>
					<RecentActivity activities={user.logs} userID={user._id} />
				</div>
			</div>
			<div className={styles.files}>
				<RecentFiles />
			</div>
		</main>
	);
};

export default StaffDashboard;
