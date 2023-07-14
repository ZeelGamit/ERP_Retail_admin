import React from 'react'
import person from './person.svg'
import box from './box.svg'
import removeacc from './remove.svg'
import bagadd from './bag-plus.svg'
import personcheck from './person-check.svg'
import deactive from './person-x.svg'
import "../Userinfo/Userinfo.scss"
import {useParams} from "react-router-dom"

const Userinfo = () => {
  let params = useParams();
  console.log(params.id);  

  return (
    <div className='page bg-light p-5 d-flex h-auto'>


      {/* Left layout */}
      <div className="leftCard">
        
        <div class="card bg-white shadow">
          <div class="card-body">
            <ul class="list-group d-flex align-items-start ">
              <li><a href="#" class="text-decoration-none"><img class="icon1" src={bagadd} />Import services</a></li>
              <li><a href="#" class="text-decoration-none"><img class="icon1" src={person} />Import customers</a></li>
              <li><a href="#" class="text-decoration-none"><img class="icon1" src={box} />Import inventory</a></li>
              <li><a href="#" class="text-decoration-none text-danger"><img class="icon1" src={removeacc} />Delete account</a></li>
            </ul>
          </div>
        </div>

        <div className="card bg-white shadow mt-5">
          <div class="card-body">
            <ul class="list-group d-flex align-items-start">
              <li><a href="#" class="text-decoration-none"><img class="icon1" src={personcheck} />Mark as Paid</a></li>
              <li><a href="#" class="text-decoration-none text-danger"><img class="icon1" src={deactive} />Deactivate account</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right layout */}
      <div className = "rightCard">
        <div class="card d-flex bg-white shadow">
          <div className="card-body mx-auto my-auto p-3 d-flex userInfoCard">
            <ul >
              <li className= "heading">Account Data</li>
              <li>
                <div class="row">
                  <div className='col lg-12 feild'>Email</div>
                  <div className='col lg-12 value'>Email</div>
                </div>
              </li>

              <li>
                <div class="row justify-content-between">
                  <div className='col lg-12 feild'>Bussiness Name</div>
                  <div className='col lg-12 value'>Bussiness Name</div>
                </div>
              </li>

              <li>
                <div class="row justify-content-between">
                  <div className='col lg-12 feild'>Contact Name</div>
                  <div className='col lg-12 value'>Contact Name</div>
                </div>
              </li>

              <li>
                <div class="row justify-content-between">
                  <div className='col lg-12 feild'>Contact Number</div>
                  <div className='col lg-12 value'>Contact Number</div>
                </div>
              </li>

              <li>
                <div class="row justify-content-between">
                  <div className='col lg-12 feild'>Address</div>
                  <div className='col lg-12 value'>Address</div>
                </div>
              </li>

              <li >
                <div class="row justify-content-between">
                  <div className='col lg-12 feild'>city</div>
                  <div className='col lg-12 value'>city</div>
                </div>
              </li>

              <li>
                <div class="row justify-content-between">
                  <div className='col lg-12 feild'>State</div>
                  <div className='col lg-12 value'>State</div>
                </div>
              </li>

              <li >
                <div class="row">
                  <div className='col lg-12 feild'>Zip</div>
                  <div className='col lg-12 value'>Zip</div>
                </div>
              </li>

              {/* Analytics */}
              <li className='mt-5 heading' >Analytics</li>
              <li >
                <div class="row">
                  <div className='col lg-12 feild'>Total appointments booked</div>
                  <div className='col lg-12 value'>0000</div>
                </div>
              </li>

              <li >
                <div class="row">
                  <div className='col lg-12 feild'>Total invoices generated</div>
                  <div className='col lg-12 value'>0000</div>
                </div>
              </li>

              <li >
                <div class="row">
                  <div className='col lg-12 feild'>Total customers added</div>
                  <div className='col lg-12 value'>0000</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>


    /* <div class="card text w-25 h-100  mx-5 my-5 validitycard1">
          <nav class="navbar navbar-light shadow p-3 mb-5 bg-body rounded ">
            <div class="container-fluid justify-content-between">
              <div>
                <button type="button" class="btn-close" aria-label="Close"></button>
                <a class="navbar-brand fw-bold mx-3" href="#">Add Validity</a>
              </div>
            </div>
          </nav>
          <div>
            <div class='curval'>Current Validity-10 days</div>
            <label for="exampleFormControlInput1" class="form-label mx-4 cp1">Account Validity</label>
            <input type="email" class="form-control mx-4 pholder" id="exampleFormControlInput1" placeholder="Enter value"></input>
          </div>
          <br />
          <button type="button" class="btn btn-primary changes">Save changes</button>
        </div> */

    /* <div class="card text w-25 h-100  mx-5 my-5 couponcard">
          <nav class="navbar navbar-light shadow p-3 mb-5 bg-body rounded ">
            <div class="container-fluid justify-content-between">
              <div>
                <button type="button" class="btn-close" aria-label="Close"></button>
                <a class="navbar-brand fw-bold mx-3" href="#">Account Upgrade</a>
              </div>
            </div>
          </nav>
          <div>
            <div class='curval'>Current Validity-10 days</div>
            <label for="exampleFormControlInput1" class="form-label mx-2 cp1">Account Validity</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter value"></input>
          </div>
          <div>
            <label for="exampleFormControlInput1" class="form-label mx-2 cp1">Amount Paid</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter value"></input>
          </div>
          <div>
            <label for="exampleFormControlInput1" class="form-label mx-2 cp1">Account manager</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter value "></input>
          </div>
          <button type="button" class="btn btn-primary gen gap-5 genbtn">Mark as Paid</button>
        </div> 
      </div >*/
  )
}

export default Userinfo