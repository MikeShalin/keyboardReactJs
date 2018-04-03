/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TrainingFields from '../TrainingFields';
import TrainingTextBox from '../TrainingTextBox';
import {keyboard, getStopwatch, getTimer, trainingStart} from "../../Actions/actions";

export class Results extends Component {
    handleRepeat =()=>{
        const {trainingStart} = this.props;
        trainingStart(1);
    };
    componentDidMount(){
        const {keyboard,getTimer,getStopwatch,Timer,Stopwatch} = this.props;
    }
    render() {
        const {Stopwatch,ErrorsCount,CharCount} = this.props;
        return (
            // кол-во ошибок, затраченное время, общее кол-во символов в тренировке, кнопку «Заново» для повторной тренировки
            <div>
                <h3>Результаты тренировки</h3>
                {[Stopwatch,ErrorsCount,CharCount].map((field,i) => (
                    <TrainingFields
                        key = {i}
                        name = {field.name}
                        value = {field.value}
                    />
                ))}
                <button onClick={this.handleRepeat}>Заново</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Stopwatch:{name:'Затрачено времени',value:state.Stopwatch},
        ErrorsCount:{name:'Кол-во ошибок',value:state.ErrorsCount},
        CharCount:{name:'Кол-во символов в тренировке',value:state.CharCount},
        AppState:state.AppState
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        keyboard: (key) => {
            dispatch(keyboard(key));
        },
        getTimer: (sec)=>{
            dispatch(getTimer(sec))
        },
        getStopwatch: (sec)=>{
            dispatch(getStopwatch(sec))
        },
        trainingStart: () => {
            dispatch(trainingStart());
        },

    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Results));
