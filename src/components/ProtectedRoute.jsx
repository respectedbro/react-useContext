import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth.auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
