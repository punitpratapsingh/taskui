import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = ({
  redirectPath,
  children,
}) => {
  if (!localStorage.getItem("authToken")) {    
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;