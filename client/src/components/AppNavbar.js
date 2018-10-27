import React,{ Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';


class AppNavbar extends Component{
   state = {
            isOpen: false
        }

        // when using arrow function, you dont need a constructor
    //if its close we want to open if its open we want to close
    toggle = () => {
       this.setState({
           isOpen: !this.state.isOpen
       });
    }
    //mb-5 push everything down under the navbar
    render(){
       return(
           <div>
               <Navbar color="dark" dark expand="sm" className="mb-5">
                   <Container>
                       <NavbarBrand href="/">Project Management</NavbarBrand>
                       <NavbarToggler onClick={this.toggle}/>
                       <Collapse isOpen={this.state.isOpen} navbar>
                           <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <NavLink href="https://github.com/irwansarwaji">
                                       Github
                                   </NavLink>
                               </NavItem>
                           </Nav>
                       </Collapse>
                   </Container>
               </Navbar>
           </div>
           );
    }
}


export default AppNavbar;