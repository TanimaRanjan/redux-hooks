import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import toggleSwitch from './reducers/subReducer'
import selectNumOfDoneTodos, {selectTodos, selectTitle} from './selectors/selectors'

import './App.css';

function App() {

  const ui = useSelector(state => state.data)
  // const todos = useSelector(state => state.data.todos)
  const todos = useSelector(selectTodos)
  const noOfTodo = useSelector(selectNumOfDoneTodos)

  const title = useSelector(selectTitle)
  console.log('Title ', title)
  const dispatch = useDispatch()
  // console.log('Test ', todos1)
  return (
    <div className="App">
      <h1>{title}</h1>
      <div>{JSON.stringify(ui)}</div>
      <p>No of Todos {noOfTodo}</p>
      <ul>
        {todos.map((todo => (
          <li key={todo.id}>{todo.title}
          <input 
          type="checkbox"
            value={todo.completed}
          onChange={() => dispatch({type:'TOGGLE_TODO', payload:todo.id})} 
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
