import React, { Component } from 'react';

class CommentList extends Component{


	render(){
		return(
			<ul>
		      {this.props.comments.map((row,index) => (
						<li key={index}>{row.name}: {row.comment}</li>
					))}
		  </ul>
		);
	}
}

export default CommentList;

