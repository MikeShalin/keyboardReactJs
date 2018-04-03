/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TrainingFields from '../TrainingFields';
import TrainingTextBox from '../TrainingTextBox';
import {keyboard, getStopwatch, getTimer,trainingStart,errorChar} from "../../actions/actions";

export class Training extends Component {
    componentWillUnmount(){
        clearInterval(this.timer);
        clearInterval(this.stopwatch);
        removeEventListener("keydown", this.keyboardListener);
    };
    keyboardListener =(e)=>{
        const {keyboard} = this.props;
        if(e.key.length === 1){
            keyboard(e.key);
        }
    };
    interval = (timerTime,trainingStart,AppState,getTimer) =>setInterval(()=>{
        timerTime--;
        getTimer(timerTime);
        if(timerTime === 0){
            clearInterval(this.timer);
            trainingStart(AppState+1);
        }
    },1000);
    // componentWillReceiveProps(nextProps){
    //     const {TrainingText,errorChar} = this.props;
    //     if(nextProps.TrainingText.length !== TrainingText.length){
    //         console.log('Хуй там плавал');
    //     } else {
    //         console.log('Одинаково');
    //
    //     }
    // }
    componentDidUpdate(prevProps) {
        const {Timer,CharCount,AppState,getTimer,trainingStart,TrainingText,errorChar} = this.props;
        let timerTime = Timer.value;
        // console.log(TrainingText);
        // if(TrainingText.length !== CharCount){
        //     console.log('Хуй там плавал');
        // } else {
        //     console.log('Одинаково');
        //
        // }
        if(CharCount.value === 0){
            trainingStart(AppState+1);
        }
        if(prevProps.CharCount.value !== CharCount.value){
            clearInterval(this.timer);
            timerTime = 60;
            getTimer(timerTime);
            this.timer = this.interval(timerTime,trainingStart,AppState,getTimer);
        }
    }
    componentDidMount(){
        const {
            getTimer,
            getStopwatch,
            Timer,
            Stopwatch,
            trainingStart,
            AppState} = this.props;
        let timerTime = Timer.value,
            stopwatchTime = Stopwatch.value;
        addEventListener("keydown", this.keyboardListener);

        this.timer = this.interval(timerTime,trainingStart,AppState,getTimer);

        this.stopwatch = setInterval(()=>{
            stopwatchTime++;
            getStopwatch(stopwatchTime);
            if(stopwatchTime === 60){
                clearInterval(this.stopwatch);
                trainingStart(AppState+1);
            }
        },1000);
    }
    render() {
        const {Timer,Stopwatch,ErrorsCount,CharCount} = this.props;
        return (
            <div>
                {[Timer,Stopwatch,ErrorsCount,CharCount].map((field,i) => (
                    <TrainingFields
                        key = {i}
                        name = {field.name}
                        value = {field.value}
                        etc = {field.etc}
                    />
                ))}
                <TrainingTextBox/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Timer:{name:'Осталось времени',value:state.Timer,etc:'с'},
        Stopwatch:{name:'Прошло времени',value:state.Stopwatch,etc:'с'},
        ErrorsCount:{name:'Кол-во ошибок',value:state.ErrorsCount},
        CharCount:{name:'Осталось символов',value:state.CharCount},
        TrainingText:state.TrainingText,
        AppState:state.AppState
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        trainingStart: (level) => {
          dispatch(trainingStart(level))
        },
        errorChar: (char) => {
            dispatch(errorChar(char))
        },
        keyboard: (key) => {
            dispatch(keyboard(key));
        },
        getTimer: (sec)=>{
            dispatch(getTimer(sec))
        },
        getStopwatch: (sec)=>{
            dispatch(getStopwatch(sec))
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Training));
