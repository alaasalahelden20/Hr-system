import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField, InputAdornment } from '@mui/material';

function CustomEmailField(): ReturnType<React.FC> {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Email"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
}

export default CustomEmailField;
