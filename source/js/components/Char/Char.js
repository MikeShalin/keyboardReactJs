/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class Char extends Component {

    render() {
        const {name,isChecked,isError} = this.props;
        return (
            <div style={{
                border:isError?'1px solid red':'1px solid gray',
                background:isChecked?'gray':'#fff',
                marginRight:'10px',
                padding:'5px'
            }}>
                {name}
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{

    }
};

const mapDispatchToProps = (dispatch) =>{
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Char));
