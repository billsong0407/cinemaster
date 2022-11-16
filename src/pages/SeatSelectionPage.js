import React, {Component} from 'react';
import BrandHeader from "../components/header";

import { Grid, Divider, Header, Icon, Button, Card, Table, Label, Container} from 'semantic-ui-react'
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import '../css/SeatSelectionPage.css';

const { seatAllocations } = require("../data/seatmap.json");

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
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

          counterEnabled: true,
          adultCount: 1,
          childrenCount: 0,
          seniorCount: 0,

          selectedDate: null,
          selectedDateObject: null,
          selectedTime: null,
          selectedTimeObject: null,

          seatMap: seatAllocations["default"],
          selectedSeats: [],
          selectedSeatsObjects: {}
      }
  }    

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

    if (event.currentTarget.name !== null && this.state.selectedTime !== null){
      this.setState({
        counterEnabled: false,
        seatMap: seatAllocations[this.state.selectedTime],
      })
    }
  }

  onTimeChange = (event) => {
    if (this.state.selectedTimeObject !== null){
      let curr = this.state.selectedTimeObject
      curr.style.backgroundColor = 'white';
      curr.style.color = 'black';  
    }
    event.currentTarget.style.backgroundColor = 'teal';
    event.currentTarget.style.color = 'white';

    while (this.state.selectedSeats.length > 0){
      let removeSeatId = this.state.selectedSeats.shift();
      let curr = this.state.selectedSeatsObjects[removeSeatId];
      curr.style.backgroundColor = 'white';
      delete this.state.selectedSeatsObjects[removeSeatId];
    }

    this.setState({
      selectedTimeObject: event.currentTarget,
      selectedTime: event.currentTarget.name,
      adultCount: 1,
      childrenCount: 0,
      seniorCount: 0,
    })
    if (this.state.selectedDate !== null && event.currentTarget.name !== null){
      this.setState({
        counterEnabled: false,
        seatMap: seatAllocations[event.currentTarget.name],
      })
    }
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
            if (this.state.childrenCount > 0){ return {childrenCount: prevState.childrenCount-1};}
            break;
          case "adult":
            if (this.state.adultCount > 1){ return {adultCount: prevState.adultCount-1};}
            break;
          case 'senior':
            if (this.state.seniorCount > 0){ return {seniorCount: prevState.seniorCount-1};}
            break;
          default:
            return null;
        }
      })
    }

    onSeatChanged = (event, seatId) => {
      if (seatId in this.state.selectedSeatsObjects){
        let curr = this.state.selectedSeatsObjects[seatId];
        curr.style.backgroundColor = 'white';
        delete this.state.selectedSeatsObjects[seatId];
        this.state.selectedSeats.splice(this.state.selectedSeats.indexOf(seatId), 1);
      }else{
        if (this.state.selectedSeats.length >= (this.state.childrenCount+this.state.adultCount+this.state.seniorCount)){
          var removeSeatId = this.state.selectedSeats.shift()
          let curr = this.state.selectedSeatsObjects[removeSeatId];
          curr.style.backgroundColor = 'white';
          delete this.state.selectedSeatsObjects[removeSeatId];
        }
        event.currentTarget.style.backgroundColor = 'lightblue';
        this.state.selectedSeats.push([seatId]);
        this.state.selectedSeatsObjects[seatId] = event.currentTarget;
      }
          
    }

    render() {
        return (
            <>
            <BrandHeader></BrandHeader>
            <div className='seats-page-container'>
            <div className='seats-page-container-wrapper'>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='video' />
                    Avengers 3: Infinite Warefare
                </Header>
            </Divider>
            <Container className='instruction-container'>
                <Header as='h3'>
                  Step 1 - Please select a date
                </Header>
              {/* <h3>1.  Please select a date <Icon name="calendar alternate outline"/></h3> */}
            </Container>
            <Container className='carousel-wrapper'>
              <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                centerMode={false}
                ssr={true} // means to render carousel on server-side.
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={100}
                // containerClass="carousel-container"
                // removeArrowOnDeviceType={["mobile"]}
                deviceType={this.props.deviceType}
                // itemClass="carousel-item-padding-100-px"
                >
                  {this.state.showdates.map(showdate =>(
                      <Card name={showdate.date} style={{color: 'black'}} className="cardStyle" color='teal' onClick={this.onDateChange}>
                        <Card.Content>
                            <p>{showdate.day}</p>
                            <p>{showdate.date}</p>
                        </Card.Content>
                    </Card>
                  ))}
            </Carousel>
            </Container>
            <Container className='instruction-container'>
                <Header as='h3'>
                  Step 2 - Please select a time
                </Header>
              {/* <h3>2.  Please select a time <Icon name="clock outline"/></h3> */}
            </Container>
            <Container className='carousel-wrapper'>
              <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                centerMode={false}
                ssr={true} // means to render carousel on server-side.
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={100}
                // containerClass="carousel-container"
                // removeArrowOnDeviceType={["mobile"]}
                deviceType={this.props.deviceType}
                // itemClass="carousel-item-padding-100-px"
              >
                {this.state.showtimes.map(time =>(
                  <Card fluid name={time} className="cardStyle" style={{color: 'black'}} color='teal' onClick={this.onTimeChange}>
                      <Card.Content style={{textAlign: 'center'}}>
                          <p>{time}</p>
                      </Card.Content>
                  </Card>
                ))}
              </Carousel>
            </Container>
            <Container className='instruction-container'>
              <Header as='h3'>
                Step 3 - Please select the number of tickets
              </Header>
              <Label as='a' basic>Child: age{"<="}14</Label>
              <Label as='a' basic>General: 14{"<"}age{"<"}65</Label>
              <Label as='a' basic>Senior: age{">="}65</Label>
              {/* <p>Children: age{"<="}14</p> */}
              {/* <h3>3.  Please select the number of tickets</h3>  */}
            </Container>
            <Container>
              <Button.Group className='ticketGroup'>
                <Button disabled={this.state.counterEnabled} active basic color="teal" className='ticketLabel'>Child $11.00 each</Button>
                <Button disabled={this.state.counterEnabled} color="blue" onClick={() => this.decrementCount("children")} icon='minus' />
                <Button disabled={this.state.counterEnabled} basic color='blue' className='ticketCountLabel'>
                  {this.state.childrenCount}
                </Button>
                <Button disabled={this.state.counterEnabled} color="blue" onClick={() => this.incrementCount("children")} icon='plus' />
              </Button.Group>                    
      
              <Button.Group className='ticketGroup'>
                <Button disabled={this.state.counterEnabled} active basic color="teal" className='ticketLabel'>General $14.00 each</Button>
                <Button disabled={this.state.counterEnabled} color="blue" onClick={() => this.decrementCount("adult")} icon='minus' />
                <Button disabled={this.state.counterEnabled} basic color="blue" className='ticketCountLabel'>
                  {this.state.adultCount}
                </Button>
                <Button disabled={this.state.counterEnabled} color="blue" onClick={() => this.incrementCount("adult")} icon='plus' />
              </Button.Group>  
              <Button.Group className='ticketGroup'>
                <Button disabled={this.state.counterEnabled} active basic color="teal" className='ticketLabel'>Senior $11.00 each</Button>
                <Button disabled={this.state.counterEnabled} color="blue" onClick={() => this.decrementCount("senior")} icon='minus' />
                <Button disabled={this.state.counterEnabled} basic color="blue" className='ticketCountLabel'>
                  {this.state.seniorCount}
                </Button>
                <Button disabled={this.state.counterEnabled} color="blue" onClick={() => this.incrementCount("senior")} icon='plus' />
              </Button.Group>  
              
            </Container>

            <Container className='instruction-container'>
                <Header as='h3'>
                  Step 4 - Please select the available seats
                </Header>
              <Label.Group>
                <Label style={{backgroundColor: "white"}} className="seat-label">Available</Label> 
                <Label style={{backgroundColor: "#BDC3C7"}} className="seat-label">Occupied</Label> 
                <Label style={{backgroundColor: "lightblue"}} className="seat-label">Selected</Label>
              </Label.Group>  
            </Container>
            <Container className='seat-map'>
              <div className='screen-container'>
              <h1>SCREEN</h1>
              <Divider className="screen"></Divider>
              </div>
              <Table className="seat-table" columns={14} singleLine unstackable>
                <Table.Body>
                  {this.state.seatMap.map((rows, index) => (
                    <Table.Row padded textAlign='center' key={index}>
                      {rows.map((seat, seatIdx) => {
                        if (seat.state === "occupied"){
                          return(<Table.Cell className='seats occupied-seats' key={seatIdx}>{seat.id}</Table.Cell>)}
                        else if (seat.state === "unoccupied"){
                          return(
                            <Table.Cell name="clicked" className='seats unoccupied-seats' key={seat.id} 
                              onClick={event => this.onSeatChanged(event, seat.id)}>{seat.id}
                            </Table.Cell>)}
                        else if (seat.state === "default"){
                          return(<Table.Cell disabled className='seats' key={seatIdx}>{seat.id}</Table.Cell>)}
                        else{
                          return(
                            <Table.Cell className='seats alley' key={seatIdx}>{" "}</Table.Cell>)}
                      })}
                    </Table.Row>
                  ))}        
                </Table.Body>
              </Table>
            </Container>
            <Container className="confirmation-container">
              <Button inverted color="green">Confirm and Proceed to checkout</Button>
            </Container>
            {/* <Grid stackable verticalAlign='middle' centered>
              <Grid.Row>
                
              </Grid.Row>
              <Grid.Row>
                
              </Grid.Row>
            </Grid> */}
            </div>
            </div>
            </>
        )
    }
}
export default SeatSelectionPage;