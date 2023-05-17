import { BsCheck2, BsFillTrashFill } from "react-icons/bs";
import './TodoItem.css';

function TodoItem(props){
    return (
          <li>
               <div className="item-container">
                <span onClick={() => {
                        props.oncomplete(props.text);
                }
                }>
                    <BsCheck2 color={props.completed ? "#198754" : "gray"} size={24} strokeWidth={2}/>
                </span>
                <p className={props.completed ? `text-completed` : ``}>{props.text}</p>
                <span onClick={() => { 
                  props.ondelete(props.text);
                }}>
                  <BsFillTrashFill color="#dc3545" size={20} id="btn-delete"/>
                </span>
              </div>
          </li>

    );
 }

 export {
   TodoItem
 }