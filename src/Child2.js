import React, { useReducer } from 'react';
import CounterReducer from './ContextReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer,8);
    console.log(state);
    return (
        <div>
            <h2>Value in Counter Reducer is {state} </h2>
            <button onClick = {() => {dispatch("INCREMENT")}} >Increment in Value</button>
            <button onClick = {() => {dispatch("DECREMENT")}} >Decrement in Value</button>
        </div>
    )
}
export default Child2;