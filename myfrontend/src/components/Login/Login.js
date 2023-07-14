import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormContainer, Heading, Pagebody, StyledLogo } from './Login.styled';
import { theme } from '../../theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../services/login_service';
import { useNavigate } from 'react-router-dom';
import { bool, func } from 'prop-types';

const Login = ({ auth, setAuth }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login(data);
        if (response.status === "OK") {
            setAuth(true)
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('admin', response.data[0].id);
            localStorage.setItem('role', response.data[0].role);
            navigate("/home/dash");
        } else {
            toast.error(response.data.error, {
                onClose: () => {
                    setData({ email: "", password: "" });
                }
            });
        }
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    
    return (
        <ThemeProvider theme={theme}>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <StyledLogo>myRetail</StyledLogo>
                <Pagebody>
                    <FormContainer>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item card-heading heading"><Heading>Login</Heading></li>
                            <li className="list-group-item card-body">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" value={data.email} placeholder="e.g. user@gmail.com" onChange={onChange} required />
                                    </div>
                                    <div>
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" value={data.password} placeholder="Password" onChange={onChange} required />
                                    </div>
                                    <input className="button" type="submit" value="Login" />
                                </form>
                            </li>
                        </ul>
                    </FormContainer>
                </Pagebody>
            </div>
        </ThemeProvider>
    );
}

Login.propTypes = {
    auth: bool.isRequired,
    setAuth : func.isRequired
};

export default Login;