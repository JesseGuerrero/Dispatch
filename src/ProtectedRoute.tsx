import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthService } from './Utils';

type ProtectedRouteProps = {
    component: React.ComponentType;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const authenticated = await AuthService.isAuthenticated();
            setIsAuthenticated(authenticated);
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        // Render a loading indicator or return null while checking authentication status
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
