import Modal from 'react-bootstrap/Modal';
import { DiscountFeild, FormDesign, Heading, StyledButton } from './AddCoupon.styled';
import { theme } from '../../../theme';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { addnewcoupon } from '../../../services/coupon_service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCoupon = (props) => {

    const [data, setData] = useState({ coupon_code: "", discount_type: "", discount_value: "", valid_times: "", valid_days: "", admin_id: localStorage.getItem('admin') })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addnewcoupon(data);
        if (response.status === "OK") {
            window.location.reload();
        } else {
            toast.error(response.data.error, {
                onClose: () => {
                    setData({ coupon_code: "", discount_type: "", discount_value: "", valid_times: "", valid_days: "", admin_id: localStorage.getItem('admin') });
                }
            });
        }
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <Modal
            {...props}
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
                        <Heading>Generate coupon</Heading>
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <FormDesign>

                            <div>
                                <label for="coupon_code" class="form-label d-flex align-items-start">Coupon code</label>
                                <input type="text" id="coupon_code" placeholder="e.g.ABC12" name="coupon_code" value={data.coupon_code} onChange={onChange} />
                                <input type="hidden" name='admin_id' value={props.admin_id} />
                            </div>
                            <div>
                                <label for="discount_value" class="form-label d-flex align-items-start">Discount</label>
                                <DiscountFeild>
                                    <input type="text" id="discount_value" placeholder="Enter value" name="discount_value" value={data.discount_value} onChange={onChange} />
                                    <select name="discount_type" onChange={onChange} value={data.discount_type}>
                                        <option value="0">%</option>
                                        <option value="1">&#8377;</option>
                                    </select>
                                </DiscountFeild>
                            </div>
                            <div>
                                <label for="valid_times" class="form-label d-flex align-items-start">Valid for</label>
                                <input type="text" id="valid_times" placeholder="1 " name="valid_times" value={data.valid_times} onChange={onChange} />
                            </div>
                            <div>
                                <label for="valid_days" class="form-label d-flex align-items-start">Validity</label>
                                <input type="text" id="valid_days" placeholder="e.g.30 days" name="valid_days" value={data.valid_days} onChange={onChange} />
                            </div>
                        </FormDesign>
                    </Modal.Body>
                    <Modal.Footer>
                        <StyledButton className="button" type="submit" value="Generate" />
                    </Modal.Footer>
                </form>
            </ThemeProvider>
        </Modal>
    );
}

export default AddCoupon;