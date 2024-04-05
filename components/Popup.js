
import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        const lastPopupShownDate = localStorage.getItem('lastPopupShownDate');
        const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format

        if (lastPopupShownDate !== currentDate) {
            setShowPopup(true);
            localStorage.setItem('lastPopupShownDate', currentDate);
            // localStorage.setItem('lastPopupShownDate', '2024-04-06');
        }
    }, []);

    const overlayStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    };

    const popupStyles = {
        backgroundColor: '#fff',
        borderRadius: '50px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        zIndex: 1001
    };

    const closeButtonStyles = {
        width: 'fixed',
        height: 'auto',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '30px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'end'
    };

    // const contentStyles = {
    //     width: '950px',
    //     margin: 'auto',
    // };

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const { name, phone, email, message } = formData;

    const [showSuccess, setShowSuccess] = useState(false);
    const [errStatus, setErrStatus] = useState(false);
    let AlertResponse = null;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                console.log("🚀 ~ onSubmit ~ result:", result)
                // toast.success("Thanks for writing to us, we will get back to you shortly", {
                //     position: toast.POSITION.TOP_RIGHT,
                // });
                // setShowSuccess(true);
            } catch (err) {
                console.log("🚀 ~ onSubmit ~ err:", err)
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

    return showPopup ? (
        <div style={overlayStyles}>
            <div style={popupStyles}>
                <div className='contentStyles'>
                    <div style={{ display: 'flex' }}>
                        <div className='image-section'>
                            <img src="../static/images/contact-form.png" alt="" className='imagheight' />
                        </div>
                        <div className="form-section">
                            <div className='colseBtn'>
                                <div style={closeButtonStyles} onClick={closePopup}>
                                    {/* &times; */}
                                    <MdClose />
                                </div>
                            </div>
                            <div className="gtintchrgt">
                                <p className='form-heading my-heading'>
                                    RWH Consultancy
                                </p>

                                <form onSubmit={onSubmit}>
                                    <div className="fominpt myinput">
                                        <input
                                            value={name}
                                            onChange={onChange}
                                            type="text"
                                            name="name"
                                            placeholder="Name:"
                                            required
                                        />
                                    </div>
                                    <div className="fominpt myinput">
                                        <input
                                            value={phone}
                                            onChange={onChange}
                                            type="text"
                                            name="phone"
                                            placeholder="Phone:"
                                            required
                                        />
                                    </div>
                                    <div className="fominpt myinput">
                                        <input
                                            value={email}
                                            onChange={onChange}
                                            type="email"
                                            name="email"
                                            placeholder="Email id:"
                                            required
                                        />
                                    </div>
                                    <div className="fominpt frmmsg myinput1 ">
                                        <input
                                            value={message}
                                            onChange={onChange}
                                            type="textarea"
                                            name="message"
                                            placeholder="Message:"
                                            required
                                        />
                                    </div>
                                    <div className="fominpt frmbtn mybutton">
                                        <div style={{ textAlign: 'center' }}>
                                            <input type="submit" name="submit" value="Book a Free Session" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {AlertResponse}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Popup;
