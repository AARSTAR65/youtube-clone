import React, { Component } from 'react';
import '../css/commentList.css';

class CommentList extends Component{


	render(){
		return(
			<ul className="commentList">
		      {this.props.comments.map((row,index) => (
						<li key={index} className="userComment"><span className="user">{row.name}:</span> <span className="comment">{row.comment}</span></li>
					))}
		  </ul>
		);
	}
}

export default CommentList;

