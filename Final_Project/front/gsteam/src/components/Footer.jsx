import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Store</a></li>
                            <li><a href="#">My Games</a></li>
                            <li><a href="#">Profile</a></li>
                        </ul>
                    </div>
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
