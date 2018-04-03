/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {trainingStart} from "../../actions/actions";


export class LevelButton extends Component {
    handleRepeat =()=>{
        const {trainingStart} = this.props;
        trainingStart(1);
    };

    render() {
        const {AppState,onClick} = this.props,
              btnTitle = [
                  'Старт',
                  'Закончить',
                  'Повторить'];
        return (
            <button onClick={AppState===3?this.handleRepeat:onClick}>{btnTitle[AppState-1]}</button>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
        AppState:state.AppState
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        trainingStart: (level) => {
            dispatch(trainingStart(level));
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LevelButton));
