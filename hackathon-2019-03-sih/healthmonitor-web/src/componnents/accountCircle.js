import React, { Component } from 'react';
import {Dropdown,Icon} from 'semantic-ui-react';
import Firebase from 'firebase';
class AccountCircle extends Component {
  render() {
    return (
      <div style={{margin:5}}>
      <Dropdown direction='left' item icon='user circle big'>
      <Dropdown.Menu>
          <Dropdown.Item>{Firebase.auth().currentUser.email}</Dropdown.Item>
          <Dropdown.Item onClick={()=>{if(Firebase.auth().currentUser){
            Firebase.auth().signOut();
          }}}><Icon name='sign out'/>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </div>
    );
  }
}
export default AccountCircle;
