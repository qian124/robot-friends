import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = event => {
		this.setState({searchfield: event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => {this.setState({robots: users})});
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots =robots.filter( robot => {
			const name = robot.name.toLowerCase();
			return name.includes(searchfield.toLowerCase());
		});
		
		if(robots.length === 0) return <h1>Loading</h1>;
		else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>	
				</div>
			);
		}
	}
}

export default App;