import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Users from './pages/users';
import Categories from './pages/categories';
import Logs from './pages/logs';
import axios from 'axios';

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:5000/users/')
			.then(res => res.data)
			.then(users => users.filter(user => user.level.toLowerCase() === 'admin'))
			.then(admins => admins[0])
			.then(admin => setUser(admin));
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home user={user} />} />
					<Route path="/login" element={<Login user={user} />} />
					<Route path="/register" element={<Register user={user} />} />
					<Route path="/users" element={<Users user={user} />} />
					<Route path="/categories" element={<Categories user={user} />} />
					<Route path="/logs/:id" element={<Logs user={user} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
