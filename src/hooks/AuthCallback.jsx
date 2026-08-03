import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        // 1. Get the token from URL query parameters
        const token = searchParams.get('token');
        const error = searchParams.get('error');
        console.log('Token:', token);
        console.log('Error:', error);
        

        // 2. Handle errors if any
        if (error) {
          throw new Error(error);
        }

        if (!token) {
          throw new Error('Authentication failed: No token received');
        }

        // 3. Store the token (consider more secure storage for production)
        localStorage.setItem('token', token);
        
        // 4. Set default Authorization header for axios
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // 5. Optional: Verify token with backend
        // try {
        //   await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/me`);
        // } catch (verifyError) {
        //   console.error('Token verification failed:', verifyError);
        //   localStorage.removeItem('token');
        //   throw new Error('Session verification failed');
        // }

        // 6. Redirect to dashboard or intended page
        const redirectTo = localStorage.getItem('redirectTo') || '/dashboard';
        localStorage.removeItem('redirectTo');
        navigate(redirectTo);

      } catch (err) {
        console.error('Authentication error:', err);
        navigate('/login', { state: { error: err.message } });
      }
    };

    authenticateUser();
  }, [navigate, searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-lg">Authenticating...</p>
      </div>
    </div>
  );
};

export default AuthCallback;