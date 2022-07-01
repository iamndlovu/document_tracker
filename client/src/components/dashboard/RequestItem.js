import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const RequestItem = ({ level, request, showAll, approve, decline }) => {
	const [commit, setCommit] = useState(null);
	const [file, setFile] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/commits/${request.commit}`)
			.then(res => res.data)
			.then(data => {
				setCommit(data);
				axios
					.get(`http://localhost:5000/files/${data.file}`)
					.then(res => setFile(res.data));
				axios
					.get(`http://localhost:5000/users/${data.user}`)
					.then(res => setUser(res.data));
			})
			.catch(err => alert(`Failed to fetch commit\n ${err}`));
	}, [request]);

	return (
		<tr>
			{commit && (
				<>
					<td>
						<a
							href={`http://localhost:5000${request.path}`}
							target="_blank"
							rel="noreferrer"
						>
							{request.path.split('/').pop()}
						</a>
					</td>
					{file && (
						<>
							<td>{file.name}</td>
							<td>{file.type.toUpperCase()}</td>
						</>
					)}
					<td>{commit.message}</td>
					{(level === 'admin' || level === 'register') && (
						<td>
							{user && (
								<Link to={`/users#${commit.user}`}>@{user.username}</Link>
							)}
						</td>
					)}
					<td>{`${moment(request.createdAt).fromNow()}`}</td>
					{showAll && (
						<td>
							<button onClick={() => approve(request)}>Approve</button>
							<button>
								<a
									href={`http://localhost:5000${request.path}`}
									target="_blank"
									rel="noreferrer"
								>
									View
								</a>
							</button>
							<button onClick={() => decline(request)}>Decline</button>
						</td>
					)}
				</>
			)}
		</tr>
	);
};

export default RequestItem;
