import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import { Card } from '../Card/card';
import { Formik, Form } from 'formik'; 
import { TextField } from '../TextField/textfield';
import * as Yup from 'yup';
import { addUser } from "../../services/api/users";


import { v4 as uuidv4 } from 'uuid';



function CreateAccount() {
    const { user } = useContext(UserContext);
    
    const [users, setUsers] = useState(user);
    
    const validate = Yup.object({
        name: Yup.string()
            .required('Required'),
        
        email: Yup.string().email('Write in email format')
            .required('Email is required'),
            

        password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Password is required'),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Confirm same Password")
            .required('Confirm password required'),
    });
    
    const createUser = (user) => {
        //setUsers([...users, { ...user}]);
        addUser(user)

    }

    

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col align-self-center">
                    <Card
                        bgcolor="info"
                        header="Create An Account"
                        title="Fill in the following information"
                        body={
                             (
                            <>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        password: "",
                                        confirmPassword:""
                                    }}
                                    validationSchema={validate}
                                    onSubmit={(values, {resetForm}) => {
                                        createUser({
                                            id: uuidv4(),
                                            balance: 0,
                                            ...values,
                                        });
                                        user.push({
                                            id: uuidv4(),
                                            balance: 0,
                                            ...values,
                                        });

                                        resetForm({values: ""});
                                    }}
                                >
                                    { formik => (
                                        <div>
                                        
                                            <Form>
                                                <TextField label="Name" name="name" type="text"  />
                                                <TextField label="Email" name="email" type="email" />
                                                <TextField label="Password" name="password" type="password" />
                                                <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                                                
                                                <button className="btn btn-secondary mt-5" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={!formik.isValid || formik.isSubmitting} >Create Account</button>
                                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title text-info" id="exampleModalLabel">ACCOUNT CREATED!!!</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p className="text-info"> You have successfully created an account, would you like to create another one?</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-info text-white" data-bs-dismiss="modal">Yes Please!</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </Form>
                                        </div>
                                    )

                                    }
                                </Formik>

                            </>
                        )}
                    />
                </div>
            </div>
        </div>
        
    );
}


export { CreateAccount };