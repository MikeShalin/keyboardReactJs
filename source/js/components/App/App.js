/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import Training from '../Training/';
import LevelButton from '../LevelButton/';
import {appStateUp,trainingStart} from '../../Actions/actions';

export class App extends Component {

    handleStateUp =()=> {
        const {trainingStart} = this.props;
        trainingStart();
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
        trainingStart: () => {
            dispatch(trainingStart());
        },
        // addNewProduct: (product) => {
        //     dispatch(addNewProduct(product));
        // },
        // handleEdit: (product) => {
        //     dispatch(handleEdit(product));
        // },
        // updateDoneRow: (ID) => {
        //     dispatch(updateDoneRow(ID));
        // },
        // deleteProduct: (ID) => {
        //     dispatch(deleteProduct(ID));
        // }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
