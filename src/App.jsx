import './App.css';
import Component from './components/Component.jsx';
import withLoading from './HOC/withLoading.jsx';


function App() {
const ComponentWithLoading = withLoading(Component)
    return (
        <>
            <h1>APP</h1>
            <ComponentWithLoading />

        </>
    );
}

export default App;
