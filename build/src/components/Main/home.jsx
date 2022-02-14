import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Template } from "../Main/Template/template"

function Home() {

    const { user } = useContext(UserContext);
    return(
        <div className="container-fluid">

        <Template
            bgcolor="info"
            header="WELCOME TO BAD BANK"
            title="For all your banking needs"
            showImage={true}
        />    
       
        </div>
    );
}


export { Home };
