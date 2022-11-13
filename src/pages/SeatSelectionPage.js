import React, {Component, useState} from 'react';
import BrandHeader from "../components/header";
import DateCard from "../components/DateCard"
import TimeCard from "../components/TimeCard"

import { TextField } from "@mui/material";

import { Grid } from 'semantic-ui-react'
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

const seatLeft = [
    'A1','A2','A3',
    'B1','B2','B3',
    'C1','C2','C3',
    'D1','D2','D3',
    
  ]
const seat = [
    'A4','A5','A6','A7',
    'B4','B5','B6','B7',
    'C4','C5','C6','C7',
    'D4','D5','D6','D7'
  ]
const seatRight = [
    'A8','A9','A10',
    'B8','B9','B10',
    'C8','C9','C10',
    'D8','D9','D10'
    
  ]

const seatAvailable = []

const seatReserved = []




class SeatSelectionPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showdates: showdates,
            showtimes: showtimes,
            seat: seat,
            seatRight: seatRight,
            seatLeft: seatLeft,
            seatAvailable: seatAvailable,
            seatReserved: seatReserved,
            count: 0
        }
        
    }
    componentDidMount() {
        //this.state = { data: data };
        
    }

    /** For choosing seat onclick */
    onClickData(seat) {
        if(this.state.seatReserved.indexOf(seat) > -1 ) {
          this.setState({
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatReserved: this.state.seatReserved.filter(res => res !== seat)
          })
        } else if(this.state.seatReserved.indexOf(seatRight) > -1 ){
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seatRight),
                seatReserved: this.state.seatReserved.filter(res => res !== seatRight)
              })
        }
        else if(this.state.seatReserved.indexOf(seatLeft) > -1 ){
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seatLeft),
                seatReserved: this.state.seatReserved.filter(res => res !== seatLeft)
              })
        }
        else {
          this.setState({
            seatReserved: this.state.seatReserved.concat(seat),
            seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
          })
        }
      }
    
    incrementCount = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    decrementCount = () =>{
        if (this.state.count > 0){
        this.setState(prevState => {
            return {count: prevState.count -1}
        })
    }
    }

    render() {
        const {count} = this.state
        return (
            <>
            <BrandHeader></BrandHeader>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Row>
                <Grid.Column width={2} style={{textAlign: 'center'}}>
                    <h3>1.  Please select a date</h3>
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

                <Grid.Row>
                <Grid.Column width={3} style={{textAlign: 'center'}}>
                    <h3>3.  Please select a seat</h3>
                    <h4>Available</h4>
                    <div className="legend-available" />
                    <h4>Reserved</h4>
                    <div className="legend-reserved" />
                    <h4>Tickets</h4>
                    <Grid.Row>
                    
                    <div className='tickets'>

                    <Grid.Row>
                    <button onClick={this.incrementCount}>+</button>
                    <TextField className="textfield" id="outlined-basic" label={"Adult : "+count} variant="outlined" size="small" style = {{width: 110}} inputProps={{ style: {textAlign: 'center'} }}/>            
                    <button onClick={this.decrementCount}>-</button>
                    </Grid.Row>

                    <Grid.Row>
                    <button onClick={this.incrementCount}>+</button>
                    <TextField className="textfield" id="outlined-basic" label={"Children : "+count} variant="outlined" size="small" style = {{width: 110}} inputProps={{ style: {textAlign: 'center'} }}/>              
                    <button onClick={this.decrementCount}>-</button>
                    </Grid.Row>

                    <Grid.Row> 
                    <button onClick={this.incrementCount}>+</button>
                    <TextField className="textfield" id="outlined-basic" label={"Senior : "+count} variant="outlined" size="small" style = {{width: 110}} inputProps={{ style: {textAlign: 'center'} }}/>            
                    <button onClick={this.decrementCount}>-</button>
                    </Grid.Row>
                    </div>
                    
                    </Grid.Row>
                    
                    
                </Grid.Column>

                <Grid.Column width={4} style={{textAlign: 'center'}}>
                    <h3>SCREEN</h3>
                        <div>
                            <DrawGridLeft 
                            seatLeft = { this.state.seatLeft }
                            available = { this.state.seatAvailable }
                            reserved = { this.state.seatReserved }
                            onClickData = { this.onClickData.bind(this) }
                            />

                        
                            
                        </div>

                    </Grid.Column>

                    <Grid.Column width={5} style={{textAlign: 'center'}}>
                    <h3>SCREEN</h3>
                        <div>
                            <DrawGrid 
                            seat = { this.state.seat }
                            available = { this.state.seatAvailable }
                            reserved = { this.state.seatReserved }
                            onClickData = { this.onClickData.bind(this) }
                            />

                        
                            
                        </div>

                    </Grid.Column>
                    <Grid.Column width={4} style={{textAlign: 'center'}}>
                    <h3>SCREEN</h3>
                        <div>
                            <DrawGridRight 
                            seatRight = { this.state.seatRight }
                            available = { this.state.seatAvailable }
                            reserved = { this.state.seatReserved }
                            onClickData = { this.onClickData.bind(this) }
                            />

                        
                            
                        </div>

                    </Grid.Column>
                    
                    
                </Grid.Row>
            </Grid>
            </>
        )
    }
}

class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container-4perRow">
          
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }

  class DrawGridRight extends React.Component {
    render() {
      return (
         <div className="container">
          
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seatRight.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }

  class DrawGridLeft extends React.Component {
    render() {
      return (
         <div className="container">
          
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seatLeft.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  

export default SeatSelectionPage;