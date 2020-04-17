import React from "react";
import Profil from "./profile/ProfilPhoto";
import Name from "./profile/FullName";
import Address from "./profile/Address";
import './App.css';


const Main = () => {
    return ( < div className = "App" >
       <Profil/>
        <Name />
        <Address />
        </div>
    );
};

export default Main;