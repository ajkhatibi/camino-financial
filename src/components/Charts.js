import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dataActions } from '../actions/dataActions';

class Chart extends Component {
   componentWillMount(){
        this.props.dataActions();
    }
    render(){
        console.log('loading data to use for a graph', this.props.data)
        return (
            <h1>hello</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state.dataReducer.data }
}

export default connect(mapStateToProps, { dataActions })(Chart);