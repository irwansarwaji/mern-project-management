import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ProjectList from './components/ProjectList';
import ItemModal from './components/ItemModal';
import {Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (

        <Provider store={store}>
      <div className="App">
          <AppNavbar/>
         <Container>
          <ItemModal/>
          <ProjectList/>
         </Container>
      </div>
        </Provider>
    );
  }
}

export default App;
