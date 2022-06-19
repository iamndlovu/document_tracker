import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import ActivityList from '../components/dashboard/RecentActivity';
import Loading from '../components/Loading';

import styles from '../components/dashboard/RecentActivity.module.scss';

const Logs = ({ user }) => {
	const [activities, setActivities] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/users/${id}`)
			.then(user => user.data.logs)
			.then(logs => setActivities(logs));
	}, [id]);

	return (
		<Layout title="History - Document Tracker" user={user}>
			<h1 className={'heading ' + styles.heading}>User Logs</h1>
			<main className={styles.Logs}>
				{(activities && <ActivityList activityIDs={activities} />) || (
					<Loading message={'Loading...'} />
				)}
			</main>
		</Layout>
	);
};

export default Logs;
