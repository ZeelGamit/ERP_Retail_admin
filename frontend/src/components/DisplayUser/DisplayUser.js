import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import './DisplayUser.scss';
import searchImg from '../../Assets/Images/search.svg';
// import ExportSVN from '../ExportSVN/UserSVNExport';
// import Popup from 'react-popup';

const DisplayUser = () => {

	const navigate = useNavigate();

	const showMyData = (data) => {
		navigate("/userInfo", {
			state: {
				id: "123"
			}
		});
		// Popup.alert('I am alert, nice to meet you');
	}

	return(
	<div className="card">
		<div className="card-body usersCard">
			<div className="d-flex justify-content-between">
				<div className="headerLeft">
					<label className="totalUser">Total number of accounts created - 65</label>
				</div>
				<div className="headerRight p-2">
					<img src={searchImg} alt="SearchImg"></img>
					{/* <i className="bi bi-search"></i> */}
					<input type="text" placeholder="Search user" class="SearchUser mx-3">
					</input>
				</div>
			</div>
{/* 
			<div>
				<ExportSVN/>
			</div> */}

			<table className="table table-hover">
				<thead className="tableHead">
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr onClick = {showMyData}>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry the Bird</td>
						<td>Thornton</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
)};

const DisplayUserPropTypes = {
	// always use prop types!
};

DisplayUser.propTypes = DisplayUserPropTypes;

export default DisplayUser;
