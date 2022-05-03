
import './App.css';
import react, {useReducer,useEffect} from 'react';

import {todoReducer} from './todoReducer';
import { useForm } from './hooks/useForm';
import {TodoList} from '../src/componets/TodoList';

const init = () => {

return JSON.parse(localStorage.getItem("todos"))
}



function App() {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

 const [{description}, handelInputChange,reset] = useForm({
    description: ""
  });


  useEffect(() => {
    
    localStorage.setItem("todos",JSON.stringify(todos))
    
  }, [todos]);

  const handleDelete = (todoId)=> {

    const action = {
      type:"delete",
      payload: todoId
    }

    dispatch(action);
  }
  const handleToggle = (todoId)=> {


    //Crear la accion
    const action = {
      type:"toggle",
      payload: todoId
    }

    //Llamar el dispatch
    dispatch(action);
  }



  const handelSubmit = (e)=> {
    e.preventDefault();
    console.log("nueva tarea");

    if(description.trim().length <= 1){
      return ;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    const action = {
      type:"add",
      payload: newTodo
    }

    dispatch(action);

    reset();
  }
  
  return (
    <div >
  
       <h1>Lista de tarea ({todos.length})</h1>
       <hr/>

       <div className='row'>
          <div className='col-7'> 
           <TodoList
                    todos={todos} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle} />
          </div>
          
          <div className='col-5'> 
              
              <h4>Agregar una Tarea</h4>
               <hr/>


               <form 
                     onSubmit={handelSubmit}>

                 <input
                      type='text'
                      name="description"
                      placeholder='Aprender ...'
                      autoComplete='off'
                      className='form-control'
                      value={description}
                      onChange={handelInputChange} 
                 />

                 <button
                        type="submit"
                        className='btn btn-outline-primary mt-1 btn-block'> Agregar </button>

               </form>

          </div>

       </div>
    </div>
  );
}

export default App;
