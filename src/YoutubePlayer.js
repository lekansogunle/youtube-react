import React, {Component} from 'react';
import Suggestion from './Suggestion';
import {Form, Container, Embed, Divider, Grid} from 'semantic-ui-react';

class YoutubePlayer extends Component{
  constructor(){
    super()
    this.state = {
      query: 'Cars',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyCYchlTicuWz3_usJZyluJKkW0S6OAoh7E&q=`,
      mainVideo: '',
      suggestedVideos: []
    }
    this.getVideos = this.getVideos.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
  }

  componentDidMount(){
    this.getVideos(this.state.query)
  }

  getVideos(searchQuery){
    let url = this.state.url + searchQuery;
    return (
      fetch(url).then(response => response.json())
      .then((data) => {
        let firstVideo = data.items.shift();
        this.setState({...this.state, mainVideo: firstVideo.id.videoId, suggestedVideos: data.items})
      })
    )
  }

  handleChange(e){
    this.setState({...this.state, query: e.target.value});
  }

  searchVideos(e){
    e.preventDefault();
    this.getVideos(this.state.query);
  }

  changeVideo(video){
    this.setState({...this.state, mainVideo: video.id.videoId})
  }
    
  render(){
    return(
      <div>
        <Container textAlign='center' >
          <Form onSubmit={this.searchVideos} size='small '>
            <Form.Group>
              <Form.Input placeholder='serach me' width={6} onChange={this.handleChange} />
              <Form.Button content='Search Videos' />
            </Form.Group>
          </Form>

          <Embed
            id={this.state.mainVideo}
            placeholder='https://middle.pngfans.com/20190706/xf/youtube-logo-small-png-logo-youtube-play-buttons-c-38fa5d33e28531a8.jpg'
            source='youtube'
          />
          <Divider horizontal>
            Suggestions
          </Divider>

          <Grid doubling columns={3}>
            {
              this.state.suggestedVideos.map((video) => <Suggestion video={video} changeVideo={this.changeVideo} /> )
            }
          </Grid>
        </Container>
      </div>
    )
  }
}

export default YoutubePlayer;