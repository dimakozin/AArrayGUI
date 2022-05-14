import React from "react"
import {Link} from "react-router-dom"

import './index.css'

function Navbar(){
    return (
        <nav>
            <ul>
            <li>
                <div className="logo">
                    <div className="logo-image">
                        <img src="/img/5nr-logo.png" alt="Научная рота Сухопутных войск" className="army-logo" />
                    </div>
                    <div className="logo-text">
                        <small>Научная рота</small><br></br>Сухопутных войск
                    </div>
                </div>
            </li>
            <li>
                <div className="li-button">
                    <Link to="/">
                        Управление макетом
                    </Link>
                </div>
            </li>
            <li><div className="li-button">
                <Link to="/about">
                    О роте
                </Link>
            </div></li>
            <li><div className="li-button">
                <Link to="/profile">
                    О разработках
                </Link>
            </div></li>
            <li>
                <div className="logo">
                    <div className="logo-image ">
                        <img src="/img/army-logo.png" alt="Армия России" className="army-logo" />
                    </div>
                    <div className="logo-text">
                        <small>Армия</small><br></br>России
                    </div>
                </div>
            </li>
            </ul>
            <hr></hr>
        </nav>
    )
}

export default Navbar