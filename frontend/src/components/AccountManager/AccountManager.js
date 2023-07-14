import React from 'react'
import './AccountManager.scss'


const AccountManager = props => (
	<div className="card Accountmanager p-5">
		<div className="card-body mx-auto accData">
			<div className="d-flex justify-content-between">
				<div className="headerLeft">
					<label className="totalaccm">Total number of account managers - 5</label>
				</div>
			</div>

			<table className="table mt-5 dataTab">
				<thead className="tHead">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Full name</th>
						<th scope="col">Mobile number</th>
						<th scope="col">Accounts</th>
                        <th scope="col">email id</th>
						<th scope="col">Password</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>0000000000</td>
						<td>000 Bussiness</td>
                        <td>admin@gmail.com</td>
						<td>*******</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Mark</td>
						<td>0000000000</td>
						<td>000 Bussiness</td>
                        <td>admin@gmail.com</td>
						<td>*******</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Mark</td>
						<td>0000000000</td>
						<td>000 Bussiness</td>
                        <td>admin@gmail.com</td>
						<td>*******</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
);

const AccountManagerPropTypes = {
	// always use prop types!
};

AccountManager.propTypes = AccountManagerPropTypes;

export default AccountManager;
