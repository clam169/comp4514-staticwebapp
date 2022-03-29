import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [toons, setToons] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				let toons = await axios.get("http://localhost:7071/api/toons");
				setToons(toons.data);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);
	return (
		<div className="App">
			Showing toons
			<table>
				<thead>
					<tr>
						<th> ID </th>
						<th> Name </th>
						<th> Occupation </th>
					</tr>
				</thead>
				<tbody>
					{toons
						? toons.map((toon, index) => (
								<tr key={index}>
									<td> {toon.id} </td>
									<td>
										{toon.firstName} {toon.lastName}
									</td>
									<td> {toon.occupation} </td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		</div>
	);
}

export default App;
