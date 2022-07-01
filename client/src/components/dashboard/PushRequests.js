import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RequestItem from './RequestItem';
import axios from 'axios';

import styles from './RecentFiles.module.scss';

const PushRequests = ({ user, showAll }) => {
	const level = user.level.toLowerCase();
	const [requests, setRequests] = useState(null);

	const approve = async req => {
		try {
			const commRes = await axios.get(
				`http://localhost:5000/commits/${req.commit}`
			);
			const commit = await commRes.data;

			const updateData = new FormData();
			updateData.append('commit', req.commit);
			updateData.append('path', req.path);

			axios
				.post(`http://localhost:5000/files/update/${commit.file}`, updateData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				})
				.then(() => {
					const statusData = new FormData();
					statusData.append('status', 'approved');

					axios.post(
						`http://localhost:5000/push/update/${req._id}`,
						statusData,
						{
							headers: { 'Content-Type': 'multipart/form-data' },
						}
					);
				})
				.then(() =>
					setRequests(prev => prev.filter(request => request._id !== req._id))
				)
				.catch(err => alert(`OH NO!\n ${err}`));
		} catch (err) {
			alert('Failed to approve push request\n' + err);
		}
	};

	const decline = req => {
		const statusData = new FormData();
		statusData.append('status', 'declined');

		axios
			.post(`http://localhost:5000/push/update/${req._id}`, statusData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then(() =>
				setRequests(prev => prev.filter(request => request._id !== req._id))
			)
			.catch(err => alert('Failed to decline push request\n' + err));
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/push')
			.then(res =>
				res.data.filter(req => req.status.toLowerCase() === 'pending')
			)
			.then(pending => {
				if (level === 'staff') {
					let userReqs = [];
					pending.forEach(req => {
						axios
							.get(`http://localhost:5000/commits/${req.commit}`)
							.then(commit => {
								if (
									commit.data.user === user._id &&
									((!showAll && userReqs.length < 7) || showAll)
								)
									userReqs.push(req);
							});
					});
					setRequests(userReqs);
				} else {
					if (showAll) setRequests(pending);
					else {
						if (pending.length < 7) setRequests(pending);
						else {
							let newReqs = [];
							for (let i = 0; i < 6; i++) {
								newReqs.push(pending[i]);
							}
							setRequests(newReqs);
						}
					}
				}
			})
			.catch(err => alert('Failed to fetch push requests:\n ' + err));
	});

	return (
		<section className={styles.PushRequests}>
			{!showAll && (
				<h2 className={styles.sectionHeader}>Pending Push Requests</h2>
			)}
			<table>
				<thead>
					<tr>
						<th>File</th>
						<th>File Name</th>
						<th>File Type</th>
						<th>Message</th>
						{(level === 'admin' || level === 'register') && <th>User</th>}
						<th>Added</th>
						{showAll && (level === 'admin' || level === 'register') && (
							<th>Actions</th>
						)}
					</tr>
				</thead>
				<tbody>
					{requests &&
						requests.map(req => (
							<RequestItem
								key={req._id}
								level={level}
								request={req}
								showAll={showAll}
								approve={approve}
								decline={decline}
							/>
						))}
				</tbody>
			</table>
			{!showAll && (
				<div className={styles.cta}>
					<Link to={`/push-requests`}>Show more</Link>
				</div>
			)}
		</section>
	);
};

export default PushRequests;
