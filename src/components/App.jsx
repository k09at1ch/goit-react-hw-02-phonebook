import React from 'react';
import { nanoid } from 'nanoid';
import MyClassComponent from './class/Class';
import style from './class/Class.module.css'
const App = () => (
  <div>
    <h1 className={style.all}>Phonebook</h1>
    <MyClassComponent />
  </div>
);

export default App;
