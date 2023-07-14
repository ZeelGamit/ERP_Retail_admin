import React, { useEffect, useState } from 'react';
import { DataTable, StyledUsers, UserData } from './GetAllAcManagers.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { deactivemanager, getallaccountmanagers } from '../../../services/acmanager_service';
import { ToastContainer, toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from "react-router-dom";
import { EditManager } from '../../index';

async function deactiveManager(id) {
	const response = await deactivemanager(id);
	if (response.status === "OK") {
		toast.success("Ac manager successfully deactivated.");
		window.location.reload();
	} else {
		toast.error(response.data.error);
	}
}

const GetAllAcManagers = () => {
	const [acmanager, setAcmanager] = useState([]);
	const [modalShow, setModalShow] = useState(false);
	const [managerdata, setManagerdata] = useState({});

	useEffect(() => {
		let mounted = true;
		getallaccountmanagers()
			.then(items => {
				if (mounted) {
					if (items.status === "OK") {
						setAcmanager(items.data)
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
								<label>Total number of accounts created - {acmanager.length}</label>
							</div>
						</div>

						<DataTable className="table mt-3">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Name</th>
									<th scope="col">Mobile number</th>
									<th scope="col">Email</th>
									<th scope="col">Business</th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{acmanager.map((acmanager, key) => (
									<tr key={key}>
										<th>{key + 1}</th>
										<td>{acmanager.name}</td>
										<td>{acmanager.contact_number}</td>
										<td>{acmanager.email}</td>
										<td>Business</td>
										<td><Link onClick={() => {
											setModalShow(true);
											setManagerdata({id: acmanager.id, name: acmanager.name, mobileno: acmanager.contact_number, email: acmanager.email, password: acmanager.password, isactive: acmanager.is_active});
										}}><FiEdit /></Link></td>
										<td onClick={e => deactiveManager(acmanager.id)}>{acmanager.is_active ? "" : <MdDeleteOutline color='red' size={17} />}</td>
									</tr>
								))}
								<EditManager
									show={modalShow}
									onHide={() => setModalShow(false)}
									setManagerdata={setManagerdata}
									managerdata={managerdata}
								/>
							</tbody>
						</DataTable>
					</UserData>
				</StyledUsers>
			</ThemeProvider>
		</div>
	);
}

GetAllAcManagers.propTypes = {

};

export default GetAllAcManagers;