import todo_icon from '../assets/todo_icon.png'
import ToDoItems from './ToDoItems';
import {useEffect, useRef, useState} from 'react';
//hi todo
const ToDo = () => {

    const [toDoList, setToDoList] = useState(
        localStorage.getItem("toDoList") ? JSON.parse(localStorage.getItem("toDoList")) : []
    );

    const inputRef = useRef();
    const add = () =>{
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }

        const newToDo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }

        setToDoList((prev) => [...prev, newToDo]);
        inputRef.current.value = "";
    }

    const deleteToDo = (id) => {
        setToDoList((prev) => {
            return prev.filter((item) => item.id !== id)
    });
    }

    const toggleComplete = (id) => {
        setToDoList((prev) => {
            return prev.map((item) => {
                if(item.id === id){
                    return {...item, isComplete: !item.isComplete}
                }
                return item;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }, [toDoList])

   return (
        <div className="bg-white place-self-center w-11/12 max-w-md
        flex flex-col p-7 min-h-[34.4rem] rounded-xl">

 {/* -----title------------- */}
            <div className="flex items-center mt-7 gap-2">
                <img className="w-8" src={todo_icon} alt="To DO icon" />
                <h1 className="text-3xl font-semibold">To do list</h1>
            </div>
 {/* -----input box------------- */}
            <div className="flex items-center my-7 bg-gray-200 
            rounded-3xl">
                <input ref={inputRef} className="bg-transparent border-0 outline-none
                 flex-1 h-14 pl-4 pr-2 placeholder:text-slate-600"type="text" placeholder="Add your task"/>
                <button onClick={add} className="pl-2 border-none rounded-3xl bg-orange-600 w-32 h-14 text-white text-lg
                font-medium cursor-pointer">ADD +</button>
            </div>
 {/* -----ToDoList------------- */}
            <div>
                {toDoList.map((item) => {
                    return (
                        <ToDoItems key ={item.id} toDoList={item} deleteToDo={deleteToDo} toggleComplete={toggleComplete}></ToDoItems>
                    )
                })}
            </div>
        </div>
   )
}

export default ToDo;