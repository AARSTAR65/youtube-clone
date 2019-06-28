import React, {Component} from 'react';
import '../css/nav.css';

class NavigationBar extends Component{

	constructor(props){
		super(props);

		this.initialState = {
			item:''
		}

		this.state = this.initialState
	}

	handleChange = event => {
		const { value } = event.target

		this.setState({
			item: value
		})
	}

	searchVideo = (event) => {
		event.preventDefault();
		this.props.search(this.state.item)
		this.setState(this.initialState)
	}

	render(){

		const { item } = this.state;

		return(

            <nav className = "nav">
                <div className="brand"><div className="you">You</div><div className="tube">Tube</div>-Clone</div>
				<form className="form">
					<input type="text" placeholder="Search" className="searchBox" name="item" value={item} onChange={this.handleChange}/>
					<button className="searchButton" onClick={this.searchVideo}>Search</button>
				</form>
			</nav>

		);
	}
}

export default NavigationBar;