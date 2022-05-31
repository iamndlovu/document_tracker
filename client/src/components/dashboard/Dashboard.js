import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import RegisterDashboard from './RegisterDashboard';
import StaffDashboard from './StaffDashboard';

const Dashboard = ({ user }) => {
	switch (user.level.toLowerCase()) {
		case 'admin':
			return <AdminDashboard user={user} />;

		case 'register':
			return <RegisterDashboard user={user} />;

		case 'staff':
			return <StaffDashboard user={user} />;

		default:
			<Navigate to="/login" replace />;
	}
};

export default Dashboard;
