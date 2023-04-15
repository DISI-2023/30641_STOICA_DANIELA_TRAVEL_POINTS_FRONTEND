import style from './DeleteButton.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const DeleteButtonView = (props) => {
    return (
        <div className={style.container} onClick={props.buttonHandle}>
            <FontAwesomeIcon icon={faTrash} className={style.icon}/>
        </div>
    );
}

export default DeleteButtonView
