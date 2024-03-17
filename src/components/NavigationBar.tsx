import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { AuthService, requestAPI } from '../Utils';
import { useNavigate } from 'react-router-dom';

interface NavProps {
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    balance: number;
}

const NavigationBar: React.FC<NavProps> = ({balance, setBalance}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const authenticated = await AuthService.isAuthenticated();
            setIsAuthenticated(authenticated);
            if(authenticated) {
                const response = await requestAPI("/user", "GET", {})
                const data = await response.json()
                setBalance(data['balance'])
            }
        };
        checkAuth();
    }, []);

    const logout = async (e: React.MouseEvent) => {
        e.preventDefault();
        AuthService.removeToken();
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Dispatch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    {isAuthenticated ? (
                        <>
                            <Nav.Link href="/">Balance: {balance} Emails</Nav.Link>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    {isAuthenticated ? (
                        <>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link onClick={logout} style={{ cursor: 'pointer' }}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
