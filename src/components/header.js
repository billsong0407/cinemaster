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
        // <Menu widths={3} className="brand-container" borderless>
        //   <Menu.Item className='back-button'>
        //     <Button inverted color='blue' icon labelPosition='left'>
        //       Back
        //       <Icon name='left arrow' />
        //     </Button>
        //   </Menu.Item>
        //   <Menu.Item>
        //     <h3 className="brand-name">Cinemaster</h3>
        //   </Menu.Item>
        //   <Menu.Item style={{color: "white"}} className="location-block">{this.state.cinemaLocation}</Menu.Item>
        // </Menu>
        // <Segment.Group className="brand-container" horizontal>
        //   <Segment textAlign='left'>Left</Segment>
        //   <Segment>Middle</Segment>
        //   <Segment textAlign='right'>{this.state.cinemaLocation}</Segment>
        // </Segment.Group>
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