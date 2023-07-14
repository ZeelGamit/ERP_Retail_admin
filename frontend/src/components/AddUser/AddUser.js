import React from 'react';
import PropTypes from 'prop-types';
import './AddUser.scss';

const AddUser = props => (
	<div className="window bg-light">
		<div class="card d-flex d-table-cell addUser">
			<ul class="list-group list-group-flush">
				<li class="list-group-item card-heading addUserHeading">Add Bussiness</li>
				<li class="list-group-item card-body addUserBody">
					<form class="row  addBussinessForm">
						<div class="col-md-12">
							<label for="inputEmail" class="form-label">Email</label>
							<input type="email" class="form-control" id="inputEmail" placeholder = "e.g. user@gmail.com" />
						</div>

						<div class="col-md-12">
							<label for="inputBussinessName" class="form-label">Bussiness Name</label>
							<input type="text" class="form-control" id="inputBussinessName" placeholder="e.g. abc store" />
						</div>

						<div class="col-md-12">
							<label for="inputContactName" class="form-label">Contact Name</label>
							<input type="text" class="form-control" id="inputContactName" placeholder="e.g. user"/>
						</div>

						<div class="col-md-12">
							<label for="inputContactNumber" class="form-label">Contact Number</label>
							<input type="number" max="10" min="6" class="form-control" id="inputContactNumber" placeholder="e.g. +91 12345 67890"/>
						</div>

						<div class="col-md-12">
							<label for="inputPassword" class="form-label">Password</label>
							<input type="password" class="form-control" id="inputPassword" placeholder="Password" />
						</div>

						<div class="col-12">
							<label for="inputAddress" class="form-label">Address</label>
							<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main Street" />
						</div>

						<div class="col-md-12">
							<label for="inputCity" class="form-label">City</label>
							<input type="text" class="form-control" id="inputCity" placeholder="City"/>
						</div>

						<div class="col-12 ">
							<button type="submit" class="btn btn-primary btn-create">Sign in</button>
						</div>
					</form>	
				</li>
			</ul>
		</div>
	</div>
);

const AddUserPropTypes = {
	// always use prop types!
};

AddUser.propTypes = AddUserPropTypes;

export default AddUser;
