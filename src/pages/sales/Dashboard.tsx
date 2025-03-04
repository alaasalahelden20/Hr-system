import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import BusinessIcon from '@mui/icons-material/Business';

import useAuthentication from '@hooks/auth/useAuthentication';
import { demoTheme } from '@components/common/DemoTheme';
import CompaniesTable from '@components/dashboard/CompaniesTable';
//import useToken from '@hooks/auth/useToken';

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'companies',
    title: 'Companies',
    icon: <BusinessIcon />,
  },
];

function DemoPageContent({
  pathname,
}: {
  pathname: string;
}): ReturnType<React.FC> {
  if (pathname === '/dashboard') {
    return (
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4">Welcome to the Dashboard</Typography>
      </Box>
    );
  }

  if (pathname === '/companies') {
    return <CompaniesTable />;
  }
  // Fallback for unknown routes
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4">Page Not Found</Typography>
    </Box>
  );
}

type DemoProps = {
  window?: () => Window;
};

export default function Dashboard(props: DemoProps): ReturnType<React.FC> {
  const { window } = props;

  //useToken();

  const router = useDemoRouter('/dashboard');

  const { session, authentication } = useAuthentication();

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'CandiFit',
        homeUrl: '/toolpad/core/introduction',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
