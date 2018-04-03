/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TrainingFields from '../TrainingFields';
import TrainingTextBox from '../TrainingTextBox';
import {keyboard} from "../../Actions/actions";

export class Training extends Component {
    componentDidMount(){
        const {keyboard} = this.props;
        addEventListener("keydown", function(e) {
            console.log('В тренировке', e.key);
            keyboard(e.key);
        });
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

        keyboard: (key) => {
            dispatch(keyboard(key));
        },
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Training));
