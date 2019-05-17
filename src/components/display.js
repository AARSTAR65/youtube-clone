import React, { Component } from 'react';
import '../css/display.css';
class Display extends Component {

	render() {

		const { videoList } = this.props

		const rows = videoList.map((row, index) => {

			return (

				<li key={index} onClick={() => this.props.playVideo(index)} >
					<div className="listItem" >
						<table>
							<tr>
								<td className="thumb">
									<div className="thumbnailContainer" ><img src={row.snippet.thumbnails.default.url} className="thumbnail" /></div>
								</td>
								<td>
									<div className="thumbnailDetail">
										<div className="thumbnailTitle" >{row.snippet.title}</div>
										<div className="thumbnailChannel" >{row.snippet.channelTitle}</div>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</li>
			);

		})

		return <div>{rows}</div>

	}

}

export default Display;