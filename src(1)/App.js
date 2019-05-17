import React, { Component } from 'react';
import Display from './components/search.js';
import './App.css';
import NavigationBar from './components/nav.js';
import Player from './components/player.js';
import CommentSec from './components/commentSec.js';

class App extends Component {

  state = {
    comments: [],
    data: [],
    nowPlaying: { id: { videoId: '' }, snippet: { title: '', channelTitle: '' } }

  }

  constructor() {
    super()

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
    const url2 = '&key=AIzaSyDvuFpxdGB2fOHCUfLolCT_KobZrC37Erg';
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
  }

  handleSubmit = comment => {
    this.setState({ comments: [...this.state.comments, comment] })
  }

  playVideo = (index) => {
    this.setState({
      nowPlaying: this.state.data[index]
    })
  }

  render() {

    return (
      <div>
        <NavigationBar search={this.search} viddata={this.state.data} />
        <div className="List">
          <ul className="videos">
            <Display videoList={this.state.data} playVideo={this.playVideo} />
          </ul>
        </div>
        <div className="videoPlayer">
          <Player nowPlaying={this.state.nowPlaying} />
          <CommentSec handleSubmit={this.handleSubmit} comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;









