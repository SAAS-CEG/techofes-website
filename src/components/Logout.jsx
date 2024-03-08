import React from 'react';
import { useAuth } from './AuthContext';

function Logout() {
    const { logout } = useAuth();
    logout();
  return <></>
}

export default Logout;