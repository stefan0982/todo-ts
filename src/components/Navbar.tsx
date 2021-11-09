import React from 'react';

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="/"
                >React + Typescript Todo app + context</a>
            </div>
        </nav>
    );
};

export default Navbar;
