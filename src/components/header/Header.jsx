import React from "react";
import "./style.css"

import myPhoto from "../../img/photo/myphoto.jpg"


const Header = () => {
    return <div>
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Grigory</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <img src={myPhoto} alt="photo" width="250px" style={{ borderRadius: 10 }} />
            </div>
        </header>
    </div>;
};

export default Header;
