import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/home.css';
import { Dropdown, Button, Segment, Container, Icon } from 'semantic-ui-react';

const locationOptions = [
    {
        key: '1',
        text: 'North York, Ontario, Canada',
        value: 'North York, Ontario, Canada',
        image: {avatar: true, src: "/images/location.png"},
    },
    {
        key: '2',
        text: 'Toronto, Ontario, Canada',
        value: 'Toronto, Ontario, Canada',
        image: {avatar: true, src: "/images/location.png"},
    },
    {
        key: '3',
        text: 'Markham, Ontario, Canada',
        value: 'Markham, Ontario, Canada',
        image: {avatar: true, src: "/images/location.png"},
    },
    {
        key: '4',
        text: 'Hamilton, Ontario, Canada',
        value: 'Hamilton, Ontario, Canada',
        image: {avatar: true, src: "/images/location.png"},
    },
    {
        key: '5',
        text: 'Vancouver, British Columbia, Canada',
        value: 'Vancouver, British Columbia, Canada',
        image: {avatar: true, src: "/images/location.png"},
    },
]

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemaLocation: "",
        };
        // bind upcoming state changes
        this.onLocationChange = this.onLocationChange.bind(this);
    }

    onLocationChange(e, {value}){
        this.location = value;
        this.setState({
            cinemaLocation: value,
        })
    };

    render() {
        return (
        <>
        <Container fluid className="homeContainer">
            <h1 className='title'>Cinemaster</h1>
            <Container className='pick-container'>
                <Segment raised style={{background: `none`}}>
                    <Dropdown
                        placeholder='Select a location'
                        className='locationDropDown'
                        search
                        clearable
                        openOnFocus
                        selection
                        options={locationOptions}
                        onChange={this.onLocationChange}
                    />
                    <Button className="locationButton" inverted color='orange'>
                        <Link 
                        to={{pathname: "/movies",
                        state: {cinemaLocation: this.state.cinemaLocation
                        }}}>
                            Next {" "}
                            <Icon name='arrow right' />
                        </Link>
                    </Button>
                </Segment>
            </Container>
        </Container>
        </>
        )
    }
}


export default HomePage;