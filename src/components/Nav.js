import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


import logo from '../img/logo@2x.svg';

  export default class TopNav extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
							<img src={logo} width="170px" alt="Bird Office"/>
						</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">+33 1 11 11 11 11</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">FAQ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Partager votre espace</NavLink>
                </NavItem>
								<NavItem>
                  <NavLink>Inscription</NavLink>
                </NavItem> 
								<NavItem>
                  <NavLink>Connexion</NavLink>
                </NavItem>                 
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

