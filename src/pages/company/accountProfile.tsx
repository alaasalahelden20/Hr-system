import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  CssBaseline,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AppProvider } from '@toolpad/core/AppProvider';

import ResponsiveAppBar from '@components/common/AppBar';

type Field = {
  name: string;
  required: boolean;
  example?: string;
  type?: 'dropdown' | 'file';
  options?: string[];
};

type Category = {
  name: string;
  fields: Field[];
};
const categories = [
  {
    name: 'Basic Client Information',
    fields: [
      { name: 'Company Name', required: true, example: 'ABC Tech Solutions' },
      {
        name: 'Primary Contact Email',
        required: true,
        example: 'contact@abctech.com',
      },
      {
        name: 'Primary Contact Phone Number',
        required: true,
        example: '+1234567890',
      },
      {
        name: 'Website URL',
        required: false,
        example: 'https://www.abctech.com',
      },
      {
        name: 'Headquarters Address',
        required: false,
        example: '1234 Elm Street, Tech City',
      },
      {
        name: 'Social Media Links',
        required: false,
        example: 'LinkedIn: linkedin.com/abctech',
      },
      {
        name: 'Industry',
        required: false,
        example: 'Technology',
        type: 'dropdown',
        options: ['Technology', 'Finance', 'Healthcare'],
      },
      { name: 'Company Logo', required: false, type: 'file' },
      { name: 'Country of Operation', required: true, example: 'USA' },
    ],
  },
  {
    name: 'Company Profile',
    fields: [
      { name: 'Number of Employees', required: true, example: '200' },
      {
        name: 'Company Mission and Values',
        required: false,
        example: 'To provide innovative tech solutions',
      },
      {
        name: 'Leadership Team Details',
        required: false,
        example: 'John Doe, CEO; Jane Smith, CTO',
      },
      {
        name: 'Annual Revenue Estimate',
        required: false,
        example: '$10M annually',
      },
      {
        name: 'Company Size (SMB, Enterprise)',
        required: false,
        example: 'SMB',
      },
    ],
  },
  {
    name: 'Account Management',
    fields: [
      { name: 'Account Manager', required: true, example: 'Jane Doe' },
      {
        name: 'Internal Notes',
        required: true,
        example: 'Client prefers frequent updates',
      },
      {
        name: 'Preferred Communication Channels',
        required: false,
        example: 'Email and weekly calls',
      },
      {
        name: 'Frequency of Updates',
        required: false,
        example: 'Weekly updates preferred',
      },
    ],
  },
  ,
  {
    name: 'Audit Fields',
    fields: [
      { name: 'Date of Onboarding', required: true, example: '01/15/2025' },
      { name: 'Last Updated', required: true, example: '01/18/2025' },
      {
        name: 'Service Impact Metrics',
        required: false,
        example: 'Successfully hired 5 developers in Q1',
      },
    ],
  },
  {
    name: 'HR Service Needs',
    fields: [
      {
        name: 'Type of Services Required',
        required: true,
        example: 'Screening, onboarding tools',
      },
      { name: 'Number of Open Roles', required: true, example: '5' },
      {
        name: 'Job Descriptions',
        required: true,
        example: 'Software Developer, HR Manager',
      },
      {
        name: 'Service Timeline',
        required: false,
        example: 'Start in February 2025',
      },
      {
        name: 'Preferred Screening Methods',
        required: false,
        example: 'Video interviews',
      },
      {
        name: 'Market Trends for Similar Roles',
        required: false,
        example: 'Average salary for similar roles is $80K',
      },
      {
        name: 'Competitor Insights',
        required: false,
        example: 'Main competitor is XYZ Corp, focuses on similar tools',
      },
    ],
  },
  {
    name: 'Screening & Recruitment Preferences',
    fields: [
      {
        name: 'Required Skills for Candidates',
        required: true,
        example: 'Python, JavaScript, SQL',
      },
      {
        name: 'Language Proficiency',
        required: true,
        example: 'English (fluent), French (basic)',
      },
      {
        name: 'Screening Challenges',
        required: true,
        example: 'Struggles with finding experienced developers',
      },
      {
        name: 'Preferred Candidate Location',
        required: false,
        example: 'Remote or within the USA',
      },
      {
        name: 'Interview Stages',
        required: false,
        example: '2 stages: technical interview and final HR interview',
      },
      {
        name: 'Special Requests',
        required: false,
        example: 'Focus on diversity and inclusion',
      },
      {
        name: 'Talent Pool Size',
        required: false,
        example: '50 candidates available',
      },
      { name: 'Average Time to Hire', required: false, example: '2 months' },
    ],
  },
] as Category[]; // Assert the type of categories

const CompanyInfoForm = (): JSX.Element => {
  return (
    <AppProvider>
      {/* AppBar at the top */}
      <Box>
        <ResponsiveAppBar />
      </Box>
      <CssBaseline />
      {/* Loop through categories and create individual boxes */}
      {categories.map(category => (
        <Box
          key={category.name}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '24px auto', // Center the box with margin
            padding: 3,
            maxWidth: 800, // Restrict the width of the box
            backgroundColor: '#fff',
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          {/* Category Title */}
          <Typography variant="h6" gutterBottom>
            {category.name}
          </Typography>

          {/* Form Fields within each category */}
          <Grid container spacing={2}>
            {category.fields.map(field => (
              <Grid size={{ xs: 12, sm: 6 }} key={field.name}>
                {field.type === 'dropdown' ? (
                  <TextField
                    select
                    fullWidth
                    label={field.name + (field.required ? ' *' : '')}
                    helperText={
                      field.example ? `Example: ${field.example}` : ''
                    }
                  >
                    {field.options?.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : field.type === 'file' ? (
                  <Button variant="outlined" fullWidth>
                    Upload {field.name}
                  </Button>
                ) : (
                  <TextField
                    fullWidth
                    required={field.required}
                    label={field.name + (field.required ? ' *' : '')}
                    helperText={
                      field.example ? `Example: ${field.example}` : ''
                    }
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      {/* Submit Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 4,
        }}
      >
        <Button variant="contained" color="success">
          Submit
        </Button>
      </Box>
    </AppProvider>
  );
};

export default CompanyInfoForm;
