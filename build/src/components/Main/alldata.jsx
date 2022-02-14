import React, { useContext, useState } from "react";
import { Card } from "../Card/card";
import TransactionContext from "../Context/TransactionContext";
import UserContext from "../Context/UserContext";

function AllData() {
    const { user } = useContext(UserContext);

    const[users, setUsers] = useState(user);

    

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col align-self-center">
                    <Card
                        bgcolor="info"
                        header="ALL DATA"
                        body={(
                            <>
                            <table className="table table-info table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users.map((user) => {
                                        return(
                                            <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.balance}</td>
                                            </tr>
                    
                                        );
                                    })}
                                </tbody>
                            </table>
                            </>             
                        )}
                    />
                </div>
            </div>
        </div>

    );
}

export { AllData };