import React, { createContext, useState } from "react";
import users from '../Data/users';


const UserContext = createContext();

//const initialUser = {id:1, name:'Miguel', favoriteMovies:[1,2]}

const UserProvider = ({children}) => {
    const [user, setUser] = useState(users);
    const data = { user };

    const url = `${process.env.REACT_APP_URL_API}/users`

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;