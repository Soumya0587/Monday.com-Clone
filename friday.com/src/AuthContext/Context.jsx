import { createContext,useState } from "react";

export const AuthContext=createContext()



function AuthContextProvider({children}) {
    const obj={token:null,isAuth:false}
    const [isAuth,setauth]=useState(obj)

    const loginUser=(token)=>{
        setauth({token:token,isAuth:true})
    }
    const logoutUser=()=>{
        setauth(obj)
    }
    return <AuthContext.Provider value={{isAuth,loginUser,logoutUser}}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;