/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class LevelButton extends Component {

    render() {
        const {AppState,onClick} = this.props;

        return (
            <button onClick={onClick}>{AppState === 1?"Старт":"Закончить"}</button>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
        AppState:state.AppState
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LevelButton));
