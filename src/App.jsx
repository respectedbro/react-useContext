import './App.css';
import {lazy, Suspense, useState} from 'react';

const LazyBigComponent = lazy(() => import('./components/BigComponent.jsx'));

function App() {
    const [showBigComponent, setShowBigComponent] = useState(false)

   const handleShowComponent = () => {
        setShowBigComponent(true)
   }

    return (
        <>
            <h1>APP</h1>
            <button onClick={handleShowComponent}>Показать компонент</button>
            {
                showBigComponent && (
                    <Suspense fallback={<p>Загрузка...</p>}>
                        <LazyBigComponent/>
                    </Suspense>
                )
            }


        </>
    );
}

export default App;
