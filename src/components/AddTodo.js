// import React, {useState} from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import Button from './Button';
// import Todos1 from './Todos1';
// function AddTodo() {

//     const [todos, settodos] = useState([{title:'buy milk', id: 1},{title:'prepare tea', id: 2}])
//     const [task, settask] = useState({title:'', id:''})
//   const handleChange=(e)=>{
//       //  console.log('i am in handle change')
//         settask({title:e.target.value,id:uuidv4()})

//     }
//  const handleSubmit=(e)=>{
//      e.preventDefault();
//       //  console.log('i am in handle submit')
//         settodos([...todos, task])
//         e.target.firstChild.value='';

//     }
//     //console.log(task)
//      console.log(todos)
//     return (
//         <div className="mytodo">
//             <h1 >Todolist</h1>
//             <form onSubmit={handleSubmit} >
//                 <input type='text' onChange={handleChange}></input>
//                 {/* <button className='btn' type='submit'>Add</button> */}
//                 <Button  text='Add'/>
//             </form>
//             <Todos1 todolist = {todos}/>
//         </div>
//     )
// }

// export default AddTodo