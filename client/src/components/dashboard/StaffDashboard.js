import React from 'react';
import UserOverview from './UserOverview';
import RecentActivity from './RecentActivity';
import RecentFiles from './RecentFiles';
import PushRequests from './PushRequests';
import AdminActions from './AdminActions';

import styles from './StaffDashboard.module.scss';

const StaffDashboard = ({ user }) => {
	const level = user.level.toLowerCase();
	return (
		<main className={styles.StaffDashboard}>
			<div className={styles.overview}>
				<UserOverview user={user} />
			</div>
			<div className={styles.activity}>
				<div className={styles.container}>
					{/* <RecentActivity activityIDs={user.logs} userID={user._id} /> */}
				</div>
			</div>
			{level === 'admin' && (
				<div className={styles.adminActions}>
					<AdminActions />
				</div>
			)}
			<div className={styles.reqs}>
				<PushRequests user={user} />
			</div>
			<div className={styles.files}>
				<RecentFiles />
			</div>
		</main>
	);
};

export default StaffDashboard;
