import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Users from './pages/users';

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
		bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi quisquam doloremque pariatur perferendis, aspernatur atque nisimollitia iure quod doloribus, dicta, suscipit ad cupiditate quam libero possimus. Ad consectetur, iste perspiciatis non nam recusandae dicta ex facilis molestias unde voluptas vitae! Nemo sapiente veniam, corporis dolorum eaque quod nisi voluptates harum explicabo dignissimos cumque hic, blanditiis quam laboriosam ea.',
		level: 'admin',
		picture: 'el.jpg',
		logs: [
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
			`${Math.round(Math.random() * 200029999120001098176)}`,
		],
		updatedAt: '12/05/22',
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home user={user} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register user={user} />} />
					<Route path="/users" element={<Users user={user} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
