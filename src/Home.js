import React from 'react'
import Card from './Card'

class Home extends React.Component {

	render() {

		let cards = this.props.posts.map((post) => <Card
														post={post} 
														handleFavorite={this.props.handleFavorite}
													/>)

		return (
			<div className="Home">
				{cards}
			</div>
		)
	}

}

export default Home