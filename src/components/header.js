import React, { Component } from 'react'
import { Menu, Button, Icon, Segment, Grid } from 'semantic-ui-react'
import '../css/header.css';

class BrandHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      cinemaLocation: props.cinemaLocation,
    }
  }
  render() {
    return (
        <Grid columns={3} className="brand-container" padded verticalAlign='middle'>
          <Grid.Column textAlign='left'>
            <Button inverted color='blue' icon labelPosition='left'>
              Back
              <Icon name='left arrow' />
            </Button>
          </Grid.Column>
          <Grid.Column>
            <h3 className="brand-name">Cinemaster</h3>
          </Grid.Column>
          <Grid.Column style={{color: "white"}} textAlign='right'>
            {this.state.cinemaLocation}
          </Grid.Column>
        </Grid>
    )
  }
}

export default BrandHeader;