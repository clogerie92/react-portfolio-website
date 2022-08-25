import React, {useState} from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./Navbar";

export default function PortfolioSite() {
    // set state of portfolio site to the About page
    const [currentPage, setCurrentPage] = useState("About");
    // switch statement to render pages
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    }
    // function for clicking on nav items
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>  
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </>
    );
}