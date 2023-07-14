import React from 'react';
import CountUp from 'react-countup';

const dashboard = () => {
	return (
		<div className='d-grid' style={{ padding: "8rem" }}>
			<div className='d-flex mx-auto my-auto'>
			<div class="card text-dark bg-light mb-3" style={{ width: "30rem"}}>
					<div class="card-header bg-primary" style={{ color: "#fff" , width: "30rem" , fontSize : "2rem" }}>Users</div>
					<div class="card-body" style={{background: "#fff", width: "30rem"}}>
						<h5 class="card-title">Number of users</h5>
						<h1 class="card-text"><CountUp end={100} /></h1>
					</div>
				</div>

				<div class="card text-dark bg-light mb-3" style={{ width: "30rem" , marginLeft : "13rem" }}>
					<div class="card-header bg-primary" style={{ color: "#fff" , width: "30rem" , fontSize : "2rem"}}>Coupons</div>
					<div class="card-body" style={{background: "#fff", width: "30rem"}}>
						<h5 class="card-title">Total generated coupons</h5>
						<h1 class="card-text"><CountUp end={50} /></h1>
					</div>
				</div>
			</div>

			<div className='d-flex mx-auto my-auto'>
			<div class="card text-dark bg-light mb-3" style={{ width: "30rem" , marginTop: "8rem" }}>
					<div class="card-header bg-primary" style={{ color: "#fff" , width: "30rem", fontSize : "2rem"}}>Account Managers</div>
					<div class="card-body" style={{background: "#fff", width: "30rem"}}>
						<h5 class="card-title">Activate account Managers</h5>
						<h1 class="card-text"><CountUp end={20} /></h1>
					</div>
				</div>

				<div class="card text-dark bg-light mb-3" style={{ width: "30rem" , marginTop: "8rem" , marginLeft : "13rem" }}>
					<div class="card-header bg-primary" style={{ color: "#fff" , width: "30rem", fontSize : "2rem"}}>Revenue</div>
					<div class="card-body" style={{background: "#fff", width: "30rem"}}>
						<h5 class="card-title">Revenue till today</h5>
						<h1 class="card-text"><CountUp end={100000} /></h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default dashboard
