import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dataActions } from '../actions/dataActions';

class Chart extends Component {
   componentWillMount(){
        this.props.dataActions();
    }
    render(){
        return (
            <div>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state.dataReducer.data }
}

export default connect(mapStateToProps, { dataActions })(Chart);