import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import ActivityList from '../components/dashboard/RecentActivity';

import styles from '../components/dashboard/RecentActivity.module.scss';

const Logs = ({ user }) => {
	const [activities, setActivities] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/users/${slug}`)
			.then(user => user.data.logs)
			.then(logs => setActivities(logs));
	}, [slug]);
	return (
		<Layout title="History - Document Tracker" user={user}>
			<h1 className={'heading ' + styles.heading}>User Logs</h1>
			<main className={styles.Logs}>
				{(activities && <ActivityList activities={activities} />) || (
					<div className={styles.loading}>Loading...</div>
				)}
			</main>
		</Layout>
	);
};

export default Logs;
