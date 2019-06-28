import React from 'react';
import YouTube from 'react-youtube';
import '../css/player.css';

class Player extends React.Component {
  render() {
    const { nowPlaying } = this.props;
    const opts = {
      height: this.props.playerSize.height,
      width: this.props.playerSize.width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <YouTube
          videoId={nowPlaying.id.videoId}
          opts={opts}
        />
        <div className="title">{nowPlaying.snippet.title}</div>
        <div className="channelTitle">{nowPlaying.snippet.channelTitle}</div>
      </div>
    );
  }
}

export default Player;
