import React, { useReducer } from 'react';
import { initialState, CounterReducer} from './ContextReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer,initialState);
    console.log(state);
    return (
        <div>
            <h1>useReducer</h1>
            <p>useReducer is a hook that is used for state management in React.</p>
            <hr/>
            <h2>Value in Counter Reducer is: {state} </h2>
            <button onClick = {() => {dispatch("INCREMENT")}} >Increment</button>
            <button onClick = {() => {dispatch("DECREMENT")}} >Decrement</button>
            <button onClick = {() => {dispatch("RESET")}} >Reset</button>
        </div>
  )
}
export default Child2;