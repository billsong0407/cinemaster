import React, {Component} from 'react';
import '../css/home.css';
import { Dropdown, Button, Segment } from 'semantic-ui-react'

const locationOptions = [
    {
        key: '1',
        text: 'North York, Ontario, Canada',
        value: 'North York',
        image: {avatar: true, src: "/images/pin.png"},
    },
    {
        key: '2',
        text: 'Toronto, Ontario, Canada',
        value: 'Toronto, Ontario, Canada',
        image: {avatar: true, src: "/images/pin.png"},
    },
    {
        key: '3',
        text: 'Markham, Ontario, Canada',
        value: 'Markham, Ontario, Canada',
        image: {avatar: true, src: "/images/pin.png"},
    },
    {
        key: '4',
        text: 'Hamilton, Ontario, Canada',
        value: 'Hamilton, Ontario, Canada',
        image: {avatar: true, src: "/images/pin.png"},
    },
    {
        key: '5',
        text: 'Vancouver, British Columbia, Canada',
        value: 'Vancouver, British Columbia, Canada',
        image: {avatar: true, src: "/images/pin.png"},
    },
]

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
        };

        // bind upcoming state changes
        this.onLocationChange = this.onLocationChange.bind(this);
    }

    onLocationChange(e, {value}){
        e.persist();
        this.location = value;
        console.log(this.location);
    };

    render() {
        return (
        <>
            <p>Home Page</p>
            <Segment color='teal' raised>
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
                <Button className="locationButton" inverted color='blue' content='Next' icon='right arrow' labelPosition='right' />
            </Segment>
        </>
        )
    }
}


export default HomePage;