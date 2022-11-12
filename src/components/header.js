import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import '../css/header.css';

class BrandHeader extends Component {
  render() {
    return (
        <Menu widths={3} classname="brand-container" borderless>
          <Menu.Item className='back-button'>
            <Button inverted color='blue' icon labelPosition='left'>
              Back
              <Icon name='left arrow' />
            </Button>
          </Menu.Item>
          <Menu.Item>
            <h3 className="brand-name">Cinemaster</h3>
          </Menu.Item>
          <Menu.Item></Menu.Item>
        </Menu>
    )
  }
}

export default BrandHeader;