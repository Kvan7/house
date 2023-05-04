import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

	const [message, setMessage] = useState('')

	useEffect(() => {
		fetch('/api/test')
			.then(res => res.json())
			.then(res => {
				setMessage(res);
				// console.log(res);
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to restart.
				</p>
				{
					(typeof message === 'undefined') ?
						<p>Loading...</p>
						:
						<p>{message['message']}</p>
				}
			</header>
		</div>
	);
}

export default App;
