import { Button, Link } from '@mui/material';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

import { signin } from '@services/auth/signin';
import CustomEmailField from '@components/auth/CustomEmailField';
import CustomPasswordField from '@components/auth/CustomPasswordField';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

function CustomButton(): ReturnType<React.FC> {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
    >
      Sign in
    </Button>
  );
}

function SignUpLink(): ReturnType<React.FC> {
  return (
    <Link href="/signin" variant="body2">
      Sign up
    </Link>
  );
}

function ForgotPasswordLink(): ReturnType<React.FC> {
  return (
    <Link href="/" variant="body2">
      Forgot password?
    </Link>
  );
}

function Title(): ReturnType<React.FC> {
  return <h2 style={{ marginBottom: 8 }}>Login</h2>;
}

export default function SignIn(): ReturnType<React.FC> {
  const theme = useTheme();

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signin}
        slots={{
          title: Title,
          emailField: CustomEmailField,
          passwordField: CustomPasswordField,
          submitButton: CustomButton,
          signUpLink: SignUpLink,
          forgotPasswordLink: ForgotPasswordLink,
        }}
        providers={providers}
      />
    </AppProvider>
  );
}
