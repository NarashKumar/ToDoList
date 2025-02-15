/* eslint-disable react/prop-types */
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"
const ToDoItems = ({toDoList, deleteToDo, toggleComplete}) =>{

    const {id, text, isComplete} = toDoList;

    return(
        <div className="flex items-center my-3">
            <div onClick={() => toggleComplete(id)} className="flex flex-1  items-center cursor-pointer">
                <img src={isComplete ? tick : not_tick} alt="tick icon" className="w-7"/>
                <p className={`text-slate-700 ml-4 text-lg decoration-slate-500
                    ${isComplete ? "line-through" : ""}`}>{text}</p>
            </div>
        <img onClick={() => deleteToDo(id)} src={delete_icon} alt="" className="w-3.5 
        cursor-pointer" />
        </div>
    )
}

export default ToDoItems;