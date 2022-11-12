import React, {Component} from 'react';
import BrandHeader from "../components/header";
import DateCard from "../components/DateCard"
import TimeCard from "../components/TimeCard"

import { Grid, Divider, Header, Icon } from 'semantic-ui-react'
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import '../css/SeatSelectionPage.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const showdates = [
    {"day": "Monday", "date": "Apr 10th, 2020"},
    {"day": "Tuesday", "date": "Apr 11th, 2020"},
    {"day": "Wednesday", "date": "Apr 12th, 2020"},
    {"day": "Thursday", "date": "Apr 13th, 2020"},
    {"day": "Friday", "date": "Apr 14th, 2020"},
    {"day": "Saturday", "date": "Apr 15th, 2020"},
    {"day": "Sunday", "date": "Apr 16th, 2020"},
    {"day": "Monday", "date": "Apr 17th, 2020"},
    {"day": "Tuesday", "date": "Apr 18th, 2020"},
];

const showtimes = [
    "11:00 a.m.", "11:45 a.m.", "12:40 p.m.", "1:00 p.m.", "2:45 p.m.",
    "8:00 p.m.", "8:30 p.m.", "8:40 p.m.", "9:00 p.m.", "9:45 p.m.",
]


class SeatSelectionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showdates: showdates,
            showtimes: showtimes,
        }
    }
    render() {
        return (
            <>
            <BrandHeader></BrandHeader>
            <Divider horizontal style={{color: 'red'}}>
                <Header as='h4'>
                    <Icon name='video' />
                    Avengers 3: Infinite Warefare
                </Header>
            </Divider>
            <Grid stackable verticalAlign='middle' centered>
               
                <Grid.Row>
                <Grid.Column width={2} style={{textAlign: 'center'}}>
                    <h3>1.  Please select a date</h3>
                    <Icon name="calendar alternate outline"/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        centerMode={false}
                        ssr={true} // means to render carousel on server-side.
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["mobile"]}
                        deviceType={this.props.deviceType}
                        itemClass="carousel-item-padding-30-px"
                        >
                            {this.state.showdates.map(showdate =>(
                                <DateCard
                                    day={showdate.day}
                                    date={showdate.date}
                                />
                            ))}
                        <div>
                            
                        </div>
                    </Carousel>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column width={2} style={{textAlign: 'center'}}>
                    <h3>2.  Please select a time</h3>
                    <Icon name="clock outline"/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        centerMode={false}
                        ssr={true} // means to render carousel on server-side.
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["mobile"]}
                        deviceType={this.props.deviceType}
                        itemClass="carousel-item-padding-30-px"
                        >
                            {this.state.showtimes.map(time =>(
                                <TimeCard
                                    time={time}
                                />
                            ))}
                        <div>
                            
                        </div>
                    </Carousel>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
        )
    }
}


export default SeatSelectionPage;