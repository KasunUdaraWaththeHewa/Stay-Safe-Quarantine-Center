import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async ({ email, password, role }) => {
    setIsLoading(true);
    setError(null);
    console.log(email, password, role);
    try {
      const response = await axios.post('http://localhost:8070/user/signup', {
        email,
        password,
        role,
      });
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: 'SIGNUP', payload: response.data }); // Use SIGNUP type
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError('An error occurred during signup.');
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
