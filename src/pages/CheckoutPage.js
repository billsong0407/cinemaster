import React, { Component } from "react";
import "../css/checkout.css";
import { Form, Container, Button, Grid, Input } from "semantic-ui-react";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNum: "",
      cardHolder: "",
      cvv: "",
      billingAddress: "",
    };
  }

  render() {
    return (
      <div className="all">
        <h1> Checkout </h1>
        <Grid
          columns={2}
          divided
          style={{
            "margin-top": "3vh",
          }}
        >
          <Grid.Column>
            <h1> Summary </h1>
            <div className="description">
              <img src=""></img>
              <Container textAlign="left">
                <h4>Movie Name</h4>
                <p> Avengers: Final Game </p>
              </Container>
              <Container textAlign="left">
                <h4>Date and Time</h4>
                <p> 11:40pm, Nov 20th </p>
              </Container>
              <Container textAlign="left">
                <h4>Seat Selected</h4>
                <p> A23, B46 </p>
              </Container>
              <Container textAlign="left">
                <h4>Location</h4>
                <p> Cineplex Ontario </p>
              </Container>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign="center">
              <h2> Payment Info </h2>
              <Form className="form">
                <Form.Input
                  className="label"
                  label="Card Number"
                  placeholder="Card Number"
                  required={true}
                  width={8}
                />
                <Form.Input
                  className="label"
                  label="Card Holder"
                  placeholder="Card Holder"
                  required={true}
                  width={8}
                />
                <Form.Input
                  className="label"
                  label="Email"
                  placeholder="joe123@abc.com"
                  required={true}
                  width={8}
                />
                <Form.Input
                  className="label"
                  label="Billing Address"
                  placeholder="Billing Address"
                  required={true}
                  width={8}
                />
                <Form.Input
                  className="label"
                  label="CVV"
                  placeholder="CVV"
                  required={true}
                  width={3}
                />
              </Form>
              <Button type="submit">Proceed Payment</Button>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default CheckoutPage;
