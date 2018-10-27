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
        name: '',
        description:''
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange =(e) =>{
        this.setState({[e.target.name]: e.target.value});
        this.setState({[e.target.description]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem ={
            name: this.state.name,
            description: this.state.description
        }

        // Add item via addItem action
        this.props.addItem(newItem);

        //Close modal
        this.toggle();
    }

    render(){
        return(
          <div>

              <Button className="add-btn-main"
                      style={{marginBottom: '2rem'}}
                      onClick={this.toggle}>Add Project &#43;
              </Button>


              <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>
                      New project
                  </ModalHeader>

                  <ModalBody>
                      <Form onSubmit={this.onSubmit}>
                          <FormGroup>
                              <Input
                                  className="title-input"
                                  type="text"
                                  name="name"
                                  id="item"
                                  placeholder="Title"
                                  onChange={this.onChange}>
                              </Input>

                              <Input
                                  className="description-input"
                                  type="textarea"
                                  name="description"
                                  id="item"
                                  placeholder="Description"
                                  onChange={this.onChange}>
                              </Input>

                              <Button
                              className="add-btn"
                              style={{marginTop: '2rem'}}
                              block>
                                  Add Project &#43;
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