import React from 'react';
import { Counter } from './Components/Counter';
import { CounterBy } from './Components/CounterBy';
import { CounterEffect } from './Components/CounterEffect/index';
import { CounterEffectHook } from './Components/CounterHook';
import { CounterComponentReducer } from './Core';
// import { CounterComponentReducer } from './Components/CounterComponentReducer/index';
import './index.css';

function App() {
  return (
    <>
      <h1>Bases</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterEffectHook />
      <CounterComponentReducer />
    </>
  );
}

export default App;
