import React from "react";
import profil from "./src/profile.jpg";
const ProfilPhoto = () => {
    return ( <div>
        <img src={profil}
        className = "ProfilePhoto"
         alt = "profil-image" />
        </div>  
    );
};
export default ProfilPhoto;