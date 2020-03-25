import React from "react";
import {Redirect} from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import Authentication from "../components/authentication";

const AuthPage = ({authType, isAuthenticated}) => {

    if(isAuthenticated) return <Redirect to={"/"} />;

    return(
        <div>
            <ErrorMessage/>
            <Authentication authType={authType} />
        </div>
    )

};

export default AuthPage;