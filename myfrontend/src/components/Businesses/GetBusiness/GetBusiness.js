import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { LeftCard, RightCard } from './GetBusiness.styled';
import { MdOutlineMedicalServices, MdDeleteOutline } from "react-icons/md";
import { BiUser, BiUserCheck, BiUserX } from "react-icons/bi";
import { BsBox } from "react-icons/bs";
import { getbusiness, activebusiness, deactivebusiness } from '../../../services/business_service';
import { ToastContainer, toast } from 'react-toastify';

async function activeUser(id) {
  const response = await activebusiness(id);
  if (response.status === "OK") {
    toast.success("User successfully deactivated.");
    window.location.reload();
  } else {
    toast.error(response.data.error);
  }
}

async function deactiveUser(id) {
  const response = await deactivebusiness(id);
  if (response.status === "OK") {
    toast.success("User successfully deactivated.");
    window.location.reload();
  } else {
    toast.error(response.data.error);
  }
}

const GetBusiness = () => {
  const [business, setBusiness] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;
    getbusiness(location.state.business_id)
      .then(items => {
        if (mounted) {
          setBusiness(items.data);
          console.log(business)
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <div className='page bg-light p-5 d-flex h-auto'>
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
      {/* Left layout */}
      <LeftCard>

        <div class="card bg-white shadow">
          <ul class="list-group list-group-flush d-flex align-items-start ">
            <li className="list-group-item"><a href="#" class="text-decoration-none"><MdOutlineMedicalServices size={25} />Import services</a></li>
            <li className="list-group-item"><a href="#" class="text-decoration-none"><BiUser size={25} />Import customers</a></li>
            <li className="list-group-item"><a href="#" class="text-decoration-none"><BsBox size={25} />Import inventory</a></li>
            <li className="list-group-item"><a href="#" class="text-decoration-none text-danger"><MdDeleteOutline size={25} />Delete account</a></li>
          </ul>
        </div>

        <div className="card bg-white shadow mt-5">
          <ul class="list-group list-group-flush d-flex align-items-start">
            <li className="list-group-item"><a href="#" class="text-decoration-none"><BiUserCheck size={25} />Mark as Paid</a></li>
            {business.map((business, key) => (
              business.is_active
                ? <li className="list-group-item"><a onClick={(e) => activeUser(business.business_id)} class="text-decoration-none"><BiUserCheck size={25} />Activate account</a></li>
                : <li className="list-group-item"><a onClick={(e) => deactiveUser(business.business_id)} class="text-decoration-none text-danger"><BiUserX size={25} />Deactivate account</a></li>
            ))}
          </ul>
        </div>

      </LeftCard>

      {/* Right layout */}
      <RightCard>
        <div class="card d-flex bg-white shadow">
          <div className="card-body my-auto p-3">
            {business.map((business, key) => (
              <ul className='list-group list-group-flush'>
                <li className="list-group-item">Account Data</li>
                <li className="list-group-item">
                  <div class="row">
                    <div className='col lg-12 feild'>Email</div>
                    <div className='col lg-12 value'>{business.email}</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div class="row justify-content-between">
                    <div className='col lg-12 feild'>Bussiness Name</div>
                    <div className='col lg-12 value'>{business.business_name}</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div class="row justify-content-between">
                    <div className='col lg-12 feild'>Contact Name</div>
                    <div className='col lg-12 value'>{business.contact_name}</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div class="row justify-content-between">
                    <div className='col lg-12 feild'>Contact Number</div>
                    <div className='col lg-12 value'>{business.contact_number}</div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div class="row justify-content-between">
                    <div className='col lg-12 feild'>Address</div>
                    <div className='col lg-12 value'>{business.full_address}</div>
                  </div>
                </li>

                <li className="list-group-item" >
                  <div class="row justify-content-between">
                    <div className='col lg-12 feild'>city</div>
                    <div className='col lg-12 value'>{business.city}</div>
                  </div>
                </li>
              </ul>
            ))}

            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Analytics</li>

              <li className="list-group-item" >
                <div class="row">
                  <div className='col lg-12 feild'>Total invoices generated</div>
                  <div className='col lg-12 value'>0000</div>
                </div>
              </li>

              <li className="list-group-item" >
                <div class="row">
                  <div className='col lg-12 feild'>Total customers added</div>
                  <div className='col lg-12 value'>0000</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </RightCard>

    </div>
  )
}

GetBusiness.propTypes = {

};

export default GetBusiness;