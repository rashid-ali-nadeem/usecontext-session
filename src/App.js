import React,{useState} from 'react';
import CounterContext from './CounterContext.js';
import Parent from './Parent.js';

function App() {
  let countValue = useState(10); 
  return (
    <CounterContext.Provider value = {countValue}>
      <div>
        <Parent/>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
