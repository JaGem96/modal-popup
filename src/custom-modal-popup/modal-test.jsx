import { useState } from "react"
import Modal from "./modal";
import './modal.css';




export default function ModalTest(){

    const [showModalPopup,setShowModalPopup] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    }

    function onClose(){
        setShowModalPopup(false);
    }

    return <div>
        <button onClick={handleToggleModalPopup}>OPEN CUSTOM MODAL POP UP</button>

        {
            showModalPopup && <Modal id={"custom-ID"}
            header={<h1>
                GROUP CORPORATION
            </h1>} footer={<h1>WE WILL DO IT!!</h1>} onClose={onClose} body={<div>Customized Body</div>}/>
        }
    </div>
}