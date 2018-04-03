/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TrainingFields from '../TrainingFields';
import TrainingTextBox from '../TrainingTextBox';
import {keyboard, getStopwatch, getTimer} from "../../Actions/actions";

export class Training extends Component {
    timerStop =()=>{
        clearInterval(this.timer);
        clearInterval(this.stopwatch);
    };
    componentDidMount(){
        const {keyboard,getTimer,getStopwatch,Timer,Stopwatch} = this.props;
        let timerTime = Timer.value,
            stopwatchTime = Stopwatch.value;
        timerTime--;
        stopwatchTime++;
        addEventListener("keydown", function(e) {
            console.log('В тренировке', e.key);
            if((e.key !== 'Control') || (e.key !== 'Alt') || (e.key !== 'Shift'))
                keyboard(e.key);
        });

        this.timer = setInterval(()=>{
            if(timerTime === 0){
                clearInterval(this.Timer);
            }
            getTimer(timerTime);
        },1000);

        this.stopwatch = setInterval(()=>{
            if(stopwatchTime === 60){
                clearInterval(this.Stopwatch);
            }
            getStopwatch(stopwatchTime);
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
                    />
                ))}
                <button onClick={this.done}>done</button>
                <TrainingTextBox

                />
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
