/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ErrorChar from "../../reducers/ErrorChar/ErrorChar";

export class Char extends Component {

    render() {
        const {name,isChecked,isError} = this.props;
        console.log('в char',isError);
        // isChecked?"Char Char--checked":
        return (
            <div className={isError?"Char Char--error":isChecked?"Char Char--checked":"Char"} >
                {name}
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return {}
};

const mapDispatchToProps = (dispatch) =>{
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Char));
