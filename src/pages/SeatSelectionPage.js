import React, {Component} from 'react';
import BrandHeader from "../components/header";
import { Grid, Card, Button } from 'semantic-ui-react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/SeatSelectionPage.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

class SeatSelectionPage extends Component {
    render() {
        return (
            <>
            <BrandHeader></BrandHeader>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Row>
                <Grid.Column width={3} style={{textAlign: 'center'}}>
                    <h3>1. Please select a date</h3>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        centerMode={true}
                        ssr={true} // means to render carousel on server-side.
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["mobile"]}
                        deviceType={this.props.deviceType}
                        // itemClass="carousel-item-padding-30-px"
                        >
                        <div>
                            <Card className='date-card'>
                                <Card.Content>
                                    <p>Monday</p>
                                    <p>September 5</p>
                                </Card.Content>
                                <Card.Content extra>
                                    <div>
                                    <Button inverted color='green'>
                                        Select Time
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card className='date-card'>
                                <Card.Content>
                                    <p>Monday</p>
                                    <p>September 5</p>
                                </Card.Content>
                                <Card.Content color='blue' extra>
                                    <div>
                                    <Button inverted color='green'>
                                        Select Time
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card className='date-card' color='teal'>
                                <Card.Content>
                                    <p>Monday</p>
                                    <p>September 5</p>
                                </Card.Content>
                                <Card.Content extra>
                                    <div>
                                    <Button inverted color='green'>
                                        Select Time
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card className='date-card'>
                                <Card.Content>
                                    <p>Monday</p>
                                    <p>September 5</p>
                                </Card.Content>
                                <Card.Content extra>
                                    <div>
                                    <Button inverted color='green'>
                                        Select Time
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                    </Carousel>
                </Grid.Column>
                </Grid.Row>

                {/* <Grid.Row>
                <Grid.Column width={3}>
                    <h3>Please select a time</h3>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
                </Grid.Row> */}
            </Grid>
            </>
        )
    }
}


export default SeatSelectionPage;