import React from 'react';
import { Navigate } from 'react-router-dom';
import StaffDashboard from './StaffDashboard';

const Dashboard = ({ user }) => {
	switch (user.level.toLowerCase()) {
		case 'admin':
			return <StaffDashboard user={user} />;

		case 'register':
			return <StaffDashboard user={user} />;

		case 'staff':
			return <StaffDashboard user={user} />;

		default:
			<Navigate to="/login" replace />;
	}
};

export default Dashboard;
