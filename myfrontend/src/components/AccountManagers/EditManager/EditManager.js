import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { FormDesign, Heading, StyledButton } from './EditManager.styled';
import { theme } from '../../../theme';
import { ThemeProvider } from 'styled-components';
import { editacmanager } from '../../../services/acmanager_service';

const EditManager = ({ show, onHide, setManagerdata, managerdata }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await editacmanager(managerdata.id, managerdata);
        if (response.status === "OK") {
            toast.success("Account manager updated successfully.");
            window.location.reload();
        } else {
            toast.error(response.data.error);
        }
    }

    const onChange = (e) => {
        setManagerdata({ ...managerdata, [e.target.name]: e.target.value })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ToastContainer
                position="top-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <ThemeProvider theme={theme}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <Heading>Account Manager Data</Heading>
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <FormDesign>
                            <div>
                                <label for="name" class="form-label d-flex align-items-start">Name</label>
                                <input type="text" id="name" name="name" value={managerdata.name} onChange={onChange} />
                            </div>
                            <div>
                                <label for="mobileno" class="form-label d-flex align-items-start">Mobile no.</label>
                                <input type="text" id="mobileno" name="mobileno" value={managerdata.mobileno} onChange={onChange} />
                            </div>
                            <div>
                                <label for="email" class="form-label d-flex align-items-start">Email</label>
                                <input type="text" id="email" name="email" value={managerdata.email} onChange={onChange} />
                            </div>
                            <div>
                                <label for="password" class="form-label d-flex align-items-start">Password</label>
                                <input type="password" name="password" value={managerdata.password} onChange={onChange} />
                            </div>
                            {managerdata.isactive
                                ? <div>
                                    <button className="btn btn-outline-primary me-4">Activate manager</button>
                                </div>
                                : ""
                            }

                        </FormDesign>
                    </Modal.Body>
                    <Modal.Footer>
                        <StyledButton className="button" type="submit" value="Update" />
                    </Modal.Footer>
                </form>
            </ThemeProvider>
        </Modal>
    );
}

export default EditManager;