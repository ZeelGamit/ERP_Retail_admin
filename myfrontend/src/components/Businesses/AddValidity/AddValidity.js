import Modal from 'react-bootstrap/Modal';
import { FormDesign, Heading, StyledButton } from './AddValidity.styled';
import { theme } from '../../../theme';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addpayment, getallpackages } from '../../../services/business_service';
import { useLocation } from 'react-router-dom';

const AddValidity = (props) => {
    const location = useLocation();

    const [plan, setPlan] = useState([]);
    const [data, setData] = useState({ plan: "", amount: 0, discount_value: "", valid_days: 0 });
    const [validity, setValidity] = useState({ payment_id: "", user_id: location.state.business_id, admin_id: localStorage.getItem('admin'), amount: 0, discount: 0, discount_value: 0, discount_type: 0, coupon_id: 0, validity: data.valid_days, package_id: 0 });

    useEffect(() => {
        
        setData({ plan: "", amount: 0, discount_value: "", valid_days: 0 })
        let mounted = true;
        getallpackages()
            .then(items => {
                if (mounted) {
                    if (items.status === "OK") {
                        setPlan(items.data)
                    } else {
                        toast.error(items.data.error);
                    }
                }
            })
        return () => mounted = false;
    }, []);

    const onChange = (e) => {
        if (e.target.name === "plan") {
            plan.map((plan, key) => (
                e.target.value == plan.id &&
                setData({ plan: plan.id, amount: plan.amount, valid_days: plan.days })
            ));
            e.target.value == 0 &&
            setData({ plan: "", amount: 0, discount_value: "", valid_days: 0 })
        }
    }

    const applyCoupon = () => {

    }

    const displayRazor = async (e) => {

        const res = await loadRazorPay('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Please check your connection!');
            return
        }

        if (!data.plan) {
            toast.error("Please select plan!");
        } else {
            let amount = 100 * parseInt(data.amount);
            const options = {
                "key": __DEV__ ? "rzp_test_LvN42NBYlsy7Ig" : "ProductionKey",
                "currency": "INR",
                "amount": amount,
                "name": "myRetail",
                "description": "Thank you for order",
                "handler": async (response) => {
                    await setValidity({ payment_id: response.razorpay_payment_id, user_id: location.state.business_id, admin_id: localStorage.getItem('admin'), amount: amount, discount: 0, discount_value: 0, discount_type: 0, coupon_id: 0, validity: data.valid_days, package_id: data.plan });
                    console.log(validity)
                    const result = await addpayment({ payment_id: response.razorpay_payment_id, user_id: location.state.business_id, admin_id: localStorage.getItem('admin'), amount: amount, discount: 0, discount_value: 0, discount_type: 0, coupon_id: 0, validity: data.valid_days, package_id: data.plan });
                    if (result.status === "OK") {
                        toast.success("Payment sucessfully done.");
                    } else {
                        toast.error(result.data.error, {
                            onClose: () => {
                                setValidity({ payment_id: "", user_id: location.state.business_id, admin_id: localStorage.getItem('admin'), amount: 0, discount: 0, discount_value: 0, discount_type: 0, coupon_id: 0, validity: data.validity, package_id: data.plan });
                            }
                        });
                    }
                },
                "prefill": {
                    "name": location.state.business_name,
                    "email": location.state.email,
                    "contact": "91" + location.state.number,
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#3542fc"
                    }
                }
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open()
            e.preventDefault();
        }
    }

    const loadRazorPay = (src) => {
        return new Promise((resolve) => {

            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            document.body.appendChild(script);
            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }
        })
    }

    const __DEV__ = document.domain === 'localhost'

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
                        <Heading>Account Upgrade</Heading>
                    </Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <FormDesign>
                            <div>
                                <label for="coupon_code" class="form-label d-flex align-items-start">Select Plan name</label>
                                <select name="plan" onChange={onChange} value={plan.package_name}>
                                    <option value="0" selected>Select plan</option>
                                    {plan.map((plan, key) => (
                                        <option value={plan.id}>{plan.package_name}</option>
                                    ))}
                                </select>
                                <input type="hidden" name='admin_id' value={props.admin_id} />
                            </div>
                            <div>
                                <label for="discount_value" class="form-label d-flex align-items-start">Amount</label>
                                <input type="text" id="discount_value" placeholder="Enter value" name="discount_value" value={data.amount} onChange={onChange} />
                            </div>
                            <div>
                                <label for="valid_days" class="form-label d-flex align-items-start">Validity</label>
                                <input type="text" id="valid_days" placeholder="e.g.30 days" name="valid_days" value={data.valid_days} onChange={onChange} />
                            </div>
                            <div>
                                {/* <label for="valid_days" class="form-label d-flex align-items-start" onClick={applyCoupon}>Apply coupon</label>
                                <input type="text" id="valid_days" placeholder="Enter coupon code" name="copon_code" value={data.valid_days} onChange={onChange} style={{ visibility: 'hidden' }} /> */}
                            </div>
                        </FormDesign>
                    </Modal.Body>
                    <Modal.Footer>
                        <StyledButton className="button" type="button" value="Upgrade" onClick={displayRazor} />
                    </Modal.Footer>
                </form>
            </ThemeProvider>
        </Modal>
    );
}

export default AddValidity;