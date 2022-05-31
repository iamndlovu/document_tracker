import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

import './App.css';

function App() {
	// eslint-disable-next-line
	const [user, setUser] = useState({
		_id: `${Math.round(Math.random() * 20002999912)}${Math.round(
			Math.random() * 990890089
		)}`,
		fullName: 'Pardon Ndlovu',
		username: 'iamndlovu',
		email: 'pndlovu@gmail.com',
		password: 'admin@admin',
		bio: 'Another system user',
		level: 'staff',
		picture: 'el.jpg',
		logs: [
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
		],
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home user={user} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
