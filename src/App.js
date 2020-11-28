import React,{useState, createContext} from 'react';
import CounterContext from './CounterContext.js';
import Parent from './Parent.js';

export const NameContext = createContext();
export const ContactContext = createContext();

function App() {
  let countValue = useState(0); 
  return (
    <NameContext.Provider value = {'Rashid'}>
      <ContactContext.Provider value = {'rashid.ali.nadeem@gmail.com'}>
        <CounterContext.Provider value = {countValue}>
          <div>
            <Parent/>
          </div>
        </CounterContext.Provider>
      </ContactContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
