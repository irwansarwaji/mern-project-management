import React,{ Component } from 'react'; //class based component
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
// import uuid from 'uuid';
import {connect } from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ProjectList extends Component{
    //lifecycle for making an api request or calling a function
    componentDidMount(){
        this.props.getItems();
    }

    //pas the id from itemActions then its going to be send to the reducer
    onDeleteClick = id =>{
        this.props.deleteItem(id);
    }

    render(){

        const{ items } = this.props.item; //pulling out items from reducer
        return(
            <div>
                <div className="row">
                    <div className="col-sm">

                        <div className="col-titles">Flowcharts</div>
                        <ListGroup className="list-group">
                            <TransitionGroup className="list-group-item">
                                {items.map(({ _id, name, description}) =>(
                                    <CSSTransition key={_id} timeout={500} classNames="fade">
                                        <ListGroupItem>
                                            <div class="card">
                                                <div class="card-header">
                                                    {name}
                                                    <button
                                                        className="remove-btn"
                                                        // color="danger"
                                                        size="sm"
                                                        onClick={this.onDeleteClick.bind(this, _id)}>
                                                        &times;
                                                    </button>
                                                </div>
                                                <div class="card-body">
                                                    <p class="card-text">{description}</p>
                                                </div>
                                            </div>

                                        </ListGroupItem>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </ListGroup>


                    </div>

                    <div className="col-sm col-border">
                        <div className="col-titles">Wireframes</div>
                    </div>
                    <div className="col-sm col-border">
                        <div className="col-titles">Prototype</div>
                    </div>

                    <div className="col-sm col-border">
                        <div className="col-titles">Development</div>
                    </div>
                    <div className="col-sm col-border">
                        <div className="col-titles">Test</div>
                    </div>

                    <div className="col-sm col-border">
                        <div className="col-titles">Launch</div>
                    </div>


                </div>






            </div>
        );
    }
}
//when you bring in an action from redux, it's going to be stored as a prop
ProjectList.propTypes ={
getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

//map initial state items into a compoment property to use it in project list
/// state.item -> name of the reducer  in index.js
const mapStateToProps = (state) => ({
  item: state.item
});
export default connect(mapStateToProps, { getItems, deleteItem })(ProjectList);