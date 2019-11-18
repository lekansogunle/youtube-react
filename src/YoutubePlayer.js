import React, {Component} from 'react';
import {Form, Container} from 'semantic-ui-react';

class YoutubePlayer extends Component{

  render(){
    return(
      <div>
        <Container textAlign='center' >
          <Form size='small '>
            <Form.Group>
              <Form.Input placeholder='serach me' width={6} />
              <Form.Button content='Search Videos' />
            </Form.Group>
          </Form>
        </Container>
      </div>
    )
  }
}

export default YoutubePlayer;