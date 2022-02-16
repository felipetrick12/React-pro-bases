import React from 'react';
import { Counter } from './Components/Counter';
import { CounterBy } from './Components/CounterBy';
import { CounterEffect } from './Components/CounterEffect/index';
import { CounterEffectHook } from './Components/CounterHook';
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
    </>
  );
}

export default App;
