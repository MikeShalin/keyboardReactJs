/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TrainingFields from '../TrainingFields';
import {trainingStart} from "../../actions/actions";

export class Results extends Component {
    render() {
        const {Stopwatch,ErrorsCount,CharCount} = this.props;
        CharCount.value = 10 - CharCount.value;
        Stopwatch.value = Stopwatch.value + 1;
        return (
            <div>
                <h3>Результаты тренировки</h3>
                {[Stopwatch,ErrorsCount,CharCount].map((field,i) => (
                    <TrainingFields
                        key = {i}
                        name = {field.name}
                        value = {field.value}
                        etc = {field.etc}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Stopwatch:{name:'Затрачено времени',value:state.Stopwatch,etc:'с'},
        ErrorsCount:{name:'Кол-во ошибок',value:state.ErrorsCount},
        CharCount:{name:'Кол-во символов в тренировке',value:state.CharCount},
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

export default connect(mapStateToProps,mapDispatchToProps)(Results);
