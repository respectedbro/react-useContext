import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {addUser, removeUser} from '../../features/users/usersSlice.js';

import './style.css';

const Users = () => {
    const [newUser, setNewUser] = useState('');
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    const handleAddUser = (e) => {
        e.preventDefault();
        if (newUser.trim() === '') {
            alert('введите имя');
        } else {
            dispatch(addUser(newUser));
            setNewUser('');
        }

    };

    const handleRemoveUser = (id) => {
        dispatch(removeUser(id));
    };


    return (


        <div className="container">
            <h3>Users</h3>
            <form className="form" onSubmit={handleAddUser}>
                <input
                    className="input"
                    type="text"
                    placeholder="введите имя"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>

            <div>
                <ul className="list">
                    {users.map((user) => (
                        <li className="list-item" key={user.id}>
                            <div>{user.name}</div>
                            <button onClick={() => handleRemoveUser(user.id)}>Удалить</button>
                        </li>

                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Users;