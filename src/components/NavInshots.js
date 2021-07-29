import React from 'react';
import "./NavInshots.css";
import HamburgerDrawer from './HamburgerDrawer'

const NavInshots = ({ setCategory }) => {
    return (
        <div className="nav">
            <div className="icon">
            <HamburgerDrawer setCategory={setCategory} />
            </div>
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"  alt="logo" />
        </div>
    )
}

export default NavInshots
