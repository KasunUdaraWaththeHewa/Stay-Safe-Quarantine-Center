import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async ({email, password, role}) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8070/user/login', {
        email,
        password,
        role
      });
      if (response.status === 200) {
        console.log("EMAIl ",email," Logged in as ",role);
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: 'LOGIN', payload: response.data });
        if (role === 'admin') {
          return <Redirect to="http://localhost:3000/adminpanel" />;
        } else if (role === 'staff') {
          return <Redirect to="http://localhost:3000/staffPanel" />;
        } else if (role === 'kitchen') {
          //methanatath enwa redirect wenne nathi eka thamai case eka
          console.log("kitchen");
          return <Redirect to="http://localhost:3000/meals" />;
        } else if (role === 'pharmacy') {
          return <Redirect to="http://localhost:3000/PharmacyPanel" />;
        }
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError(()=>{
        if (error.response) {
          return error.response.data.error;
        } else {
          return 'An error occurred while signing up.';
        }
      });
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
