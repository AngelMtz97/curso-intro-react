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
                    <BsCheck2 className={props.completed ? "btn-complete-check" : "btn-complete-nocheck"} size={24} strokeWidth={2} id="btn-complete"/>
                </span>
                <p className={props.completed ? `text-completed` : ``}>{props.text}</p>
                <span onClick={() => { 
                  props.ondelete(props.text);
                }}>
                  <BsFillTrashFill color="gray" size={20} id="btn-delete"/>
                </span>
              </div>
          </li>

    );
 }

 export {
   TodoItem
 }