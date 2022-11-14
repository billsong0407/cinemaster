import React, {Component} from 'react';
import BrandHeader from "../components/header";

import { Grid, Divider, Header, Icon, Button, Card, Table} from 'semantic-ui-react'
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import '../css/SeatSelectionPage.css';

const { ThreeDMap } = require("../data/seatmap.json");

const responsive = {
  superLargeDesktop: {
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



// const seatLeft = [
//     'A1','A2','A3',
//     'B1','B2','B3',
//     'C1','C2','C3',
//     'D1','D2','D3',
    
//   ]
// const seat = [
//     'A4','A5','A6','A7',
//     'B4','B5','B6','B7',
//     'C4','C5','C6','C7',
//     'D4','D5','D6','D7'
//   ]
// const seatRight = [
//     'A8','A9','A10',
//     'B8','B9','B10',
//     'C8','C9','C10',
//     'D8','D9','D10'
    
//   ]


const seatAvailable = []

const seatReserved = []




class SeatSelectionPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showdates: showdates,
            showtimes: showtimes,
            adultCount: 1,
            childrenCount: 0,
            seniorCount: 0,
            selectedDate: null,
            selectedDateObject: null,
            selectedTime: null,
            selectedTimeObject: null,

            // seat: seat,
            // seatRight: seatRight,
            // seatLeft: seatLeft,
            seatAvailable: seatAvailable,
            seatReserved: seatReserved,
            count: 0
        }
        
    }

    /** For choosing seat onclick */
    // onClickData(seat) {
    //     if(this.state.seatReserved.indexOf(seat) > -1 ) {
    //       this.setState({
    //         seatAvailable: this.state.seatAvailable.concat(seat),
    //         seatReserved: this.state.seatReserved.filter(res => res !== seat)
    //       })
    //     } else if(this.state.seatReserved.indexOf(seatRight) > -1 ){
    //         this.setState({
    //             seatAvailable: this.state.seatAvailable.concat(seatRight),
    //             seatReserved: this.state.seatReserved.filter(res => res !== seatRight)
    //           })
    //     }
    //     else if(this.state.seatReserved.indexOf(seatLeft) > -1 ){
    //         this.setState({
    //             seatAvailable: this.state.seatAvailable.concat(seatLeft),
    //             seatReserved: this.state.seatReserved.filter(res => res !== seatLeft)
    //           })
    //     }
    //     else {
    //       this.setState({
    //         seatReserved: this.state.seatReserved.concat(seat),
    //         seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
    //       })
    //     }
    //   }
    
    onDateChange = (event) => {
      if (this.state.selectedDateObject !== null){
        let curr = this.state.selectedDateObject
        curr.style.backgroundColor = 'white';
        curr.style.color = 'black';  
      }
      event.currentTarget.style.backgroundColor = 'teal';
      event.currentTarget.style.color = 'white';
      this.setState({
        selectedDateObject: event.currentTarget,
        selectedDate: event.currentTarget.name,
      })
      console.log(this.state.selectedDate);
    }

    onTimeChange = (event) => {
      if (this.state.selectedTimeObject !== null){
        let curr = this.state.selectedTimeObject
        curr.style.backgroundColor = 'white';
        curr.style.color = 'black';  
      }
      event.currentTarget.style.backgroundColor = 'teal';
      event.currentTarget.style.color = 'white';
      this.setState({
        selectedTimeObject: event.currentTarget,
        selectedTime: event.currentTarget.name,
      })
    }
    
    incrementCount = (ticketType) =>{
      this.setState(prevState => {
        switch(ticketType) {
          case "children":
            return {childrenCount: prevState.childrenCount+ 1};
          case "adult":
            return {adultCount: prevState.adultCount+1};
          case 'senior':
            return {seniorCount: prevState.seniorCount + 1};
          default:
            return null;
        }
      })
    }

    decrementCount = (ticketType) =>{
      this.setState(prevState => {
        switch(ticketType) {
          case "children":
            if (this.state.childrenCount > 0){
              return {childrenCount: prevState.childrenCount-1};
            }
            break;
          case "adult":
            if (this.state.adultCount > 1){
              return {adultCount: prevState.adultCount-1};
            }
            break;
          case 'senior':
            if (this.state.seniorCount > 0){
              return {seniorCount: prevState.seniorCount-1};
            }
            break;
          default:
            return null;
        }
      })
    }

    onSeatChanged = () => {
      console.log("clicked");
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
                <Grid.Column width={13}>
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
                              <Card name={showdate.date} style={{color: 'black'}} className="cardStyle" color='teal' onClick={this.onDateChange}>
                                <Card.Content style={{textAlign: 'center'}}>
                                    <p>{showdate.day}</p>
                                    <p>{showdate.date}</p>
                                </Card.Content>
                            </Card>
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
                <Grid.Column width={13}>
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
                        <Card name={time} className="cardStyle" style={{color: 'black'}} color='teal' onClick={this.onTimeChange}>
                            <Card.Content style={{textAlign: 'center'}}>
                                <p>{time}</p>
                            </Card.Content>
                        </Card>
                      ))}
                    </Carousel>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column width={2} style={{textAlign: 'center'}}>                    
                    <h3>3.  Please select the number of tickets</h3>       
                </Grid.Column>
                <Grid.Column width={13} style={{textAlign: 'center'}}>
                    <Button.Group className='ticketGroup'>
                        <Button active basic color="teal" className='ticketLabel'>Children</Button>
                        <Button color="blue" onClick={() => this.decrementCount("children")} icon='minus' />
                        <Button basic color='black' className='ticketCountLabel'>
                          {this.state.childrenCount}
                        </Button>
                        <Button color="blue" onClick={() => this.incrementCount("children")} icon='plus' />
                    </Button.Group>                    
            
                    <Button.Group className='ticketGroup'>
                        <Button active basic color="teal" className='ticketLabel'>Adults</Button>
                        <Button color="blue" onClick={() => this.decrementCount("adult")} icon='minus' />
                        <Button basic color="black" className='ticketCountLabel'>
                          {this.state.adultCount}
                        </Button>
                        <Button color="blue" onClick={() => this.incrementCount("adult")} icon='plus' />
                    </Button.Group>                    
              
                    <Button.Group className='ticketGroup'>
                        <Button active basic color="teal" className='ticketLabel'>Seniors</Button>
                        <Button color="blue" onClick={() => this.decrementCount("senior")} icon='minus' />
                        <Button basic color="black" className='ticketCountLabel'>
                          {this.state.seniorCount}
                        </Button>
                        <Button color="blue" onClick={() => this.incrementCount("senior")} icon='plus' />
                    </Button.Group>  
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={2} style={{textAlign: 'center'}}>                    
                  <h3>3.  Please select the seats</h3>       
                </Grid.Column>
                <Grid.Column width={13} style={{overflowX: "scroll", whiteSpace: "no-wrap"}}> 
                  {/* <div className='seat-map'> */}
                  <Table columns={13} singleLine unstackable className='seat-map'>
                    <Table.Body>
                      {ThreeDMap.map((rows, index) => (
                        <Table.Row textAlign='center' key={index}>
                          {rows.map((seat, seatIdx) => {
                            if (seat.state === "occupied"){
                              return(
                                <Table.Cell className='seats occupied-seats'  key={seatIdx}>
                                  {seat.id}
                                </Table.Cell>
                              )
                            }
                            else if (seat.state === "unoccupied"){
                              return(
                                <Table.Cell className='seats unoccupied-seats'  key={seatIdx}>
                                  {seat.id}
                                </Table.Cell>
                              )
                            }
                            else{
                              return(
                                <Table.Cell className='seats alley' key={seatIdx}>
                                  {" "}
                                </Table.Cell>
                              )
                            }
                            })}
                        </Table.Row>
                      ))}              
                    </Table.Body>
                  </Table>
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