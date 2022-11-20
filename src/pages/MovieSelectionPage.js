
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../css/MovieSelection.css";
import BrandHeader from "../components/header";
import {
  Dropdown,
  Image,
  Container,
  Button,
  Grid,
  Segment,
  Label,
} from "semantic-ui-react";


const movieOptions = [
  {
      key: '1',
      text: 'The Avengers',
      value: 'The Avengers',
      icon: 'video',
  },
  {
      key: '2',
      text: 'Godzilla',
      value: 'Godzilla',
      icon: 'video',
  },
  {
      key: '3',
      text: 'Pacific Rim',
      value: 'Pacific Rim',
      icon: 'video',
  },
]

const movies= {
     "The Avengers" : {
      title: "The Avengers",
      description: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      category: ['Future', 'Superheros'],
      directors: 'Anthony Russo, Joe Russo',
      cast: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson...',
      ratings: 'PG-13 (Intense Sci-Fi Action / Violence | A Mild Drug Reference)',
      image: "./images/avengers.jpg"
    },
    "Godzilla" : {
        title: "Godzilla",
        description: 'Ford Brody (Aaron Taylor-Johnson), a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe (Bryan Cranston). Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.',
        category: ['Monsters'],
        directors: 'Gareth Edwards',
        cast: 'Aaron Taylor-Johnson, Ken Watanabe, Elizabeth Olsen, Juliette Binoche, Sally Hawkins...',
        ratings: 'PG-13 (Intense Sequence of Destruction | Creature Violence | Mayhem)',
        image: "./images/godzilla.jpg"
      },
      "Pacific Rim" : {
        title: "Pacific Rim",
        description: "Long ago, legions of monstrous creatures called Kaiju arose from the sea, bringing with them all-consuming war. To fight the Kaiju, mankind developed giant robots called Jaegers, designed to be piloted by two humans locked together in a neural bridge. However, even the Jaegers are not enough to defeat the Kaiju, and humanity is on the verge of defeat. Mankind's last hope now lies with a washed-up ex-pilot (Charlie Hunnam), an untested trainee (Rinko Kikuchi) and an old, obsolete Jaeger.",
        category: ['Future', 'Science', 'Monsters'],
        directors: 'Guillermo del Toro',
        cast: 'Idris Elba, Charlie Hunnam, Rinko Kikuchi , Charlie Day, Ron Perlman...',
        ratings: 'PG-13 (Intense Sci-Fi Action / Violence | Brief Language)',
        image: "./images/pacific.jpg"
      }

  }

class MovieSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.default = "The Avengers"
    this.state = {
      cinemaLocation: this.props.location.state.cinemaLocation,

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
      <div className="movies-selection-page">
        <BrandHeader cinemaLocation={this.state.cinemaLocation}></BrandHeader>
        <Segment raised className='movies-page-wrapper'>
          <Grid columns={4} centered stackable>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={6} className="Title">
              <Container textAlign="left">
                <h2> {this.state.title} </h2>
                  <Container className="description">
                    <Grid stackable>
                    <Grid.Row>
                        <Grid.Column>
                          <Container>
                            <h3>Category</h3>
                            {this.state.category.map((genre) => (
                              <Label color="blue" key={genre}>
                                {genre}
                              </Label>
                            ))}
                          </Container>
                        </Grid.Column>
                        </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container>
                            <h3>Description</h3>
                            <p> {this.state.description} </p>
                          </Container>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column>
                          <Container>
                            <h3>Directors </h3>
                            <p> {this.state.directors} </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container>
                            <h3>Cast</h3>
                            <p> {this.state.cast} </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container>
                            <h3>Rating</h3>
                            <Label circular color="red">{this.state.ratings}</Label>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
              </Container>
            </Grid.Column>
            <Grid.Column width={6} className="poster-column">  
                <Container>
                  <Image className="movieImage" src={this.state.image} size="medium" />
                </Container>
                <Container>
                <Container>
                    <h3 className="instruction">STEP 1 - Select a movie</h3>   
                </Container>
                <Dropdown
                  style={{border: "2px solid orange"}}
                  placeholder='Select a movie'
                  className='movieDrop'
                  search
                  openOnFocus
                  selection
                  defaultValue={this.state.defaultMovie}
                  options={movieOptions}
                  onChange={this.movieOptions}
                />
                <Grid.Row>
                <Container>
                  <h3 className="instruction">STEP 2 - Select experience type</h3>   
                </Container>
                {/* <div className="d-grid gap-3"> */}
                  <Link
                  to={{pathname: "/seats",
                  state: {movieName: this.state.title, 
                          experienceType: "3D",
                          cinemaLocation: this.state.cinemaLocation,
                  }}}>
                    <Button inverted color="purple" className="p-2 bg-light border">3D</Button>
                  </Link>
                  <Link
                  to={{pathname: "/seats",
                  state: {movieName: this.state.title, 
                          experienceType: "IMAX",
                          cinemaLocation: this.state.cinemaLocation,
                  }}}>
                    <Button inverted color="pink" className="p-2 bg-light border">IMAX</Button>
                  </Link>
                  <Link
                  to={{pathname: "/seats",
                  state: {movieName: this.state.title, 
                          experienceType: "Regular",
                          cinemaLocation: this.state.cinemaLocation,
                  }}}>
                    <Button inverted color="violet" className="p-2 bg-light border">Regular</Button>
                  </Link>
                </Grid.Row>
                </Container>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default MovieSelectionPage;