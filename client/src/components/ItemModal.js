import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

//container is a component that is hooked to redux
//if you use a redux state inside of a react component (container)

import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';


//if modal is open
class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange =(e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem ={
            name: this.state.name
        }

        // Add item via addItem action
        this.props.addItem(newItem);

        //Close modal
        this.toggle();
    }

    render(){
        return(
          <div>
              <Button color="dark"
                      style={{marginBottom: '2rem'}}
                      onClick={this.toggle}
              >Add Item</Button>
              <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>
                      Add To Project List
                  </ModalHeader>

                  <ModalBody>
                      <Form onSubmit={this.onSubmit}>
                          <FormGroup>
                              <Label for="item"> Item</Label>
                              <Input
                                  type="text"
                              name="name"
                              id="item"
                              placeholder="Add project"
                              onChange={this.onChange}>
                              </Input>
                              <Button
                              color="dark"
                              style={{marginTop: '2rem'}}
                              block>
                                  Add Item
                              </Button>
                          </FormGroup>
                      </Form>
                  </ModalBody>
              </Modal>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal);