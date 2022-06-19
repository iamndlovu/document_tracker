import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import fetchById from '../../modules/fetchById';

import styles from './RecentActivity.module.scss';

const RecentActivity = ({ activityIDs = [], userID }) => {
	const [activities, setActivities] = useState([]);

	// useEffect(() => {
	activityIDs.forEach(id => {
		fetchById('activities', id).then(activities =>
			setActivities(state => [...state, activities])
		);
	});
	// }, [activityIDs]);

	return (
		<section className={styles.RecentActivity}>
			{userID && <h2 className={styles.sectionHeader}>Recent Activity</h2>}
			{
				activities.length > 0 && (
					<ul>
						{activities.map(activity => (
							<li key={activity.reference}>
								<Link to={`/activities/${activity._id}`}>{activity._id}</Link> -
								modified fileABC
							</li>
						))}
					</ul>
				) /*|| <Loading message={'No activity'} />*/
			}
			{userID && activities.length > 5 && (
				<div className={styles.cta}>
					<Link to={`/logs/${userID}`} role="button">
						See All
					</Link>
				</div>
			)}
		</section>
	);
};

export default RecentActivity;
