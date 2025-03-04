import { type Session } from '@toolpad/core/AppProvider';

type Auth = {
  signIn: () => void;
  signOut: () => Promise<void>;
};
export type AuthRet = {
  session: Session | null;
  authentication: Auth;
};
