import React,{ useContext } from 'react';
import CounterContext from './CounterContext.js';
import {NameContext, ContactContext} from './App';

const initialValue = 0
const Child = () => {
    const nameContext = useContext(NameContext);
    const contactContext = useContext(ContactContext);
    const counterValue = useContext(CounterContext);
    return (
        <div>
            <h1>Context</h1>
            <p>Context provides a way to pass data through the component tree 
            without having to pass props down manually at every level.</p>
            <hr/>
            <h4>I am {nameContext}</h4>
            <h4>Contact me: {contactContext}</h4>
            <hr/>
            <h2>Value in Counter Context is: {counterValue[0]} </h2>
            <button onClick = {() => {counterValue[1](++counterValue[0])}} >Increment</button>
            <button onClick = {() => {counterValue[1](--counterValue[0])}} >Decrement</button>
            <button onClick = {() => {counterValue[1](initialValue)}}>Reset</button>
            <hr/>
            <hr/>
        </div>
    )
}
export default Child;