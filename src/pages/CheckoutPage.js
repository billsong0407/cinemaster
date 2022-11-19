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
  Segment,
  Divider,
} from "semantic-ui-react";

const stateOptions = [
  { key: "on", text: "ON", value: "ON" },
  { key: "ab", text: "AB", value: "Alberta" },
  { key: "qc", text: "QC", value: "Quebec" },
  { key: "bc", text: "BC", value: "British Columbia" },
];

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

      cardNum: "",
      cardHolder: "",
      cvv: "",
      billingAddress: "",

    };
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image src="/images/avengers.jpg" size="medium" />
                  <Container className="description">
                    <Grid columns={2}>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Movie Name</h4>
                            <p> {this.state.movieName} </p>
                          </Container>
                        </Grid.Column>
                        <Grid.Column>
                          <Container textAlign="right">
                            <h4>Datetime</h4>
                            <p> {this.state.selectedTime} - {this.state.selectedDate.slice(0, -6)}</p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Seat Selected</h4>
                            <span>{this.state.selectedSeats.join(', ')}</span>
                          </Container>
                        </Grid.Column>
                        <Grid.Column>
                          <Container textAlign="right">
                            <h4>Location</h4>
                            <p> {this.state.cinemaLocation} </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </div>
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
                  />
                  <Form.Input
                    label="Card Holder"
                    placeholder="Card Holder"
                    required={true}
                    width={16}
                  />
                  <Form.Input
                    label="Email"
                    placeholder="joe123@abc.com"
                    required={true}
                    width={16}
                  />

                  <Form.Input
                    label="CVV"
                    placeholder="CVV"
                    required={true}
                    width={3}
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
                      />
                      <Form.Field
                        control={Select}
                        options={stateOptions}
                        required={true}
                        label={{
                          children: "State",
                          htmlFor: "form-select-control-state",
                        }}
                        placeholder="State"
                        search
                        searchInput={{ id: "form-select-control-state" }}
                      />
                    </Container>
                  </Form.Group>
                </Form>
                <Container textAlign="center">
                  <Button type="submit">Proceed Payment</Button>
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
