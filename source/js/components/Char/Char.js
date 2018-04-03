/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Char extends Component {

    render() {
        const {name,isChecked,isError} = this.props;
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

export default connect(mapStateToProps,mapDispatchToProps)(Char);
