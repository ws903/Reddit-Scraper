import React from 'react'
import Card from './Card'

class Favorites extends React.Component {

	render() {

		let cards = this.props.favorites.map((post) => 
			<Card 
				post={post} 
				handleFavorite={this.props.handleFavorite} 
				favorited={true}
			/>
		)

		return (
			<div className="Home">
				{cards}
			</div>
		)
	}

}

export default Favorites