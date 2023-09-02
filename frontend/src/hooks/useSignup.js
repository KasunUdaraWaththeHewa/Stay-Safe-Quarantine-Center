import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const popupSuccessfull = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You successfully craeted the account!',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const signup = async ({ email, password, role }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8070/user/signup', {
        email,
        password,
        role,
      });
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: 'SIGNUP', payload: response.data }); // Use SIGNUP type
        popupSuccessfull();
      } else {
        console.log(response.data.error);
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

  return { signup, isLoading, error };
};
