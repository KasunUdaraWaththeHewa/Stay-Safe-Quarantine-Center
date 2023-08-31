import {useState} from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useSignup=()=>{
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const {dispatch}= useAuthContext()

    const signup = async ({email, password, role}) => {
        setIsLoading(true);
        setError(null);
        console.log(`Calling signup method in useSignup.js : email:${email},password:${password},role:${role}`);
        try {
        console.log(45654)
          const response = await axios.post('http://localhost:8070/user/signup', {
            email,
            password,
            role
          });
          console.log(`Calling signup method in try useSignup.js : email:${email},password:${password},role:${role}`);
          if (response.status === 200) {
            console.log(`Calling signup method in if part of try useSignup.js : email:${email},password:${password},role:${role}`);
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: 'LOGIN', payload: response.data });
          } else {
            setError(response.data.error);
            console.log(`Calling signup method in else part of try useSignup.js : email:${email},password:${password},role:${role}`);
          }
        } catch (error) {
          setError('An error occurred during signup.');
          console.log(`Calling signup method in catch useSignup.js : email:${email},password:${password},role:${role}`);
        } finally {
          setIsLoading(false);
        }
      };
    
      return { signup, isLoading, error };
}