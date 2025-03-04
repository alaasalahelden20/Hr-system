import axios from 'axios';
import log from 'loglevel';

/**
 * Handles user sign-out logic.
 * @returns {Promise<void>}
 */
export async function signOut(): Promise<void> {
  try {
    // Make an API call to your backend to handle sign-out
    const response = await axios.post('/api/logout'); // Replace with actual endpoint
    log.info('Sign out successful:', response.data);

    // Clear the token from local storage
    localStorage.removeItem('token');
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    log.error("Can't sign out", errorMessage);

    // Rethrow error if needed
    throw error;
  }
}
