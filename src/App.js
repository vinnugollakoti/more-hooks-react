// import React, { useReducer, useRef } from 'react';

// const add_todo = "addtodo"
// const changedtodo = "the context is hidden"


// const todoreducer = (state, action) => {
//   switch (action.type) {
//     case add_todo:
//       return [{id: DataTransfer.now(), text: action.v, completed:false}, ...state]
//     case changedtodo:
//       console.log("the text is hidden now")
//       return state
//     default:
//       return state
//   }
// }
// const Todolist = () => {
//   const [todos, dispatch] = useReducer(todoreducer, [])
//   const inputRef = useRef()

//   const addTodo = () => {
//     const text = inputRef.current.value.trim()
//     if (text !==""){
//       dispatch({type:add_todo, v : text})
//       inputRef.current.value = ""
//     }
//   }
//   const changetodo = (id) => {
//     dispatch({type:changedtodo,v : id})
//   }



//   return (
//     <div>
//       <center>
//         <h1>To do</h1>
//         <div>
//           <input type='text' ref={inputRef}/> &nbsp;&nbsp;&nbsp;
//           <button onClick={addTodo}>Add</button>
//         </div>
//         <div>
//           <ul>
//             {todos.map((todo) => (
//               <li key={todo.id}>
//                 <input type='checkbox' checked={todo.completed} onChange={() => changedtodo} />
//                 {todo.text}
//                 <button onClick={() => changetodo(todo.id)}>Hide the context</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </center>
//     </div>
//   )
// }

// // exporting 
// export default Todolist











import React, { useReducer, useRef } from 'react';
import './App.css'



const add_todo = "addtodo";
const changedtodo = "the context is hidden";

const todoreducer = (state, action) => {
  switch (action.type) {
    case add_todo:
      return [{ id: Date.now(), text: action.v, completed: false, hidden: false }, ...state];
    case changedtodo:
      return state.map(todo =>
        todo.id === action.v ? { ...todo, hidden: !todo.hidden } : todo
      );
    default:
      return state;
  }
};



const Todolist = () => {
  const [todos, dispatch] = useReducer(todoreducer, []);
  const inputRef = useRef();

  const addTodo = () => {
    const text = inputRef.current.value.trim();
    if (text !== "") {
      dispatch({ type: add_todo, v: text });
      inputRef.current.value = "";
    }
  };

  const getFocus = () => {
    inputRef.current.focus()
  }

  const changetodo = (id) => {
    dispatch({ type: changedtodo, v: id });
  };

  return (
    <div>
      <center>
        <h1>To do</h1>
        <div>
          <input type='text' ref={inputRef} /> &nbsp;&nbsp;&nbsp;
          <button onClick={addTodo}>Add</button>
        </div>
        <div >
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className='tododiv'>
                {todo.hidden ? "Context is hidden" : todo.text}
                <br /><button onClick={() => changetodo(todo.id)}>toggle</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={getFocus} className='inputway'>Go back writing</button>
        </div>
      </center>
    </div>
  );
};

// exporting
export default Todolist;
