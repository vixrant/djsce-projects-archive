import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react';
class NotificationIcon extends Component {
  render() {
    return (
    <div style={{margin:10}}>
      <Dropdown text='' direction='left' item icon='bell large' labeled >
      <Dropdown.Menu>
          <Dropdown.Item>hi</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </div>
    );
  }
}
export default NotificationIcon;
