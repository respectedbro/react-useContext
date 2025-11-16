import './style.css';
import {useState} from 'react';

export const Modal = ({handleClose, text, handleSave}) => {
    const [value, setValue] = useState(text);

    return (
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
        </div>
    );
};