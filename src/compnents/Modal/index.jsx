import './style.css';
import {useState} from 'react';
import {createPortal} from 'react-dom';

const modalRoot = document.getElementById('portal');

export const Modal = ({handleClose, text, handleSave}) => {
    const [value, setValue] = useState(text);


    return createPortal(
        <div className='modal-overlay'>
            <div className="modal">
                <span onClick={handleClose}>X</span>
                <h3>Edit text</h3>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}

                />
                <button onClick={() => handleSave(value)}>Save</button>
            </div>
        </div>, modalRoot
    );
};