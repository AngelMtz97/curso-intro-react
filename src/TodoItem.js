import { BsCheck2, BsFillTrashFill } from "react-icons/bs";
import './TodoItem.css';

function TodoItem(props){
    return (
          <li>
               <div className="item-container">
                <span><BsCheck2 color={props.completed ? "gray" : "#198754"} size={24} strokeWidth={2}/></span>
                <p className={props.completed ? `text-completed` : ``}>{props.text}</p>
                <span ><BsFillTrashFill color="#dc3545" size={20} id="btn-delete"/></span>
              </div>
          </li>

    );
 }

 export {
   TodoItem
 }