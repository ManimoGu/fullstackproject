
import './App.css';
import { getList } from './Redux/Reducers/TaskReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

   const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getList())

  }, [])

  const Tasks = useSelector(state => state.ListTasks.tasks)
  
  console.log(Tasks)

  return (
    <div className="App">

      {
        Tasks.map(item =>(
          <h1>{item.titre}</h1>
        ))
      }
     
    </div>
  );
}

export default App;
