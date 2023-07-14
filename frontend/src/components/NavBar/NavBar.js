import React, { useState } from "react";
import styles from "./NavBar.scss";
import { Link,Navigate,useNavigate } from "react-router-dom";
import { navbar } from "../../constant/url";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { IoMdArrowRoundBack} from "react-icons/io"
import { useLocation } from "react-router-dom";
import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/dist/rsuite-rtl.css'

const NavBar = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const createUser = () => {
    navigate('/addUser')
  }

  const createAccountManager = () => {
    navigate('/addAccountManager')
  }

  return (
    <div className="d-flex justify-content-between align-items-center p-4 shadow mb-3 bg-body">

      <div>
        {
          pathname === "/" && <div><h4 className="m-0">MyRetail</h4></div>
        }
        {
          pathname === "/displayUser" &&
          <div className="d-flex align-items-center">
            <button className="btn bg-light">
              <Link to="/" className="home">
                <FiX size={25} />
              </Link>
            </button>
            <h3 className="mt-2 mx-3">Users</h3>
          </div>
        }

        {
          pathname === "/showRevenue" &&
          <div className="d-flex align-items-center">
            <button className="btn bg-light">
              <Link to="/" className="home">
                <FiX size={25} />
              </Link>
            </button>

            <h4 className="mt-2 mx-3">Revenue</h4>
          </div>
        }

        {
          pathname === "/couponCode" &&
          <div className="d-flex align-items-center">
            <button className="btn bg-light">
              <Link to="/" className="home">
                <FiX size={25} />
              </Link>
            </button>

            <h4 className="mt-2 mx-3">Coupon code</h4>
          </div>
        }

        {
          pathname === "/addUser" &&
          <div className="d-flex align-items-center">
            <button className="btn bg-light">
              <Link to="/" className="home">
                <FiX size={25} />
              </Link>
            </button>
            <h4 className="mt-2 mx-3">Add new user</h4>
          </div>
        }

        {
          pathname === "/accountManager" &&
          <div className="d-flex align-items-center">
            <button className="btn bg-light">
              <Link to="/" className="home">
                <FiX size={25} />
              </Link>
            </button>
            <h4 className="mt-2 mx-3">Account manager</h4>
          </div>
        }

        {
          pathname === "/addAccountManager" &&
          <div className="d-flex align-items-center">
            <button className="btn bg-light">
              <Link to="/" className="home">
                <FiX size={25} />
              </Link>
            </button>
            <h4 className="mt-2 mx-3">Add new account manager</h4>
          </div>
        }

        {
          pathname === "/userInfo" &&
          <div className="d-flex align-items-center">
            <button className="btn bg-light">
              <Link to="/displayUser" className="home">
                <IoMdArrowRoundBack size={25} />
              </Link>
            </button>
            <h4 className="mt-2 mx-3">My Bussiness</h4>
          </div>
        }


      </div>

      <div className="d-flex">
        {
          pathname === "/" &&
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-4" onClick = {createUser} >Add new user</button>
          </div>
        }


        {
          pathname === "/displayUser" &&
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-4" onClick={createUser} >Add new user</button>
          </div>
        }


        {
          pathname === "/couponCode" &&
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Generate new</button>

            {/* Modal */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header justify-content-start shadow p-3 bg-body rounded">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><FiX size={20} /></button>
                    <h5 class="modal-title mx-3" id="staticBackdropLabel">Generate coupon code</h5>
                  </div>
                  <div class="modal-body">
                    
                    <div>
                      <div>
                        <label for="exampleFormControlInput1" class="form-label d-flex align-items-start">Coupon code</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="e.g.ABC12"></input>
                      </div>
                      <div>
                        <label for="exampleFormControlInput1" class="form-label d-flex align-items-start">Discount % off</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter value"></input>
                      </div>
                      <div>
                        <label for="exampleFormControlInput1" class="form-label d-flex align-items-start">valid for</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="1 "></input>
                      </div>
                      <div>
                        <label for="exampleFormControlInput1" class="form-label d-flex align-items-start">Validity</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="e.g.30"></input>
                      </div>
                    </div>
                 </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary mx-auto my-auto btnGenerate">Generate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {
          pathname === "/showRevenue" &&
          <div className="d-flex align-items-center" >
            <DateRangePicker />
          </div>
        }

        {
          pathname === "/addUser" && 
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-4" onClick={createUser} >Add new user</button>
          </div>
        }

        {
          pathname === "/accountManager" &&
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-4" onClick={createAccountManager} >Add new</button>
          </div>
        }

        {
          pathname === "/addAccountManager" &&
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-4" onClick={createAccountManager} >Add Account Manager</button>
          </div>
        }

        {
          pathname === "/userInfo" &&
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-4" onClick={createUser} >Add Validity</button>
          </div>
        }


        <button
          className="btn btn-menu mx-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <FiAlignRight size={25} />
        </button>

        {/* do not touch */}
        <div
          className="offcanvas offcanvas-end canvas-card"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav-links">
              {navbar?.map((item, i = 0) => (
                <Link to={item.path} className="home" key={i}>
                  <li className="single-nav-link p-3 align-items-center">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


const NavBarPropTypes = {
  // always use prop types!
};

NavBar.propTypes = NavBarPropTypes;

export default NavBar;