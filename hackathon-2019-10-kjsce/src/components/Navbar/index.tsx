import React, { useMemo } from 'react';

import {
  NavLink
} from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import { useFirebaseUser } from '../../util/firebase/extras';

const MyNavbar: React.FC = () => {
  const user = useFirebaseUser();

  const name = useMemo(() => {
    if(user) {
      return user.phoneNumber;
    } else {
      return "Not logged in";
    }
  }, [user]);

  return (
    <Navbar dark style={{
      backgroundImage: "linear-gradient(315deg, #ee9617 0%, #fe5858 74%)",
    }}>
      <NavbarBrand tag={NavLink} to='/'>Doktor</NavbarBrand>
      <Nav>
        <NavItem className="ml-auto">
          {name}
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
