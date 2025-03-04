import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import type { SelectChangeEvent } from '@mui/material/Select';

import Form from '@components/common/Form';
import type { BasicModalProps } from '@type/BasicModalProps';

import { style } from '../../styles/modalstyle';

export default function BasicModal({
  open,
  handleClose,
}: BasicModalProps): JSX.Element {
  const [subscription, setSubscription] = React.useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setSubscription(event.target.value as string);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-modal-title" style={{ marginBottom: '25px' }}>
            Create New Company
          </h2>
          <Form
            subscription={subscription}
            handleSubscriptionChange={handleChange}
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={handleClose}>
              Add Company
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
