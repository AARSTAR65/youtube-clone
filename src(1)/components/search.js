import React, { Component } from 'react';
import '../css/search.css';
class Display extends Component{


	render(){

		const { videoList} = this.props

		const rows = videoList.map((row, index) => {

			return(

				<li key={index}>
					<div className="listItems" onClick={() => this.props.playVideo(index)}>
						<table>
							<tbody>
								<tr>
									<td>
										<div className="thumbnailContainer">
											<img src={row.snippet.thumbnails.default.url} className="thumbnail" />
										</div>
									</td>
									<td>
										<div className="thumbnailDetail">
											<div className="thumbnailTitle">{row.snippet.title}</div>
											<div className="thumbnailChannel">{row.snippet.channelTitle}</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
				);

			})

			return <div>{rows}</div>

	}

} 

export default Display;