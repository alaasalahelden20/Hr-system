import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button } from '@mui/material';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { useState } from 'react';

import type { RowData } from '@type/DataTable';
import BasicModal from '@components/dashboard/CompaniesModal';

// Sample data for rows
const rows: RowData[] = [
  {
    id: 1,
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 2,
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  {
    id: 5,
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
];

// Define columns for the DataGrid
const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'calories', headerName: 'Calories', type: 'number', flex: 1 },
  { field: 'fat', headerName: 'Fat (g)', type: 'number', flex: 1 },
  { field: 'carbs', headerName: 'Carbs (g)', type: 'number', flex: 1 },
  { field: 'protein', headerName: 'Protein (g)', type: 'number', flex: 1 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function AccountsTable(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal: () => void = () => setIsModalOpen(true);
  const handleCloseModal: () => void = () => setIsModalOpen(false);
  // Specify return type here
  return (
    <Paper sx={{ height: '100vh', width: '100%' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography variant="h6">Accounts</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddBusinessIcon />}
          onClick={handleOpenModal} // Open the modal on click
        >
          Create Account
        </Button>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: 0, height: 'calc(100vh - 160px)' }} // Adjust height to fit within the page
      />
      {/* Render BasicModal */}
      <BasicModal open={isModalOpen} handleClose={handleCloseModal} />
    </Paper>
  );
}
