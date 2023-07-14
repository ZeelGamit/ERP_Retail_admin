import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormContainer, Heading, Pagebody, Textarea } from './AddBusiness.styled';
import { theme } from '../../../theme';
import { addnewbusiness } from '../../../services/business_service';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBusiness = (props) => {
    const navigate = useNavigate()

    const [data, setData] = useState({ business_name: "", email: "", password: "", your_name: "", mobileno: "", full_address: "", city: "", admin_id: localStorage.getItem('admin') });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addnewbusiness(data);
        if (response.status === "OK") {
            navigate("/home/businesses/getallbusinesses");
        } else {
            toast.error(response.data.error, {
                onClose: () => {
                    setData({ business_name: "", email: "", password: "", your_name: "", mobileno: "", full_address: "", city: "", admin_id: localStorage.getItem('admin') });
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
                            <li className="list-group-item card-heading heading"><Heading>Add Bussiness</Heading></li>
                            <li className="list-group-item card-body">
                                <form onSubmit={handleSubmit} id="add_business">
                                    <div>
                                        <label className="form-label">Business name</label>
                                        <input name="business_name" value={data.business_name} placeholder="e.g. abc store" onChange={onChange} required />
                                        <input type="hidden" name='admin_id' value={props.admin_id} />
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
                                        <label className="form-label">Contact name</label>
                                        <input type="text" name="your_name" value={data.your_name} placeholder="e.g. user" onChange={onChange} required />
                                    </div>
                                    <div>
                                        <label className="form-label">Mobile no</label>
                                        <input type="text" max="11" min="6" name="mobileno" value={data.mobileno} placeholder="e.g. +91 12345 67890" onChange={onChange} required />
                                    </div>
                                    <div>
                                        <label className="form-label">Address</label>
                                        <Textarea name="full_address" value={data.full_address} placeholder="1234 Main Street" onChange={onChange} required />
                                    </div>
                                    <div>
                                        <label className="form-label">City</label>
                                        <input type="text" name="city" value={data.city} placeholder="City" onChange={onChange} required />
                                    </div>
                                    <input className="button" type="submit" value="Add" />
                                </form>
                            </li>
                        </ul>
                    </FormContainer>
                </Pagebody>
            </div>
        </ThemeProvider>
    );
}

AddBusiness.propTypes = {

};

export default AddBusiness;