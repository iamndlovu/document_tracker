import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import styles from './RecentFiles.module.scss';

const RecentFiles = () => {
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
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5.pdf">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						<td>
							<Link
								to={`users/${Math.round(Math.random() * 12292010008172820101)}`}
							>
								@{`loremipsum`}
							</Link>
						</td>
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5.pdf">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						<td>
							<Link
								to={`users/${Math.round(Math.random() * 12292010008172820101)}`}
							>
								@{`loremipsum`}
							</Link>
						</td>
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5.pdf">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						<td>
							<Link
								to={`users/${Math.round(Math.random() * 12292010008172820101)}`}
							>
								@{`loremipsum`}
							</Link>
						</td>
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5.pdf">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						<td>
							<Link
								to={`users/${Math.round(Math.random() * 12292010008172820101)}`}
							>
								@{`loremipsum`}
							</Link>
						</td>
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
					<tr>
						<td>
							<a href="/files/1368664hgj7jd5.pdf">file_abc.pdf</a>
						</td>
						<td>File ABC</td>
						<td>PDF</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							totam ratione sit facere illum iusto eveniet ad vel iure unde.
						</td>
						<td>
							<Link
								to={`users/${Math.round(Math.random() * 12292010008172820101)}`}
							>
								@{`loremipsum`}
							</Link>
						</td>
						<td>{`${moment(new Date()).fromNow()}`}</td>
					</tr>
				</tbody>
			</table>
			<div className={styles.cta}>
				<Link to={`/files`}>Show more</Link>
			</div>
		</section>
	);
};

export default RecentFiles;
