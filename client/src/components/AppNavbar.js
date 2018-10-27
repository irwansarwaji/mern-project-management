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


const navbar = {backgroundColor: '#00af81'};
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
               <Navbar style={navbar}dark expand="sm" classNames="mb-5">
                   <Container>

                       <NavbarBrand href="/">Project Management</NavbarBrand>
                       <NavbarToggler onClick={this.toggle}/>
                       <Collapse isOpen={this.state.isOpen} navbar>
                           <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <NavLink href="https://github.com/irwansarwaji/mern-project-management" target="_blank">
                                       Github for this project
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