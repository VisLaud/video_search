import React, { Component } from "react";
import Search from "./Search";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit("Chilled Cow");
  }

  onTermSubmit = async term => {
    const request = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: request.data.items,
      selectedVideo: request.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <Search onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
