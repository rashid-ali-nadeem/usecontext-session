import React, { useReducer } from 'react';
import CounterReducer from './ContextReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer,8);
    console.log(state);
    return (
        <div>
            <h2>Value in Counter Reducer is {state} </h2>
            <button onClick = {() => {dispatch("INCREMENT")}} >Increment</button>
            <button onClick = {() => {dispatch("DECREMENT")}} >Decrement</button>
        </div>
  )
}
export default Child2;