import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import toggleSwitch from './reducers/subReducer'
import './App.css';

function App() {

  const ui = useSelector(state => state.subReducer)
  const dispatch = useDispatch()
  console.log(ui)
  return (
    <div className="App">
      <div>{JSON.stringify(ui)}</div>
      <ul>
        {ui.todo.map((todo => (
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
