import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute ({children}){
    const {isauth}=useContext(AuthContext)
    
    if(!isauth.isauth){
        return <Navigate to="/login"/>
    }
    return children
}

export default PrivateRoute