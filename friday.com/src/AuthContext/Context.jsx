import { createContext,useState } from "react";

export const AuthContext=createContext()



function AuthContextProvider({children}) {
    const obj={token:null,isAuth:false}
    const loginobj={token:null,isAuth:false}
    const [isAuth,setauth]=useState(obj)
    const [loginisAuth,loginsetauth]=useState(loginobj)

    const loginuser=(token)=>{
        loginsetauth({token:token,isAuth:true})
    }
    const SignUser=(token)=>{
        setauth({token:token,isAuth:true})
    }
    const logoutUser=()=>{
        setauth(obj)
    }
    return <AuthContext.Provider value={{isAuth,SignUser,loginisAuth,logoutUser,loginuser}}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;