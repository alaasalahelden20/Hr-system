import axios from 'axios';
import log from 'loglevel';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Add the token to Axios headers for all requests
function useToken(): void {
  const navigate = useNavigate();

  React.useEffect(() => {
    const addToken = async (): Promise<void> => {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        log.info('No token found, redirecting to login');
        await navigate('/signin');
      }
    };
    void addToken();
  }, [navigate]);
}

export default useToken;
