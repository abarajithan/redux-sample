import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {connect} from "react-redux";
import {increase,decrease} from "../actions";

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props);
        return (
            <div className='row'>
                <div className='col-6'>
                    {this.props.counter.increment.counter}
                </div>
                <div className='col-6'>
                    <Button onClick={this.props.increment} style={{marginRight: 30}} variant="contained" color="secondary" >
                        Increment
                    </Button>
                    <Button onClick={this.props.decrement}  style={{marginRight: 30}}  variant="contained"  color="secondary" >
                        Decrement
                    </Button>
                    <Button onClick={this.props.reset} variant="contained" color="secondary" >
                        Reset
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
	counter: state
});


const mapDispatchToProps = (dispatch, getState) =>({
    increment: () => { dispatch(increase(1)) },
    decrement: () => { dispatch(decrease(1))},
    reset: ()=>{dispatch({type:"RESET"})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);