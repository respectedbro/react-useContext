import {Navigate} from 'react-router-dom';

const AdminRoute = ({isAuth, children}) => {
    if (!isAuth.auth) {
        return <Navigate to="/login" replace/>;
    }

    if (isAuth.role !== 'admin') {
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default AdminRoute;


