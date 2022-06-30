import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const FileItem = ({ file }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/users/${file.owner}`)
			.then(res => res.data)
			.then(data => setUser(data.username))
			.catch(err => alert(err));
	});

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
		</tr>
	);
};

export default FileItem;
