import * as React from "react";
import './index.css'

const Profile = () => {
    return (
        <section className="profile">
            <section className="skat">
                <div>Скат</div>
                <div>
                    <img src="/img/razdat1.png"></img>                    
                </div>
            </section>
            <section className="shahid">
                <div>Пояс шахида</div>
                <div>
                    <img src="/img/razdat2.png"></img>                    
                </div>
            </section>
        </section>
    )
}

export default Profile