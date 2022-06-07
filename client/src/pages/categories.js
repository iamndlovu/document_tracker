import React from 'react';
import CategoryList from '../components/categories/CategoryList';
import Layout from '../components/Layout';

const Categories = ({ user }) => {
	return (
		<Layout title="Document Categories - Document Tracker" user={user}>
			<CategoryList />
		</Layout>
	);
};

export default Categories;
