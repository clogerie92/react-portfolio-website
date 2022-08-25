import React from "react";
import "./pages/styles/styles.css";

function Footer () {
    return (
        <footer className="footer-container">
            <ul className="footer-list">
                <li>
                    <p><a href="https://github.com/clogerie92" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a></p>
                </li>
                <li>
                    <p><a href="https://www.linkedin.com/in/carl-logerie-a45397245/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a></p>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;