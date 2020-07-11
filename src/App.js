import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import toggleSwitch from './reducers/subReducer'
import selectNumOfDoneTodos, {selectTodos} from './selectors/selectors'

import './App.css';

function App() {

  const ui = useSelector(state => state.data)
  const todos = useSelector(state => state.data.todos)
  const todos1 = useSelector(selectTodos)
  const noOfTodo = useSelector(selectNumOfDoneTodos)


  const dispatch = useDispatch()
  console.log('Test ', todos1)
  return (
    <div className="App">
      <div>{JSON.stringify(ui)}</div>
      <p>No of Todos {noOfTodo}</p>
      <ul>
        {todos.map((todo => (
          <li key={todo.id}>{todo.title}
          <input 
          type="checkbox"
            value={todo.completed}
          onChange={() => dispatch({type:'TOGGLE'})} 
          />
          </li>
        )))}
      </ul>
      <input 
        type="checkbox"
          value={ui.toggle}
        onChange={() => dispatch({type:'TOGGLE'})} 
        />
    </div>
  );
}

export default App;
