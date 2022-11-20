import React, { Component } from "react";
import "../css/checkout.css";
import BrandHeader from "../components/header";
import {
  Form,
  Container,
  Button,
  Grid,
  Input,
  Image,
  Select,
  Icon,
  Dropdown,
  Segment,
  Divider,
  GridColumn,
} from "semantic-ui-react";

const stateOptions = [
  { key: "on", text: "ON", value: "Ontario" },
  { key: "ab", text: "AB", value: "Alberta" },
  { key: "qc", text: "QC", value: "Quebec" },
  { key: "bc", text: "BC", value: "British Columbia" },
];

const mapImagePath = {
  "The Avengers": "./images/avengers.jpg",
  "Godzilla": "./images/godzilla.jpg",
  "Pacific Rim": "./images/pacific.jpg"
}

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.location.state);
    this.state = {
      movieName: this.props.location.state.movieName,
      cinemaLocation: this.props.location.state.cinemaLocation,
      selectedDate: this.props.location.state.selectedDate,
      selectedTime: this.props.location.state.selectedTime,
      selectedSeats: this.props.location.state.selectedSeats.sort(),
      experienceType: this.props.location.state.experienceType,
      imagePath: mapImagePath[this.props.location.state.movieName],
      adultCount: this.props.location.state.adultCount,
      childrenCount: this.props.location.state.childrenCount,
      seniorCount: this.props.location.state.seniorCount,

      cardNum: "",
      cardHolder: "",
      cvv: "",
      email: "",
      street: "",
      province: "",
      postalCode: "",
      disableSubmit: true
    };
  }

  handleCardNum = (e, data) => {
    this.setState({
      cardNum: data.value
    })
  }

  handleCardHolder = (e, data) => {
    this.setState({
      cardHolder: data.value
    })
  }

  handleEmail = (e, data) => {
    this.setState({
      email: data.value
    })
  }

  handleCVV = (e, data) => {
    this.setState({
      cvv: data.value
    })
  }

  handleStreet = (e, data) => {
    this.setState({
      street: data.value
    })
  }

  handlePost = (e, data) => {
    this.setState({
      postalCode: data.value
    })
  }

  handleState = (e, data) => {
    this.setState({
      province: data.value
    })
  }

  processPayment = () => {
    console.log("pressed");
  }

  render() {
    return (
      <>
      <BrandHeader cinemaLocation={this.state.cinemaLocation}></BrandHeader>
      <div className="checkout">
        <Segment raised padded>
          <Grid columns={2}>
            <Grid.Column className="summary">
              <Container
                textAlign="left"
                style={{
                  padding: "5vh 20vh 5vh 20vh",
                }}
              >
                 <h3> Ticket Summary </h3>

                 
                  
                  <Grid columns={2}>
                    <Grid.Row>
                    <Grid.Column>
                      <Image src={this.state.imagePath} size="small" />
                    </Grid.Column>
                    <Grid.Column>
                      <div style={{
                        height: "100%",
                        display:"flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}>
                      <Grid.Row>
                        <Container textAlign="right">
                          <h4>Movie Name</h4>
                          <p> {this.state.movieName} </p>
                        </Container>
                      </Grid.Row>
                      <Grid.Row>
                      <Container textAlign="right">
                          <h4>Datetime</h4>
                          <p> {this.state.selectedTime} - {this.state.selectedDate.slice(0, -6)}</p>
                        </Container>
                      </Grid.Row>
                      <Grid.Row>
                      <Container textAlign="right">
                          <h4>Location</h4>
                          <p> {this.state.cinemaLocation}</p>
                        </Container>
                      </Grid.Row>
                      </div>
                    </Grid.Column> 
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column textAlign="left">
                            <h4>Seat Selected</h4>
                            <span>{this.state.selectedSeats.join(', ')}</span>
                      </Grid.Column>
                      <Grid.Column textAlign="right">
                              <h4>Experience Type</h4>
                              <p> {this.state.experienceType} </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                  <Divider />
                  <h4> Your Order </h4>
                  <Grid divided="vertically" columns={2}>
                    <Grid.Row>
                      <Grid.Column>
                        <div className="items">
                          <Icon name='male'></Icon>
                          <span> Adult Tickets x {this.state.adultCount} </span>
                        </div>
                        <div className="items">
                          <Icon name='child'></Icon>
                          <span> Children Tickets x {this.state.childrenCount} </span>
                        </div>
                        <div className="items">
                          <Icon name='wheelchair'></Icon>
                          <span> Senior Tickets x {this.state.seniorCount} </span>
                        </div>
                      </Grid.Column>
                      <Grid.Column textAlign="right">
                        <div>
                          <span> $ {this.state.adultCount * 10} </span>
                        </div>
                        <div>
                          <span> $ {this.state.childrenCount * 6.5} </span>
                        </div>
                        <div>
                          <span> $ {this.state.seniorCount * 8.5} </span>
                        </div>       
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <span> Subtotal </span>
                      </Grid.Column>
                      <Grid.Column textAlign="right">
                        <span> $ {this.state.adultCount * 10 + this.state.childrenCount * 6.5 + this.state.seniorCount * 8.5} </span>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container
                textAlign="left"
                style={{
                  padding: "5vh 15vh 5vh 15vh",
                }}
              >
                <h3> Payment Info </h3>
                <Form className="form">
                  <Form.Input
                    label="Card Number"
                    placeholder="Card Number"
                    required={true}
                    width={16}
                    onChange={this.handleCardNum}
                  />
                  <Form.Input
                    label="Card Holder"
                    placeholder="Card Holder"
                    required={true}
                    width={16}
                    onChange={this.handleCardHolder}
                  />
                  <Form.Input
                    label="Email"
                    placeholder="joe123@abc.com"
                    required={true}
                    width={16}
                    onChange={this.handleEmail}
                  />

                  <Form.Input
                    label="CVV"
                    placeholder="CVV"
                    required={true}
                    width={3}
                    onChange={this.handleCVV}
                  />
                  <Divider></Divider>
                  <Form.Group
                    style={{
                      display: "block",
                    }}
                  >
                    <label>Billing Address</label>
                    <Form.Field
                      control={Input}
                      label="Street"
                      placeholder="Street"
                      required={true}
                      width={16}
                      onChange={this.handleStreet}
                    />
                    <Container
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        width: "100%",
                      }}
                    >
                      <Form.Input
                        label="Postal Code"
                        placeholder="XXX XXX"
                        required={true}
                        width={6}
                        onChange={this.handlePost}
                      />

                      <Form.Select
                        options={stateOptions}
                        required={true}
                        label='State'
                        placeholder="State"
                        search
                        onChange={this.handleState}
                      />
                    </Container>
                  </Form.Group>
                </Form>
                <Container textAlign="center">
                  <Button inverted color="green" disabled={
                    this.state.cardHolder === "" ||
                    this.state.cardNum === "" || 
                    this.state.cvv === "" || 
                    this.state.email === "" || 
                    this.state.street === "" || 
                    this.state.province ==="" || 
                    this.state.postalCode === ""
                  } type="submit" onClick={this.processPayment}>Proceed Payment</Button>
                </Container>
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
      </>
    );
  }
}

export default CheckoutPage;
