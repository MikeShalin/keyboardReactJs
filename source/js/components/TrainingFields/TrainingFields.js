/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class TrainingFields extends Component {

    render() {
        const {name,value,etc} = this.props;

        return (
            <div>
                {name}:{value} {etc?etc:''}
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{}
};

const mapDispatchToProps = (dispatch) =>{
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TrainingFields));
