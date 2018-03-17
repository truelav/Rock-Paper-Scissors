import React, { Component } from 'react';
import Chat from '../components/Chat'
import io from 'socket.io-client'


class App extends Component {
	constructor(){
		super()
		this.state = {
			
		}
    this.handleStartGame = this.handleStartGame.bind(this);
	}

	
	componentDidMount() {
		const socket = io.connect('http://localhost:9001')
			// socket.on('this', (data) => {
			// 	console.log(data)
		// })
		socket.emit('connection')
	}

	handleStartGame() {

	}

	render() {
	return (
			<div>
				Hello from React! hell
				<Chat />
				<button className="startGame" onClick={this.handleStartGame}>Start Game</button>
			</div>
		)
	}
}

export default App;