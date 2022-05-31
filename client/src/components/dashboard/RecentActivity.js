import React from 'react';
import { Link } from 'react-router-dom';

import styles from './RecentActivity.module.scss';

const RecentActivity = ({ activities, userID }) => {
	return (
		<section className={styles.RecentActivity}>
			<h2 className={styles.sectionHeader}>Recent Activity</h2>
			<ul>
				<li>
					<Link to={`activities/${activities[0]}`}>{activities[0]}</Link> -
					modified fileABC
				</li>
				<li>
					<Link to={`activities/${activities[1]}`}>{activities[1]}</Link> -
					modified fileABC
				</li>
				<li>
					<Link to={`activities/${activities[2]}`}>{activities[2]}</Link> -
					modified fileABC
				</li>
				<li>
					<Link to={`activities/${activities[3]}`}>{activities[3]}</Link> -
					modified fileABC
				</li>
				<li>
					<Link to={`activities/${activities[4]}`}>{activities[4]}</Link> -
					modified fileABC
				</li>
			</ul>
			{userID && (
				<div className={styles.cta}>
					<Link to={`${userID}/activity`} role="button">
						See All
					</Link>
				</div>
			)}
		</section>
	);
};

export default RecentActivity;
