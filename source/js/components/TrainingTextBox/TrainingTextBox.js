/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getRandomString} from '../../Actions/actions';
import Char from '../Char/';

export class TrainingTextBox extends Component {

    componentDidMount=()=>{
        const {TrainingText,getRandomString} = this.props;
        getRandomString(TrainingText);
    };
    render() {
        const {TrainingText} = this.props;
        return (
            <div style={{display:'flex'}}>
                {typeof TrainingText !=='string'?TrainingText.map((char,i) => (
                    <Char key={i}
                        name={char}

                    />
                )):'Подождите, идет загрузка'}
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
        TrainingText:state.TrainingText,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getRandomString: (string) => {
            dispatch(getRandomString(string));
        },

    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TrainingTextBox));
