import { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListStyle = styled.div`
    margin:0 auto;
    padding:1rem;
    width:500px;
    background-color:#141414;
    border-radius:5px;
    box-shadow:0 0 15px rgba(0,0,0,.2);
    h1{
        color:#ddd;
        text-align:center;
        margin-bottom:2rem;
    }
    form{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:1.5rem;
        input{
            padding:0.5rem;
            background:#ddd;
            border:none;
            border-radius:5px 0 0 5px;
            width:80%;
            transition:all .3s ease-in-out;
            &:hover{
                background:#fff;
            }
            &:active{
                background:#fff;
                outline:none;
            }
            &:focus{
                background:#fff;
                outline:none;
            }
        }
        button{
            border:none;
            padding:0.5rem 1rem;
            border-radius:0px 5px 5px 0px;
            background:#3ad4b0;
            color:#141414;
            font-weight:500;
            cursor:pointer;
        }
    }
`
const TodoList = () => {
    const [todos,setTodos]=useState([])
    const [inputValue,setInputValue]=useState("")

    document.body.style = 'background:#3ad4b0'
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // validation
        if (inputValue === "") {
          alert('Please add item!');
          return;
        }
      
        setTodos([...todos, inputValue.toUpperCase()]);
        setInputValue("");
        document.getElementById("todo-input").value = "";
      }

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }

    const handleDeleteTodo=(index)=>{
        if(!window.confirm("Are you sure you want to delete this item?")){
            return
        }
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos)
    }
  return (
    <TodoListStyle>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add todo" onChange={handleInputChange} id={'todo-input'}/>
            <button type="submit">Add</button>
        </form>
        <ul>
          {
            todos.map((todo,index)=>(<TodoItem key={index} todo={todo} nr={index} deleteTodo ={handleDeleteTodo}/>))
          }       
        </ul>
    </TodoListStyle>
  )
}

export default TodoList