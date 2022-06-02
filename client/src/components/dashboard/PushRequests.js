import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import styles from './RecentFiles.module.scss';

const PushRequests = ({ user }) => {
	const level = user.level.toLowerCase();

	// TODO: Get push requests list
	// IF level === 'staff'
	// only show user's requests
	// ELSE
	// show all users's requests

	return (
		<section className={styles.PushRequests}>
			<h2 className={styles.sectionHeader}>Pending Push Requests</h2>
			<table>
				<thead>
					<tr>
						<th>File</th>
						<th>File Name</th>
						<th>File Type</th>
						<th>Description</th>
						{(level === 'admin' || level === 'register') && <th>User</th>}
						<th>Added</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						{(level === 'admin' || level === 'register') && (
							<td>
								<Link
									to={`users/${Math.round(
										Math.random() * 12292010008172820101
									)}`}
								>
									@{`loremipsum`}
								</Link>
							</td>
						)}
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						{(level === 'admin' || level === 'register') && (
							<td>
								<Link
									to={`users/${Math.round(
										Math.random() * 12292010008172820101
									)}`}
								>
									@{`loremipsum`}
								</Link>
							</td>
						)}
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						{(level === 'admin' || level === 'register') && (
							<td>
								<Link
									to={`users/${Math.round(
										Math.random() * 12292010008172820101
									)}`}
								>
									@{`loremipsum`}
								</Link>
							</td>
						)}
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						{(level === 'admin' || level === 'register') && (
							<td>
								<Link
									to={`users/${Math.round(
										Math.random() * 12292010008172820101
									)}`}
								>
									@{`loremipsum`}
								</Link>
							</td>
						)}
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						{(level === 'admin' || level === 'register') && (
							<td>
								<Link
									to={`users/${Math.round(
										Math.random() * 12292010008172820101
									)}`}
								>
									@{`loremipsum`}
								</Link>
							</td>
						)}
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
				</tbody>
			</table>
			<div className={styles.cta}>
				<Link to={`/push-requests`}>Show more</Link>
			</div>
		</section>
	);
};

export default PushRequests;
