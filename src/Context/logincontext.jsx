import React,{ useState } from 'react';

 export const LoginContext = React.createContext();

 const LoginContextProvider = ({children}) => {
    
     const [isLoggedIn,setLoggedIn] = useState(false);
     const [User,setUser] = useState('');
     let pages = [
        { id: '1', name: 'Home', link: '/#home' },
        { id: '3', name: 'Events', link: '/events' },
        { id: '4', name: 'Accomodation', link: '/accomodation' },
        { id: '5', name: 'Merchandise', link: '/merchandise' },
        { id: '6', name: 'Sponsor', link: '/sponsors' },
        { id: '7', name: 'Contact', link: '/contact' }
    ];
    let addOn = (isLoggedIn)?{ id: '8',name:User, link: '/#home' }:{ id: '8',  name: 'SignIn', link: '/signin' };
    pages=[...pages,addOn]
    return (
        <LoginContext.Provider value={{isLoggedIn,setLoggedIn,User,setUser,pages}} >{children}</LoginContext.Provider>
    )} ;

 
 export default LoginContextProvider ;
