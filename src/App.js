import React, { Component } from 'react';
import './css/App.css';
import NavigationBar from './components/nav.js';
import Display from './components/display.js';
import Player from './components/player.js';
import CommentSec from './components/commentSec.js';
import CommentList from './components/CommentList.js';

class App extends Component {

  state = {
    comments: [],
    data: [],
    nowPlaying: { id: { videoId: '' }, snippet: { title: '', channelTitle: '' } }
  }
  constructor(props) {
    super(props);

    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=&key=AIzaSyDvuFpxdGB2fOHCUfLolCT_KobZrC37Erg';
    console.log(url);

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.items,
          nowPlaying: result.items[0]
        })
      })
  }
  search = (query) => {
    const url1 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
    const url2 = '&key=AIzaSyDCBy70V9Wn7gXJ5Jp81x5E0pzHjZa8ELk';
    const url = url1 + query + url2;
    console.log(url);

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.items,
          nowPlaying: result.items[0]
        })
      })
    console.log(this.state.nowPlaying.id.videoId);
  }

  handleSubmit = comment => {
    this.setState({ comments: [...this.state.comments, comment] })
  }

  playVideo = (index) => {
    this.setState({ nowPlaying: this.state.data[index] });
  }

  render() {

    return (
      <div>
        <NavigationBar search={this.search} />
        <div className="container">
          <div className="list">
            <ul className="videos">
              <Display videoList={this.state.data} playVideo={this.playVideo} />
            </ul>
          </div>
          <div className="videoPlayer">
            <div className="playerBack">
              <Player nowPlaying={this.state.nowPlaying} />
            </div>
            <CommentSec handleSubmit={this.handleSubmit} />
				    <CommentList comments={this.state.comments} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;