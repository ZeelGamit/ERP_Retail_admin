import React, { useEffect, useState } from 'react';
import { DataTable, StyledUsers, UserData } from './Revenue.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { ToastContainer, toast } from 'react-toastify';
import { revenue } from '../../../services/business_service';
import dateFormat from 'dateformat';

const Revenue = () => {
	let total = 0;
	const [data, setData] = useState([]);

	useEffect(() => {
		let mounted = true;
		revenue(localStorage.getItem('admin'), localStorage.getItem('role'))
			.then(items => {
				if (mounted) {
					if (items.status === "OK") {
						setData(items.data);
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
								{data.forEach((data) => (
									total = Number(total) + Number(data.amount / 100)
								))}
								<label>Total Revenue - {total}
								</label>
							</div>
						</div>

						<DataTable className="table mt-3">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Date</th>
									<th scope="col">Business</th>
									<th scope="col">Account manager</th>
									<th scope="col">Validity</th>
									<th scope="col">Amount</th>
								</tr>
							</thead>
							<tbody>
								{data.map((data, key) => (
									<tr key={key}>
										<th>{key + 1}</th>
										<td>{dateFormat(new Date(data.date), "d mmm yyyy")}</td>
										<td>{data.business_name}</td>
										<td>{data.name}</td>
										<td>{data.validity}</td>
										<td>{data.amount / 100}</td>
									</tr>
								))}
							</tbody>
						</DataTable>
					</UserData>
				</StyledUsers>
			</ThemeProvider>
		</div>
	);
}

Revenue.propTypes = {

};

export default Revenue;