import React from "react";

function Navbar ({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="list-item">
                            <a href="#about" className={currentPage === "About" ? "nav-link active" : "nav-link"} onClick={() => handlePageChange("About")}>About</a>
                        </li>
                        <li className="list-item">
                            <a href="#portfolio" className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"} onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
                        </li>
                        <li className="list-item">
                            <a href="#contact" className={currentPage === "Contact" ? "nav-link active" : "nav-link"} onClick={() => handlePageChange("Contact")}>Contact</a>
                        </li>
                        <li className="list-item">
                            <a href="#resume" className={currentPage === "Resume" ? "nav-link active" : "nav-link"} onClick={() => handlePageChange("Resume")}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;