import React, { Component } from "react";
import "../css/checkout.css";
import {
  Form,
  Container,
  Button,
  Grid,
  Input,
  Label,
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
    this.state = {
      cardNum: "",
      cardHolder: "",
      cvv: "",
      billingAddress: "",
    };
  }

  render() {
    return (
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
                            <p> Avengers: Final Game </p>
                          </Container>
                        </Grid.Column>
                        <Grid.Column>
                          <Container textAlign="right">
                            <h4>Date and Time</h4>
                            <p> 11:40pm, Nov 20th </p>
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="left">
                            <h4>Seat Selected</h4>
                            <p> A23, B46 </p>
                          </Container>
                        </Grid.Column>
                        <Grid.Column>
                          <Container textAlign="right">
                            <h4>Location</h4>
                            <p> Cineplex Ontario </p>
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
    );
  }
}

export default CheckoutPage;
