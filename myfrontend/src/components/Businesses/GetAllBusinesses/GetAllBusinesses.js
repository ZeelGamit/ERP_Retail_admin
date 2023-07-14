import React, { useEffect, useState } from 'react';
import { DataTable, HeaderRight, StyledUsers, UserData } from './GetAllBusinesses.styled';
import search from "../../../assets/images/search.svg"
import { ThemeProvider } from 'styled-components';
import dateFormat from 'dateformat';
import { theme } from '../../../theme';
import { getallbusinesses, deactivebusiness } from '../../../services/business_service';
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';

async function deactiveUser(id) {
	const response = await deactivebusiness(id);
	if (response.status === "OK") {
		toast.success("User successfully deactivated.");
		window.location.reload();
	} else {
		toast.error(response.data.error);
	}
}

const GetAllBusinesses = () => {
	const [business, setBusiness] = useState([]);
	const [exportData, setExportData] = useState([])

	useEffect(() => {
		let mounted = true;
		getallbusinesses(localStorage.getItem('admin'), localStorage.getItem('role'))
			.then(items => {
				if (mounted) {
					if (items.status === "OK") {
						setBusiness(items.data)
						setExportData(items.data.map((business) => (
							{
								Date: moment(business.created_date).format("DD MMM YYYY"),
								Business: business.business_name,
								contact_number: business.contact_number,
								Contact_name: business.contact_name,
								address: business.full_address,
								city: business.city,
								package: business.package_name,
								validity: moment(business.created_date).add(business.days, 'days').format("DD MMM YYYY")

							})))
					} else {
						toast.error(items.data.error);
					}
				}
			})
		return () => mounted = false;
	}, []);

	return (
		<div>
			<ThemeProvider theme={theme}>
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
				<StyledUsers className="card p-5">
					<UserData className="card-body mx-auto">
						<div className="d-flex justify-content-between">
							<div className="headerLeft">
								<label>Total number of accounts created - {business.length}</label>
							</div>
							<HeaderRight>
								<img src={search} alt="SearchImg"></img>
								<input type="text" placeholder="Search user here" id="txtSearchUser" />
							</HeaderRight>
						</div>

						<DataTable className="table mt-3">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Date</th>
									<th scope="col">Business</th>
									<th scope="col">Mobile number</th>
									<th scope="col">Contact name</th>
									<th scope="col">Address</th>
									<th scope="col">City</th>
									<th scope="col">Package</th>
									<th scope="col">Validity</th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{business.map((business, key) => (
									<tr key={key}>
										<td>{key + 1}</td>
										<td>{dateFormat(new Date(business.created_date), "d mmm yyyy")}</td>
										<td>{business.business_name}</td>
										<td>{business.contact_number}</td>
										<td>{business.contact_name}</td>
										<td>{business.full_address}</td>
										<td>{business.city}</td>
										<td>{business.package_name}</td>
										<td>{parseInt(((new Date(business.end_date)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)) > 0 ? parseInt(((new Date(business.end_date)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)) : 0} days</td>
										{localStorage.getItem('role') === "1" ? <td><Link to="/home/businesses/getbusiness" state={{ business_id: business.business_id, business_name: business.business_name, email: business.email, number: business.contact_number }}><FiEdit /></Link></td> : <td></td>}
										{localStorage.getItem('role') === "1" ? <td onClick={e => deactiveUser(business.business_id)}>{business.is_active ? "" : <MdDeleteOutline color='red' size={17} />}</td> : <td></td>}
									</tr>
								))}
							</tbody>
						</DataTable>
						<div>
							<CSVLink data={exportData} className={`btn btn-primary ${!!exportData ? "" : "disabled"} `}>Download me</CSVLink>
						</div>
					</UserData>
				</StyledUsers>
			</ThemeProvider>
		</div>
	);
}

GetAllBusinesses.propTypes = {

};

export default GetAllBusinesses;