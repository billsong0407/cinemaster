
import React, { Component } from 'react'
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

const movies= {
     "Avengers" : {
      title: "Avengers: Final Game",
      description: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      category: 'Future, Superheros',
      directors: 'Anthony Russo, Joe Russo',
      cast: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson...',
      ratings: '12 +',
      image: "/images/avengers.jpg"
    }
  }

class MovieSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.default = "Avengers"
    this.state = {
      defaultMovie : this.default,
      title: movies[this.default].title,
      description: movies[this.default].description,
      category: movies[this.default].category,
      directors: movies[this.default].directors,
      cast: movies[this.default].cast,
      ratings: movies[this.default].ratings,
      image: movies[this.default].image
    };
  }

  

  movieOptions = (e, data) => {
    const val = data.value
    const movie = movies[val]
    this.setState({
      title: movie.title,
      description: movie.description,
      category: movie.category,
      directors: movie.directors,
      cast: movie.cast,
      ratings: movie.ratings,
      image: movie.image
    });
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
                <h2> {this.state.title} </h2>
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
                            <p> {this.state.category}</p>
                          </Container>
                        </Grid.Column>
                        </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h3>Description</h3>
                            <p> {this.state.description} </p>
                          </Container>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Directors: </h4>
                            <p> {this.state.directors} </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Cast</h4>
                            <p> {this.state.cast} </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Rating</h4>
                            <p> {this.state.ratings} </p>
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
            
                <Image src={this.state.image} size="large" />
                  
                </Container>
                </Grid.Row>
                <Dropdown
                        placeholder='Select a movie'
                        className='movieDrop'
                        search
                        clearable
                        openOnFocus
                        selection
                        defaultValue={this.state.defaultMovie}
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