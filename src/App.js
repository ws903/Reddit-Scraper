import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from './Home'
import Favorites from './Favorites'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = { posts: [],
						favorites: [] 
					}
	}

	componentDidMount() {
		fetch("https://www.reddit.com/r/EarthPorn/top.json?limit=20")
		.then(response => response.json())
		.then(json => this.setState({
			posts: json.data.children
		}))
	}

	handleFavorite = (post, favorited) => {

		let new_arr = this.state.favorites

		if(favorited) {
			new_arr = this.state.favorites.filter(item => item != post)	
		} else {
			new_arr = [...this.state.favorites, post]
		}

		this.setState({ favorites: new_arr })

	}

	render() {

		return (
			<div className="App">

				<Router>
					<div>

						<nav className="navbar main">
							<ul className="navbar-nav">
								<li><Link to={'/'}>Home</Link></li>
								<li><Link to={'/favorites'}>Favorites</Link></li>
							</ul>
						</nav>

						<Switch>
							<Route 
								exact path='/' 
								render={() => (
									<Home
										posts={this.state.posts}
										handleFavorite={this.handleFavorite}
									/>
								)}
							/>
							<Route 
								path='/favorites'
								render={() => (
									<Favorites
										favorites={this.state.favorites}
										handleFavorite={this.handleFavorite}
									/>
								)}
							/>
						</Switch>

					</div>
				</Router>

			</div>
		)

	}

}

export default App
