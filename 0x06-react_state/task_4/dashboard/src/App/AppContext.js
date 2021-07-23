import React, { createContext }  from  'react';
const user = {
    email:"",
    password:"",
    isLoggedIn:false
}

const logOut = () => {}

const MyContext = React.createContext({user, logOut});
export { user, MyContext };
