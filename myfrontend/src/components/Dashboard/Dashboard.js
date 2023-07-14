import React, { useEffect, useState } from 'react';
import { Body, Heading, Pagebody } from './Dashboard.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { getacmanager } from '../../services/acmanager_service';
import {getallaccountmanagers} from '../../services/acmanager_service'
import {getallbusinesses, revenue} from '../../services/business_service';
import { getallcoupons } from '../../services/coupon_service';
import { BiCoinStack, BiUser } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineTag } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { bool, func } from 'prop-types';
import CountUp from 'react-countup';

const Dashboard = ({ auth, setAuth }) => {
  let total = 0;
  const [admin, setAdmin] = useState(localStorage.getItem('admin'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [admindata, setAdmindata] = useState([]);
  const [CountManager,setCountManager] = useState([]);
  const [CountUser,setCountUser] = useState([]);
  const [CountCoupon,setCountCoupon] = useState([]);
  const [CountRev, setCountRev] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    let mounted = true;
    getacmanager(admin)
      .then(items => {
        if (mounted) {
          setAdmindata(items.data);
        }
      })
    return () => mounted = false;
  }, []);

  useEffect(() => {
    handleLoadEvent();
  },[])

  const handleLoadEvent = () => {
        getallaccountmanagers().then(info => { setCountManager(info.data)});
        getallbusinesses(localStorage.getItem('admin'), localStorage.getItem('role')).then(info => { setCountUser(info.data)});
        getallcoupons(localStorage.getItem('admin'), localStorage.getItem('role')).then(info => { setCountCoupon(info.data)});
        revenue(localStorage.getItem('admin'), localStorage.getItem('role')).then(info => { setCountRev(info.data)});
  }

  const Logout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    setAuth(false);
    navigate("/auth");
  }

  return (
    <>
      {role === "1"
        ? <div className='bg-light'>

          {/* Admin dashboard */}
      <div className='d-grid' style={{ padding: "8rem" }}>
			<div className='d-flex mx-auto my-auto' style={{paddingRight : "6rem"}}>
			<div class="card text-dark bg-light" style={{ width: "25rem", textAlign : "center" }}>
      <Link to="/home/businesses/getallbusinesses">
        <div class="card-header bg-primary" style={{ color: "#fff" , width: "25rem" , fontSize : "2rem"}}>Users</div>
        </Link>
					<div class="card-body" style={{background: "#fff", width: "25rem"}}>
						<h5 class="card-title">Number of users</h5>
						<h1 class="card-text"><CountUp end={CountUser.length} /></h1>
					</div>
				</div>

				<div class="card text-dark bg-light " style={{ width: "25rem" , marginLeft : "9rem", textAlign : "center" }}>
        <Link to="/home/coupons/getallcoupons">
          <div class="card-header bg-primary" style={{ color: "#fff" , width: "25rem" , fontSize : "2rem"}}>Coupons</div>
					</Link>
          <div class="card-body" style={{background: "#fff", width: "25rem"}}>
						<h5 class="card-title">Total generated coupons</h5>
						<h1 class="card-text"><CountUp end={CountCoupon.length} /></h1>
					</div>
				</div>
			</div>

			<div className='d-flex mx-auto my-auto' style={{paddingRight : "6rem"}}>
			<div class="card text-dark bg-light " style={{ width: "25rem" , marginTop: "8rem", textAlign : "center" }}>
      <Link to="/home/acmanagers/getallacmanagers">
        <div class="card-header bg-primary" style={{ color: "#fff" , width: "25rem", fontSize : "2rem"}}>Account Managers</div>
				</Link>
        	<div class="card-body" style={{background: "#fff", width: "25rem"}}>
						<h5 class="card-title">Activate account Managers</h5>
						<h1 class="card-text"><CountUp end={CountManager.length} /></h1>
					</div>
				</div>

				<div class="card text-dark bg-light " style={{ width: "25rem" , marginTop: "8rem" , marginLeft : "9rem", textAlign : "center" }}>
					<div class="card-header bg-primary" style={{ color: "#fff" , width: "25rem", fontSize : "2rem"}}>Revenue</div>
					<div class="card-body" style={{background: "#fff", width: "25rem"}}>
						<h5 class="card-title">Revenue till today</h5>
            {CountRev.forEach((data) => (
									total = Number(total) + Number(data.amount / 100)
						))}
						<h1 class="card-text"><CountUp end={total} /></h1>
					</div>
				</div>
			</div>
		</div>

        </div>
        :<>
          <ThemeProvider theme={theme}>
            <div>
              <Pagebody>
                <div>
                  {admindata.map((admindata) => (
                    <Heading>Hello, {admindata.name}</Heading>
                  ))}
                </div>

                <Link to="/home/businesses/getallbusinesses">
                  <Body>
                    <BiUser size={35} id='first' />
                    User
                    <IoIosArrowForward size={35} id='last' />
                  </Body>
                </Link>

                <Link to="/home/revenue">
                  <Body>
                    <BiCoinStack size={35} id='first' />
                    Revenue
                    <IoIosArrowForward size={35} id='last' />
                  </Body>
                </Link>

                <Link to="/home/coupons/getallcoupons">
                  <Body>
                    <AiOutlineTag size={35} id='first' />
                    Coupon codes
                    <IoIosArrowForward size={35} id='last' />
                  </Body>
                </Link>


                <div>
                  <Link to='/auth' onClick={Logout}>
                    <FiLogOut size={45} id='first' />
                    Logout
                  </Link>
                </div>

              </Pagebody>
            </div>
          </ThemeProvider>
        </>}
    </>
  );
}

Dashboard.propTypes = {
  auth: bool.isRequired,
  setAuth : func.isRequired
};

export default Dashboard;