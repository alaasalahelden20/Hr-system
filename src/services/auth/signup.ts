import type { AuthProvider, AuthResponse } from '@toolpad/core/SignInPage';
import axios from 'axios';
// import log from 'loglevel';

export const signup: (
  provider: AuthProvider,
  formData: FormData,
) => Promise<AuthResponse> = async (_, formData) => {
  const promise = new Promise<AuthResponse>(async resolve => {
    try {
      const dataToSend = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      // TODO
      await axios.post('/api/auth/signup', dataToSend);

      // const { token, refreshToken } = response.data;

      // log.info(response);

      // Store the tokens in localStorage or secure cookie for later use
      // localStorage.setItem('token', token);
      // localStorage.setItem('refreshToken', refreshToken);

      // Redirect or perform other actions upon successful login
      resolve({
        type: 'CredentialsSignin',
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        console.error('Axios error:', error.message);
      } else {
        // Handle general errors
        console.error('General error:', error);
      }
      // Resolve the promise with an error
      resolve({
        type: 'CredentialsSignin',
        error: 'Invalid credentials. Please try again.', // Error message
      });
    }
  });

  return promise; // Return the promise for the expected type
};
