import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3">
           <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: contact@gsteam.com</p>
                        <p>Phone: +123 456 789</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <span className="text-muted">© 2024 Gsteam. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
