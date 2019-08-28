import React from 'react'

class Card extends React.Component {

	render() {

		return (
			<div className="Card">

				<h5>{this.props.post.data.title}</h5>
				<img src={this.props.post.data.thumbnail} />

				<button onClick={ () => this.props.handleFavorite(this.props.post, this.props.favorited) }>{this.props.favorited ? 'Unfavorite' : 'Favorite' }</button>

			</div>
		)

	}

}

export default Card