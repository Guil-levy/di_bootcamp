import React from 'react';

const Sidebar = () => {
    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Find a game</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">By Categorie</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
