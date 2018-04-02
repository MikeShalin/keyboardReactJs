/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TrainingFields from '../TrainingFields';
import TrainingTextBox from '../TrainingTextBox';
import {getTimer,getStopwatch} from "../../Actions/actions";

export class Training extends Component {
    // componentDidMount =()=> {
    //     const {TrainingText,getRandomString} = this.props;
    //     getRandomString(TrainingText);
    // };
    render() {
        const {Timer,Stopwatch,ErrorsCount,CharCount} = this.props;
        console.log(Timer);
        return (
            <div>
                {[Timer,Stopwatch,ErrorsCount,CharCount].map((field,i) => (
                    <TrainingFields
                        key = {i}
                        name = {field.name}
                        value = {field.value}
                    />
                ))}
                <TrainingTextBox/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Timer:{name:'Осталось времени',value:state.Timer},
        Stopwatch:{name:'Прошло времени',value:state.Stopwatch},
        ErrorsCount:{name:'Кол-во ошибок',value:state.ErrorsCount},
        CharCount:{name:'Осталось символов',value:state.CharCount},
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {

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
