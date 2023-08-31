import { useState } from 'react';
import axios from 'axios';

export const useResetPassword = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const resetPassword = async ({ email }) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:8070/user/resetpassword', {
                email,
            });
            if (response.status === 200) {
                // Handle successful reset, if needed
            } else {
                setError(response.data.error);
            }
        } catch (error) {
            setError('An error occurred while resetting the password.');
        } finally {
            setIsLoading(false);
        }
    };

    return { resetPassword, isLoading, error };
};
