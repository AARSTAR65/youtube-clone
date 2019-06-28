import React, { Component } from 'react';
import '../css/commentSec.css';

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
					<td><input type="text" placeholder="Your Name" className="name" onChange={this.handleChange} name="name" value={name}/></td>
					<td><input type="text" placeholder="Your Comment" className="commentBox" name="comment" value={comment} onChange={this.handleChange}/></td>
					<td><button className="commButton" onClick={(event) => {event.preventDefault();this.props.handleSubmit(this.state);this.setState(this.initialState)}}>Comment</button></td>
					<td><button className="cancelButton">Cancel</button></td>
				</tr></tbody></table>
				</div>
				</form>
			</div>

		);

	}

}

export default CommentSec;