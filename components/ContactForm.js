import React, {Fragment, useState} from "react";
import axios from "axios";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const {name, phone, email, message} = formData;

	const [showSuccess, setShowSuccess] = useState(false);
	const [errStatus, setErrStatus] = useState(false);
	let AlertResponse = null;

	const onChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		let emailToSend = {
			name: name,
			phone: phone,
			email: email,
			desc: message,
		};

		if (name !== "" && phone !== "" && email !== "" && message !== "") {
			try {
				const result = await axios.post(
					"https://739o33ovd6.execute-api.ap-south-1.amazonaws.com/Production/",
					emailToSend
				);
				console.log(result);
				setShowSuccess(true);
			} catch (err) {
				console.error(err);
				setErrStatus(true);
			}
		}
	};

	if (errStatus) {
		AlertResponse = (
			<div
				class="alert alert-danger"
				role="alert"
				onClose={() => setErrStatus(false)}
				dismissible
			>
				<p>
					Oh snap! Something went wrong. Please drop an email at
					farmland_rhs@yahoo.co.in
				</p>
			</div>
		);
	}

	if (showSuccess) {
		AlertResponse = (
			<div
				class="alert alert-primary"
				role="alert"
				onClose={() => setShowSuccess(false)}
				dismissible
			>
				<p>
					<p>Thanks for writing to us, we will get back to you shortly</p>
				</p>
			</div>
		);
	}

	return (
		<Fragment>
			<div className="col-md-7">
				<div className="gtintchrgt">
					<p>
						Our network currently consists of over 131 dealers across India and
						spans over 9 countries. We aim to fulfil all customer queries as
						soon as possible, with integrity and through a transparent
						communication channel.
					</p>

					<form onSubmit={onSubmit}>
						<div className="fominpt">
							<input
								value={name}
								onChange={onChange}
								type="text"
								name="name"
								placeholder="Name:"
								required
							/>
						</div>
						<div className="fominpt">
							<input
								value={phone}
								onChange={onChange}
								type="text"
								name="phone"
								placeholder="Phone:"
								required
							/>
						</div>
						<div className="fominpt">
							<input
								value={email}
								onChange={onChange}
								type="email"
								name="email"
								placeholder="Email id:"
								required
							/>
						</div>
						<div className="fominpt frmmsg">
							<input
								value={message}
								onChange={onChange}
								type="textarea"
								name="message"
								placeholder="Message:"
								required
							/>
						</div>
						<div className="fominpt frmbtn">
							<input type="submit" name="submit" value="Submit" />
						</div>
					</form>
				</div>
				{AlertResponse}
			</div>
		</Fragment>
	);
};

export default ContactForm;
