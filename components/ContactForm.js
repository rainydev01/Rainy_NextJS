import React, { Fragment, useState, useEffect } from "react";

// ===== Zoho CRM webform settings =====
// Values from the Zoho CRM webform "rainyfilter contact us" (form ID 1423569000000639010).
const ZOHO = {
	action: "https://crm.zoho.in/crm/WebToLeadForm",
	xnQsjsdp: "52b213634f01c06fda9863eb0023e7e44c9a70719595c6b29bbd7bddc9386dd3",
	xmIwtLD: "9d83cd9300edc3d70b2f6d8bf0d5cbd31bf443868e5511e235874dbce4dfde80c4226c7a8d7586bba3025f5d1c57ddd6",
	actionType: "TGVhZHM=", // "Leads" – same for every Leads webform
	returnURL: "https://www.rainyfilters.com/contact-us/enquire?submitted=true",
};

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const { name, phone, email, message } = formData;

	const [showSuccess, setShowSuccess] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	// Split the Name box into Zoho's First Name / Last Name (both mandatory in Zoho)
	// "Rahul Bajaj" -> First: Rahul, Last: Bajaj   |   "Ramesh K" -> First: Ramesh, Last: K
	const parts = name.trim().split(/\s+/).filter(Boolean);
	const firstName = (parts[0] || "").slice(0, 40);
	const lastName = parts.slice(1).join(" ").slice(0, 80);

	// After Zoho saves the Lead, it sends the visitor back here with ?submitted=true
	useEffect(() => {
		if (window.location.search.indexOf("submitted=true") !== -1) {
			setShowSuccess(true);
			const el = document.getElementById("enquiry-success");
			if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}, []);

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.dataset.field]: e.target.value });
	};

	// The browser checks the "required" fields first; this only runs when they are filled.
	// The form then posts directly to Zoho CRM (normal page submit, no API needed).
	const onSubmit = () => {
		setSubmitting(true);
	};

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

					{showSuccess ? (
						<div id="enquiry-success" className="alert alert-primary" role="alert">
							<p>Thanks for writing to us, we will get back to you shortly.</p>
						</div>
					) : (
						<form
							action={ZOHO.action}
							method="POST"
							acceptCharset="UTF-8"
							onSubmit={onSubmit}
						>
							{/* Zoho CRM hidden fields – do not remove */}
							<input type="hidden" name="xnQsjsdp" value={ZOHO.xnQsjsdp} />
							<input type="hidden" name="zc_gad" value="" />
							<input type="hidden" name="xmIwtLD" value={ZOHO.xmIwtLD} />
							<input type="hidden" name="actionType" value={ZOHO.actionType} />
							<input type="hidden" name="returnURL" value={ZOHO.returnURL} />
							<input type="text" name="aG9uZXlwb3Q" defaultValue="" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />
							
							<input type="hidden" name="First Name" value={firstName} />
							<input type="hidden" name="Last Name" value={lastName} />

							<div className="fominpt">
								<input
									value={name}
									onChange={onChange}
									data-field="name"
									type="text"
									maxLength="120"
									placeholder="Full Name (first & last):"
									pattern="\s*\S+\s+\S.*"
									title="Please enter your first and last name (an initial is fine, e.g. Ramesh K)"
									required
								/>
							</div>
							<div className="fominpt">
								<input
									value={phone}
									onChange={onChange}
									data-field="phone"
									type="tel"
									name="Phone"
									maxLength="30"
									placeholder="Phone:"
									required
								/>
							</div>
							<div className="fominpt">
								<input
									value={email}
									onChange={onChange}
									data-field="email"
									type="email"
									name="Email"
									maxLength="100"
									placeholder="Email id:"
									required
								/>
							</div>
							<div className="fominpt frmmsg">
								<input
									value={message}
									onChange={onChange}
									data-field="message"
									type="text"
									name="Description"
									placeholder="Message:"
									required
								/>
							</div>
							<div className="fominpt frmbtn">
								<input
									type="submit"
									value={submitting ? "Sending..." : "Submit"}
									disabled={submitting}
								/>
							</div>
						</form>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default ContactForm;
