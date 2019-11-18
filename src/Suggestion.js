import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const Suggestion = (props) => {

  const performVideoChange = () => {
    props.changeVideo(props.video);
  }

  return(
    <Grid.Column onClick={performVideoChange}>
      <Image src={props.video.snippet.thumbnails.medium.url} />
    </Grid.Column>
  )
}

export default Suggestion;