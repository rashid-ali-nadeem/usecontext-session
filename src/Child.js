import React,{ useContext } from 'react';
import CounterContext from './CounterContext.js';

const Child = () => {
    const counterValue = useContext(CounterContext);
    return (
        <div>
            <h2>Value is {counterValue[0]} </h2>
            <button onClick = {() => {counterValue[1](++counterValue[0])}} >Increment</button>
            <button onClick = {() => {counterValue[1](--counterValue[0])}} >Decrement</button>
        </div>
    )
}
export default Child;