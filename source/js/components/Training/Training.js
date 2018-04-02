/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getTrainingText,getRandomString} from '../../Actions/actions';

export class Training extends Component {
    componentDidMount =()=> {
        const {TrainingText} = this.props;
        console.log("Компонента Training componentDidMount:",TrainingText);
        getRandomString(TrainingText);
    };

    render() {
        const {TrainingText} = this.props;

        return (
            <div>
                {TrainingText}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        TrainingText:state.TrainingText
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getTrainingText:()=>{
            dispatch(getTrainingText());
        },
        getRandomString: (string) => {
            dispatch(getRandomString(string));
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Training));
