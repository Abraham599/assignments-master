import { RecoilRoot, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { filterAtom, filterSelector, todoAtom } from "./store/atoms/todo";
import { useState,useEffect } from "react";



function App() {

  return (
    <>
    <RecoilRoot>
      <Todo />
      </RecoilRoot>
    </>
  );
}

function Todo(){
  
  return (
    <div>
      <Input/>
      <Filter/>
    </div>
  );
}


function Input(){
  const [title,setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todo,setTodo] = useRecoilState(todoAtom);

  useEffect(() => {
    // Log the current state of 'todoAtom' whenever it changes
    console.log("Current Todo List:", todo);
  }, [todo]); 

  const addTodo = ()=>{
    if(title && desc){
    setTodo((todo)=>[
      ...todo,
      {
         
        id: Math.random(),
        title: title,
        desc : desc,
      },
    ]);
  }
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <input type="text"  placeholder="Enter title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <input type="text"  placeholder="Enter description" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
      <div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
    </div>
  );
}


function Filter(){
  const [filter, setFilter] = useRecoilState(filterAtom);
  const todoItem = useRecoilValue(filterSelector);
  useEffect(() => {
    // Log the current state of 'todoAtom' whenever it changes
    console.log("Filtered Todo List:", todoItem);
  }, [todoItem]);
  return (
    <>
  <input type="text" value={filter} onChange={(e)=>setFilter(e.target.value)}/>
  <h2>Todo List</h2>

  <ul>
    {todoItem.map((todo)=>(
      <li key={todo.id}>
        {todo.title}-{todo.desc}
      </li>
    ))
    
    }
    
  </ul>

    </>
  );
}

export default App
