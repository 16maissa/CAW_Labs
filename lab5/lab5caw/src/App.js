
import './App.css';
import React from 'react';
import { ClickButton, ToggleButton, Buttons, Counter } from './exo1';
import {DisplayTab, DisplayTab2 ,DisplayTab3,DisplayTab4,DisplayTab5} from './exo2';

import { AuthForm } from './exo3';
import { AddDivs } from './exo4';

function App() {
  return (
    <div>   
      
      
      <section>
        <h2>Exo1</h2>
        <div>
          <h3>Q1: Click Button</h3>
          <ClickButton />
        </div>
        <div>
          <h3>Q2: Toggle Button</h3>
          <ToggleButton />
        </div>
        <div>
          <h3>Q3: 3 Buttons</h3>
          <Buttons />
        </div>
        <div>
          <h3>Q4: Counter</h3>
          <Counter />
        </div>
      </section>

      
      <section>
        <h2>Exo2</h2>
        <div>
          <h3>Q1</h3>
          <DisplayTab />
        </div>
        <div>
          <h3>Q2</h3>
          <DisplayTab2 />
        </div>
        <div>
          <h3>Q3</h3>
          <DisplayTab3 />
        </div>
        <div>
          <h3>Q4</h3>
          <DisplayTab4 tab={["hello", "world", "from", "react"]} />
        </div>
        <div>
          <h3>Q5</h3>
          <DisplayTab5 />
        </div>
      
      </section>



      
      <section>
        <h2>Exercise 3</h2>
        <AuthForm />
      </section>

   
      <section>
        <h2>Exo4</h2>
        <AddDivs />
      </section>
    </div>
  );
}

export default App;
