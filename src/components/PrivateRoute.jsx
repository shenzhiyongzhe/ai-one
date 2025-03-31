// PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () =>
{
    const isAuthenticated = localStorage.getItem('token'); // 假设使用 localStorage 存储 token

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
