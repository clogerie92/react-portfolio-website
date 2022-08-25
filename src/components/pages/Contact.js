import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./styles/styles.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    console.log(inputType, target.id);

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
      console.log(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    } else if (!name || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    } else {
      setErrorMessage("");
    }

    alert(`Thank you for submitting your message, ${name}`);
    setName("");
    setEmail("");
    setMessage("");
    window.open(`mailto:${email}`);
  };

  return (
    <>
        <h2 className="center" id="contact-header">Contact</h2>
        {/* onSubmit={handleFormSubmit} */}
        <form id="contact-form">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input
                type="text"
                name="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={name}
                onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                </label>
                <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                </label>
                <textarea
                className="form-control"
                placeholder="Enter message here..."
                id="exampleFormControlTextarea1"
                rows="3"
                value={message}
                onChange={handleInputChange}
                ></textarea>
            </div>
            {errorMessage && (
                <div className="error-message">
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <div className="btn-div">
                <button
                type="submit"
                className="btn btn-primary"
                onClick={handleFormSubmit}
                >Send</button>
            </div>
        </form>
    </>
    
  );
}

export default Contact;
