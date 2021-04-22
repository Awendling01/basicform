import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [firstName, setFirstName] = useState("");

	const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setFirstName(value);
	};

	const [lastName, setLastName] = useState("");

	const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setFirstName(value);
	};
	const [birthdateInput, setBirthdateInput] = useState("");

	const onBirthdateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setBirthdateInput(value);
	};

	const [sSNumber, setSSNumber] = useState("");

	const onSSNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setSSNumber(value);
	};

	const [idNumber, setIdNumber] = useState("");

	const onIdNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setIdNumber(value);
	};

	const [idIssueDate, setIdIssueDate] = useState("");

	const onIdIssueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setIdIssueDate(value);
	};

	const [idExpirationDate, setIdExpirationDate] = useState("");

	const onIdExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setIdExpirationDate(value);
	};

	const [idState, setIdState] = useState("");

	const onIdStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setIdState(value);
	};

	const [membQual, setMembQual] = useState("");

	const onMembQualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setMembQual(value);
	};

	const [occupation, setOccupation] = useState("");

	const onOccupationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setOccupation(value);
	};

	const [IdType, setIdType] = useState("");

	const onIdTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setIdType(value);
	};

	const onSubmit = (e: React.SyntheticEvent) => {
		const formData = {
			firstName,
			lastName,
			sSNumber,
			birthdateInput,
			idIssueDate,
			idExpirationDate,
			idState,
			membQual,
			occupation,
			IdType,
		};

		console.log(formData);

		// {
		// 	firstName: "sdkfjd", lastName;
		// }
	};

	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: 500,
			}}
		>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					style={{ display: "flex", flexDirection: "column", paddingRight: 25 }}
				>
					<label>First Name*</label>
					<input type="text" onChange={onFirstNameChange} value={firstName} />
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<label>Last Name*</label>
					<input type="text" onChange={onLastNameChange} value={lastName} />
				</div>
			</div>

			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					style={{ display: "flex", flexDirection: "column", paddingRight: 25 }}
				>
					<label>Birthdate*</label>
					<input type="text" />
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label>Social Security Number*</label>
					<input type="text" />
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					style={{ display: "flex", flexDirection: "column", paddingRight: 25 }}
				>
					<label>ID Type*</label>
					<input type="text" />
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label>ID Number</label>
					<input type="text" />
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					style={{ display: "flex", flexDirection: "column", paddingRight: 25 }}
				>
					<label>ID Issue date</label>
					<input type="text" />
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label>ID Expiration date</label>
					<input type="text" />
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					style={{ display: "flex", flexDirection: "column", paddingRight: 25 }}
				>
					<label>ID State</label>
					<input type="text" />
				</div>
				<div
					style={{ display: "flex", flexDirection: "column", paddingRight: 25 }}
				>
					<label>Membership Qualification*</label>
					<input type="text" />
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label>Occupation*</label>
					<input type="text" />
				</div>
			</div>

			<div style={{ marginTop: 300 }}>
				<button type="submit">Submit</button>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<button type="submit">Cancel</button>
			</div>
		</form>
	);
};

export default App;
