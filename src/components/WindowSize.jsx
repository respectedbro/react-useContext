import useWindowSize from '../customHook/useWindowSize.jsx';

const WindowSize = () => {
    const {width, height} = useWindowSize()

    return (
        <div>
            <h2>Размер окна:</h2>
            <p>ширина: {width}</p>
            <p>высота: {height}</p>
        </div>
    )
}

export default WindowSize