import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from './features/counter/counterSlice.js';
import Users from './compnents/Users/index.jsx';

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div style={{padding: 20}}>
                <h1>Счётчик: {count}</h1>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <Users/>
        </>
    );
}

export default App;
