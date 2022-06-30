import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Users from './pages/users';
import Categories from './pages/categories';
import Files from './pages/files';
import Logs from './pages/logs';

function App() {
	const [user, setUser] = useState(null);

	const handleLogin = nuser => {
		setUser(nuser);
		localStorage.setItem('dts_user', JSON.stringify(nuser));
	};
	const handleLougout = () => {
		setUser(null);
		localStorage.removeItem('dts_user');
	};

	useEffect(() => {
		if (localStorage.getItem('dts_user'))
			setUser(JSON.parse(localStorage.getItem('dts_user')));
		else setUser(null);
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home user={user} />} />
					<Route
						path="/login"
						element={<Login handler={handleLogin} user={user} />}
					/>
					<Route
						path="/logout"
						element={<Logout user={user} handler={handleLougout} />}
					/>
					<Route path="/register" element={<Register user={user} />} />
					<Route path="/users" element={<Users user={user} />} />
					<Route path="/categories" element={<Categories user={user} />} />
					<Route path="/logs/:id" element={<Logs user={user} />} />
					<Route path="/files" element={<Files user={user} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
