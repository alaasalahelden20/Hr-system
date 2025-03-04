import type { AuthProvider, AuthResponse } from '@toolpad/core/SignInPage';
import axios from 'axios';

const DashboardUrl = '/dashboard'; // Redirect to the dashboard after login

export const signin: (
  provider: AuthProvider,
  formData: FormData,
  callbackUrl?: string,
) => Promise<AuthResponse> | void = async (_, formData, callbackUrl) => {
  // Return a promise conforming to AuthResponse
  const promise = new Promise<AuthResponse>(async resolve => {
    try {
      const email = formData.get('email');
      const password = formData.get('password');

      // TODO
      // Send login request to the backend
      await axios.post('/api/auth/signin', {
        email,
        password,
      });

      // Extract tokens from the response
      // const { token, refreshToken } = response.data;

      // localStorage.setItem('token', token);
      // localStorage.setItem('refreshToken', refreshToken);

      // Resolve the promise with success
      resolve({
        type: 'CredentialsSignin',
      });

      // Redirect after successful login
      if (callbackUrl) {
        window.location.href = DashboardUrl;
      }
      alert('Login successful!');
    } catch (error) {
      console.error('Error during sign-in:', error);

      // Resolve the promise with an error
      resolve({
        type: 'CredentialsSignin',
        error: 'Invalid credentials. Please try again.', // Error message
      });
    }
  });

  return promise; // Return the promise for the expected type
};
