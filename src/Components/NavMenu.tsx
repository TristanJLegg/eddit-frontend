import React from "react";
import { FaUserAlt } from 'react-icons/fa';

export const NavMenu: React.FC = () => {
    return (
        <div className="navmenu">
            <div className="navmenu-brand">
                <div className="navmenu-brand-title">eddit</div>
            </div>
            <div className="navmenu-buttons">
                <div className="navmenu-button-outline">
                    <div className="navmenu-button-outline-text">Log In</div>
                </div>
                <div className="navmenu-button-fill">
                    <div className="navmenu-button-fill-text">Sign Up</div>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;