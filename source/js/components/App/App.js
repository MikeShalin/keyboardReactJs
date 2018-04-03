/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Training from '../Training/';
import Results from '../Results/';
import LevelButton from '../LevelButton/';
import {trainingStart} from '../../actions/actions';

export class App extends Component {

    handleStateUp =()=> {
        const {trainingStart,AppState} = this.props;
        trainingStart(AppState+1);
    };

    render() {
        const {AppState} = this.props;
        return (
            <div>
                <LevelButton
                    onClick={this.handleStateUp}
                />
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
