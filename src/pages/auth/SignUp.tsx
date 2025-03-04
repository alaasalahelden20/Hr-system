import React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Checkbox, Link } from '@mui/material';

import { signup } from '@services/auth/signup';
import CustomPasswordField from '@components/auth/CustomPasswordField';
import CustomEmailField from '@components/auth/CustomEmailField';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

function SigninLink(): ReturnType<React.FC> {
  return (
    <Link href="/signin" variant="body2">
      Sign in
    </Link>
  );
}

function SignUpTitle(): ReturnType<React.FC> {
  return <h2>Sign Up</h2>;
}

// function SignUpSubmitButton(): ReturnType<React.FC> {
//   return <Button variant="contained">Sign Up</Button>;
// }

function AgreeWithTerms(): ReturnType<React.FC> {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name="tandc"
          value="true"
          color="primary"
          sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
        />
      }
      slotProps={{
        typography: {
          fontSize: 14,
        },
      }}
      color="textSecondary"
      label="I agree with the T&C"
    />
  );
}

// TODO: create a custom submit button with "Sign Up" instead of the current sign in button
export default function SignUp(): ReturnType<React.FC> {
  const theme = useTheme();

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signup}
        providers={providers}
        slots={{
          emailField: CustomEmailField,
          passwordField: CustomPasswordField,
          signUpLink: SigninLink,
          rememberMe: AgreeWithTerms,
          title: SignUpTitle,
        }}
      />
    </AppProvider>
  );
}
