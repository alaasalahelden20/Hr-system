import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel, MenuItem, Select, Box, Button } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

type CompanyFormGridProps = {
  subscription: string;
  handleSubscriptionChange: (event: SelectChangeEvent) => void;
};

export default function CompanyFormGrid({
  subscription,
  handleSubscriptionChange,
}: CompanyFormGridProps): JSX.Element {
  const [showPremiumDropdown, setShowPremiumDropdown] = useState(false);

  const handlePremiumClick: () => void = () => {
    setShowPremiumDropdown(prev => !prev);
  };
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="Snow"
          autoComplete="last name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zip"
          type="zip"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="subscription-plans" required>
          Subscription Plans
        </FormLabel>
        <Box sx={{ display: 'flex', gap: '1rem', marginTop: '8px' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => alert('Demo selected')}
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handlePremiumClick}
          >
            Premium
          </Button>
        </Box>
        {showPremiumDropdown && (
          <Box sx={{ marginTop: '8px' }}>
            <InputLabel id="premium-options-label">Premium Options</InputLabel>
            <Select
              labelId="premium-options-label"
              id="premium-options"
              value={subscription}
              onChange={handleSubscriptionChange}
              displayEmpty
              fullWidth
              size="small"
              variant="outlined"
            >
              <MenuItem value="" disabled>
                <em>Select a premium option</em>
              </MenuItem>
              <MenuItem value={1}>
                Monthly – Access all features for 1 month
              </MenuItem>
              <MenuItem value={2}>
                Yearly – Access all features for 1 year
              </MenuItem>
            </Select>
          </Box>
        )}
      </FormGrid>
    </Grid>
  );
}
