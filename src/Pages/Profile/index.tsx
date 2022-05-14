import React from "react";
import './index.css'

const Profile = () => {
    return (
    <section className="profile  animate__animated animate__fadeIn">        
        <section className="profile-section skat">
            <img className="profile-picture" src="/img/razdat2.png" alt="Profile"></img>                    
        </section>
        <section className="profile-section shahid">
            <img className="profile-picture" src="/img/razdat1.png" alt="Profile"></img>                    
        </section>
    </section>
    )
}

export default Profile