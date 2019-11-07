import React  from 'react';
import {connect} from 'react-redux';

import {fetchNameDay} from '../redux/action'


function NameDay(props){

    return <button onClick={()=> props.dispatch(fetchNameDay())}>Press ME</button>
}
    
      export default connect(state => {
        console.log("mapStateToProps.STATE", state);
        return state;
      })(NameDay);
    