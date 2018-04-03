/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import Training from '../Training/';
import Results from '../Results/';
import LevelButton from '../LevelButton/';
import {appStateUp,trainingStart} from '../../Actions/actions';

export class App extends Component {

    handleStateUp =()=> {
        const {trainingStart,AppState} = this.props;
        trainingStart(AppState+1);
    };

    render() {
        const {AppState} = this.props;
        console.log("Компонента app auth:",AppState);

        return (
            <div>
                <LevelButton
                    onClick={this.handleStateUp}
                />
                Этап {AppState}
                {AppState===2?<Training/>:""}
                {AppState===3?<Results/>:""}
            </div>
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
        },
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
