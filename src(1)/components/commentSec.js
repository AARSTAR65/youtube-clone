import React, { Component } from 'react';
import '../css/commentSec.css';
import CommentList from './CommentList.js';

class CommentSec extends Component {

	constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      comment: '',
    }

    this.state = this.initialState
  }

	handleChange = event => {
		const { name, value } = event.target
	
		this.setState({
			[name]: value,
		})
	}


	render(){
		const { name, comment } = this.state;
		
		return(

			<div className="commentCont">
			<p className="commHead">Comments</p>
			<form className="commentform" >

				<div className="enterComment">
				<table><tbody><tr>
					<td><input type="text" placeholder="Your Name" className="comment" onChange={this.handleChange} name="name" value={name}/></td>
					<td><textarea placeholder="Your Comment" className="channelName" name="comment" value={comment} onChange={this.handleChange}></textarea></td>
				</tr></tbody></table>
				</div>
				<div className="buttons">	
					<button className="commButton" onClick={(event) => {event.preventDefault();this.props.handleSubmit(this.state);this.setState(this.initialState)}}>Comment</button>
					<button className="cancelButton">Cancel</button>
				</div>
				</form>
				<CommentList comments={this.props.comments} />
			</div>

		);

	}

}

export default CommentSec;