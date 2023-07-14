import React from 'react';
import PropTypes from 'prop-types';
import styles from './addAccountManager.scss';

const addAccountManager = props => (
	<div class="addManager bg-light">
		<div class="card d-flex d-table-cell align-items-start">
			<div className="card-body mx-auto my-auto  ">
				<ul class="list-group list-group-flush ">
					<li class="list-group-item">Basic Info</li>
					<li class="list-group-item">
						<form class="row">
							<div class="col-md-12">
								<label for="inputBussinessName" class="form-label">Full Name</label>
								<input type="text" class="form-control" id="inputBussinessName" placeholder="e.g. Virat Sharma" />
							</div>

							<div class="col-md-12">
								<label for="inputEmail" class="form-label">Email</label>
								<input type="email" class="form-control" id="inputEmail" placeholder="e.g. user@gmail.com" />
							</div>

							<div class="col-md-12">
								<label for="inputContactNumber" class="form-label">Contact Number</label>
								<input type="tel" class="form-control" id="inputContactNumber" placeholder="e.g. +91 12345 67890" />
							</div>

							<div class="col-md-12">
								<label for="inputPassword" class="form-label">Password</label>
								<input type="text" class="form-control" id="inputPassword" placeholder="Password" />
							</div>
						</form>
					</li>
				</ul>
			</div>
		</div>
	</div>
);


const addAccountManagerPropTypes = {
	// always use prop types!
};

addAccountManager.propTypes = addAccountManagerPropTypes;

export default addAccountManager;
