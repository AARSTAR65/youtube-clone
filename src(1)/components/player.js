import React from 'react';
import YouTube from 'react-youtube';
import '../css/player.css';
 


class Player extends React.Component {

  state = {
    show1 : 'block',
    show2 : 'none'
  }

  


  like = (event) => {

      this.setState({
        show1: 'none',
        show2: 'block'
      })
  }

  render() {
    

    const opts = {
      height: '500',
      width: '832',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <div className="videoSection">
      <YouTube
        videoId= {this.props.nowPlaying.id.videoId}
        opts={opts}
      />
      <div className="videoDesc">
      <table>
      <tbody>
      <tr>
        <td>
            <div className="descCont">
            <p className="videoTitle">{this.props.nowPlaying.snippet.title}</p>
            <p className="channeltitle">{this.props.nowPlaying.snippet.channelTitle}</p>
            </div>
        </td>
        <td>
          <div className="heartCont">
            <i className="fa fa-heart-o bHeartButton" style={{display: this.state.show1}} onClick={this.like}/>
            <i className="fa fa-heart rHeartButton" areaHidden="true" style={{display: this.state.show2 }} onClick={this.like}/>
          </div>
        </td>    
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default Player;
