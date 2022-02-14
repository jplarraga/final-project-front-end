import React, {useContext, useState} from "react";
import { Template } from '../Main/Template/template';
import TransactionContext from "../Context/TransactionContext";

function Withdraw() {
    

    return(
        <div className="container">
            <Template
                bgcolor="info"
                header="WITHDRAW"
                showBalance={true}
                showWithdraw={true}
            />
        </div>
    );
}
    

export { Withdraw };