import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const FileItem = ({ file, showAll, handler, toggle, setActiveEdit }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/users/${file.owner}`)
			.then(res => res.data)
			.then(data => setUser(data.username))
			.catch(err => alert(err));
	});

	const tryDelete = () => {
		const userLevel = JSON.parse(
			localStorage.getItem('dts_user')
		).level.toLowerCase();
		if (userLevel === 'staff') {
			alert('You do not have permission to perform this action');
			return;
		} else if (userLevel === 'register' || userLevel === 'admin') {
			return handler(file._id);
		}
	};

	return (
		<tr>
			<td>
				<a
					href={`http://localhost:5000${file.path}`}
					target="_blank"
					rel="noreferrer"
				>
					{file.path.split('/').pop()}
				</a>
			</td>
			<td>{file.name}</td>
			<td>{file.type.toUpperCase()}</td>
			<td>{file.description}</td>
			<td>
				<Link to={`users#${file.owner}`}>@{user}</Link>
			</td>
			<td>{`${moment(file.createdAt).fromNow()}`}</td>
			{showAll && (
				<td>
					<button
						onClick={() => {
							setActiveEdit(file._id);
							toggle();
						}}
					>
						Edit
					</button>
					<button>
						<a
							href={`http://localhost:5000${file.path}`}
							target="_blank"
							rel="noreferrer"
						>
							View
						</a>
					</button>
					<button onClick={() => tryDelete()}>Delete</button>
				</td>
			)}
		</tr>
	);
};

export default FileItem;
