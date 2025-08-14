import {useEffect, useState} from 'react';

const withLoading = (WrapComponent) => {
    return (props) => {
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            const timeOut =setTimeout(() => {
                setLoading(false)
            }, 2000)

            return () =>clearTimeout(timeOut)
        }, []);

        if (loading) {
            return <div>Загрузка</div>
        }

        return <WrapComponent {...props}/>
    }
}

export default withLoading