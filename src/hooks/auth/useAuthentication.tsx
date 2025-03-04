import React from 'react';
import { type Session } from '@toolpad/core/AppProvider';

import type { AuthRet } from '@type/auth';
import { signOut } from '@services/auth/signOut';

const demoSession: Session = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456',
  },
};
function useAuthentication(): AuthRet {
  const [session, setSession] = React.useState<Session | null>(demoSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: (): void => {
        setSession(demoSession);
      },
      signOut: async (): Promise<void> => {
        try {
          await signOut();
          setSession(null);
        } catch (error) {
          console.error('Sign-out failed:', error);
        }
      },
    };
  }, []);
  return { authentication, session };
}

export default useAuthentication;
