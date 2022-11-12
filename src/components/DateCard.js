import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react'

class CarouselCard extends Component {

    // component constructor
    constructor(props){
        super(props);
        this.state = {
            day: props.day,
            date: props.date,
        }
    }

    render(){
        return(
            <>
                <Card style={{maxWidth: '100px !important'}} color='teal'>
                    <Card.Content style={{textAlign: 'center'}}>
                        <p>{this.state.day}</p>
                        <p>{this.state.date}</p>
                    </Card.Content>
                    <Card.Content extra style={{textAlign: 'center'}}>
                        <div>
                        <Button inverted color='green'>
                            Select Time
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
            </>
        )
    }
}

export default CarouselCard;