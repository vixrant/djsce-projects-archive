import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap/';
import './Navbar.css';

import { withBaseDir } from '../util/helpers';

export default class CustomNavbar extends React.Component {
    state = {
        isCollapsed: false,
    }

    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.setState(state => ({
            iscollapsed: !state.iscollapsed,
        }));
    }

    render = () => (
        <Navbar sticky={'top'} color='white' light className="Navbar" expand='md'>
            <NavbarBrand href={withBaseDir`/`}>
                <img src={withBaseDir`/static/images/logo1.png`} className="logo" />
            </NavbarBrand>

            <Collapse isOpen={this.state.iscollapsed} navbar>
                <Nav className="ml-auto mr-auto" navbar>
                    <NavItem className="NavLink">
                        <NavLink className="mx-3" href={withBaseDir`/`}>
                            Home
                        </NavLink>
                    </NavItem>    

                    <UncontrolledDropdown className="NavLink" nav inNavbar>
                        <DropdownToggle className="mx-3" nav caret>
                            Events
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/outdoor`}>
                                    Outdoor
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/college`}>
                                    College
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/university`}>
                                    University
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>   

                    <UncontrolledDropdown className="NavLink" nav inNavbar>
                        <DropdownToggle className="mx-3" nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/technical`}>
                                    Technical
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/unique`}>
                                    Unique
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown className="NavLink" nav inNavbar>
                        <DropdownToggle className="mx-3" nav caret>
                            Camp
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/camp`}>
                                    2019-20
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/camp1819`}>
                                    2018-19
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> 

                    <UncontrolledDropdown className="NavLink" nav inNavbar>
                        <DropdownToggle className="mx-3" nav caret>
                            Committee
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/committee`}>
                                    2019-20
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className="NavLink">
                                <NavLink href={withBaseDir`/committee1819`}>
                                    2018-19
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> 

                    <NavItem className="NavLink">
                        <NavLink 
                            className="mx-3" 
                            href={withBaseDir`/about`}>
                            About Us`
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>

            <NavbarBrand href='/'>
                <img src={withBaseDir`/static/images/logo4.png`} className="logo" />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
        </Navbar>
    );
};