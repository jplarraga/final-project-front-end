import React, { useContext, useState } from "react";
import { Template } from '../Main/Template/template';
import TransactionContext from "../Context/TransactionContext";
import { Card } from '../Card/card';
import { v4 as uuidv4 } from 'uuid';


function Deposit() {
    const { data } =useContext(TransactionContext);
    return(
        <div className="container">
            <Template
                bgcolor="info"
                header="DEPOSIT"
                showBalance={true}
                showDeposit={true}
            />
        </div>
    );
};


export { Deposit };