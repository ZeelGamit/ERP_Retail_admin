import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormContainer, Heading, Pagebody } from './AddAcManager.styled';
import { theme } from '../../../theme';
import { addnewacmanager } from '../../../services/acmanager_service';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAcManager = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({ email: "", password: "", name: "", mobileno: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addnewacmanager(data);
        if (response.status === "OK") {
            navigate("/home/acmanagers/getallacmanagers");
        } else {
            toast.error(response.data.error, {
                onClose: () => {
                    setData({ email: "", password: "", name: "", mobileno: "" });
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
                <Pagebody>
                    <FormContainer>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item card-heading heading"><Heading>Add Account Manager</Heading></li>
                            <li className="list-group-item card-body">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="form-label">Name</label>
                                        <input type="text" name="name" value={data.name} onChange={onChange} placeholder="e.g. user" required />
                                    </div>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" value={data.email} placeholder="e.g. user@gmail.com" onChange={onChange} required />
                                    </div>
                                    <div>
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" value={data.password} placeholder="Password" onChange={onChange} required />
                                    </div>
                                    <div>
                                        <label className="form-label">Mobile no</label>
                                        <input type="text" max="10" min="6" name="mobileno" value={data.mobileno} placeholder="e.g. +91 12345 67890" onChange={onChange} required />
                                    </div>
                                    <input className="button" type="submit" value="Register" />
                                </form>
                            </li>
                        </ul>
                    </FormContainer>
                </Pagebody>
            </div>
        </ThemeProvider>
    );
}

AddAcManager.propTypes = {

};

export default AddAcManager;