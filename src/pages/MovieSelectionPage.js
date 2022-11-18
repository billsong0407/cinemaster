import React, { Component } from "react";
import "../css/MovieSelection.css";
import {
  Dropdown,
  Image,
  Container,
  Button,
  Grid,
  Segment,
} from "semantic-ui-react";

const movieOptions = [
    {
        key: '1',
        text: 'Avengers',
        value: 'Avengers',
    },
    {
        key: '2',
        text: 'Godzilla',
        value: 'Godzilla',
    },
    {
        key: '3',
        text: 'pacific rim',
        value: 'pacific rim',
    },
]

class MovieSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNum: "",
      cardHolder: "",
      cvv: "",
      billingAddress: "",
    };
  }

  render() {
    return (
      <div className="movieSelection">
        <Segment raised padded>
        <Grid columns={1}><Button>Back</Button></Grid>
          <Grid columns={2}>
            <Grid.Column className="Title">
              <Container
                textAlign="left"
                style={{
                  padding: "5vh 20vh 5vh 20vh",
                }}
              >
                <h2> Avengers: Final Game </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Container className="description">
                    <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h3>Category</h3>
                            <p> Future, Superheros </p>
                          </Container>
                        </Grid.Column>
                        </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h3>Description</h3>
                            <p> Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe. </p>
                          </Container>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Directors: </h4>
                            <p> Anthony Russo, Joe Russo </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Cast</h4>
                            <p> Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson... </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Suitable age</h4>
                            <p> 12 and above </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </div>
              </Container>
            </Grid.Column>
            <Grid.Column className="paymentInfo">
              <Container
                textAlign="left"
                style={{
                  padding: "5vh 25vh 5vh 20vh",
                }}
              >
                
                <Grid.Row>
                <Container textAlign="center">
            
                <Image src="/images/avengers.jpg" size="large" />
                  
                </Container>
                </Grid.Row>
                <Dropdown
                        placeholder='Select a movie'
                        className='movieDrop'
                        search
                        clearable
                        openOnFocus
                        selection
                        options={movieOptions}
                        onChange={this.movieOptions}
                    />
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default MovieSelectionPage;