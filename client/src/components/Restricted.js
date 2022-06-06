import React from 'react';
import { Link } from 'react-router-dom';

const Restricted = () => {
	return (
		<div>
			<p>Sorry, you do not have permission to access this section.</p>
			<div>
				<Link to="/">Back To Homepage</Link>
			</div>
		</div>
	);
};

export default Restricted;
