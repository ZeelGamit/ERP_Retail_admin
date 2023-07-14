import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { useOnClickOutSide } from '../../hooks';
import { theme } from '../../theme';
import { Burger, Menu, AddCoupon, AddValidity } from '../index';
import { StyledLogo, StyledNav } from './Navbar.styled';
import { bool, func } from 'prop-types';

const Navbar = ({ auth, setAuth }) => {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const node = useRef();

  useOnClickOutSide(node, () => setOpen(false));
  const { pathname } = useLocation();
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <StyledNav>
          <div className="d-flex justify-content-between align-items-center p-3 shadow mb-3 bg-body">
            <div>
              <div>
                {pathname === "/home/dash" && <div><StyledLogo className="m-0">myRetail</StyledLogo></div>}
                {pathname === "/home/businesses/addnew" &&
                  <div className="d-flex align-items-center">
                    <Link to="/home/businesses/getallbusinesses"><button className="btn"><FiX size={25} /></button></Link>
                    <StyledLogo className="mt-2 mx-2">Add new user</StyledLogo>
                  </div>
                }
                {pathname === "/home/acmanagers/addnew" &&
                  <div className="d-flex align-items-center">
                    <Link to="/home/dash"><button className="btn"><FiX size={25} /></button></Link>
                    <StyledLogo className="mt-2 mx-2">Add new account manager</StyledLogo>
                  </div>
                }
                {pathname === "/home/businesses/getallbusinesses" &&
                  <div className="d-flex align-items-center">
                    <Link to="/home/dash"><button className="btn"><FiX size={20} /></button></Link>
                    <StyledLogo className="mt-2 mx-2">Users</StyledLogo>
                  </div>
                }
                {pathname === "/home/acmanagers/getallacmanagers" &&
                  <div className="d-flex align-items-center">
                    <Link to="/home/dash"><button className="btn"><FiX size={20} /></button></Link>
                    <StyledLogo className="mt-2 mx-2">Account Managers</StyledLogo>
                  </div>
                }
                {pathname === "/home/coupons/getallcoupons" &&
                  <div className="d-flex align-items-center">
                    <Link to="/home/dash"><button className="btn" aria-label='close'><FiX size={20} /></button></Link>
                    <StyledLogo className="mt-2 mx-2">Coupons</StyledLogo>
                  </div>
                }
                {pathname === "/home/businesses/getbusiness" &&
                  <div className="d-flex align-items-center">
                    <Link to="/home/businesses/getallbusinesses"><button className="btn" aria-label='close'><FiX size={20} /></button></Link>
                    <StyledLogo className="mt-2 mx-2">{location.state.business_name}</StyledLogo>
                  </div>
                }
                {pathname === "/home/revenue" &&
                  <div className="d-flex align-items-center">
                    <Link to="/home/dash"><button className="btn" aria-label='close'><FiX size={20} /></button></Link>
                    <StyledLogo className="mt-2 mx-2">Revenue</StyledLogo>
                  </div>
                }
              </div>
            </div>

            {localStorage.getItem('role') === "1" && pathname === "/home/dash" &&
              <div className="d-flex" style={{ alignItems: 'center' }}>
                <div className="d-flex align-items-center">
                  <Link to="/home/businesses/addnew"><button className="btn btn-primary me-4">Add new user</button></Link>
                </div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} auth={auth} setAuth={setAuth} />
              </div>
            }
            {localStorage.getItem('role') === "2" && pathname === "/home/dash" &&
              <div className="d-flex" style={{ alignItems: 'center' }}>
                <div className="d-flex align-items-center">
                  <Link to="/home/businesses/addnew"><button className="btn btn-primary me-4">Add new user</button></Link>
                </div>
              </div>
            }
            {pathname === "/home/businesses/getallbusinesses" &&
              <div className="d-flex align-items-center">
                <Link to="/home/businesses/addnew"><button className="btn btn-primary me-4">Add new user</button></Link>
              </div>
            }
            {pathname === "/home/acmanagers/getallacmanagers" &&
              <div className="d-flex align-items-center">
                <Link to="/home/acmanagers/addnew"><button className="btn btn-primary me-4">Add new</button></Link>
              </div>
            }
            {pathname === "/home/coupons/getallcoupons" &&
              <div className="d-flex align-items-center">
                <button className="btn btn-primary me-4" onClick={() => setModalShow(true)}>
                  Generate new
                </button>
                <AddCoupon
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            }
            {pathname === "/home/businesses/addnew" &&
              <div className="d-flex align-items-center">
                <button className="btn btn-primary me-4" disabled>Add new user</button>
              </div>
            }
            {pathname === "/home/acmanagers/addnew" &&
              <div className="d-flex align-items-center">
                <button className="btn btn-primary me-4" disabled>Add new</button>
              </div>
            }
            {pathname === "/home/businesses/getbusiness" &&
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-primary me-4">Edit</button>
                <button className="btn btn-outline-primary me-4">Features</button>
                <button className="btn btn-outline-primary me-4" onClick={() => setModalShow(true)}>Add validity</button>
                <AddValidity 
                show={modalShow}
                onHide={() => setModalShow(false)} />
              </div>
            }
          </div>
        </StyledNav>
      </div>
    </ThemeProvider>
  );
};

const NavbarPropTypes = {
  auth: bool.isRequired,
  setAuth : func.isRequired
};

Navbar.propTypes = NavbarPropTypes;

export default Navbar;
