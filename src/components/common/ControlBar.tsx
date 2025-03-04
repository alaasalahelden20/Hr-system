import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography, Stack, Divider, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';

import {
  setSideContent,
  setSidePanelOpen,
  setUserStartTalking,
} from '@Redux/slices/interview';
import type { InterviewState } from '@type/interview/interviewState';
import type { StateT } from '@type/Redux/state';
import { getTime } from '@utils/common/getTime';

import CountdownTimer from './CountdownTimer';

const ControlBar: React.FC = () => {
  const {
    sidePanelOpen,
    sideContent: currentSideContent,
    userStartTalking,
  } = useSelector<StateT, InterviewState>(state => state.interview);

  const dispatch = useDispatch();

  const handleOnClick = (sideContent: InterviewState['sideContent']): void => {
    if (sideContent === currentSideContent) {
      dispatch(setSidePanelOpen(!sidePanelOpen));
    } else if (!sidePanelOpen) {
      dispatch(setSidePanelOpen(true));
    }
    dispatch(setSideContent(sideContent));
  };

  const handleEndResponse = (): void => {
    dispatch(setUserStartTalking(false));
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Space') {
      handleEndResponse();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Grid
      container
      size={12}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        background: 'var(--color-primary)',
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <Grid>
        <Stack
          direction={'row'}
          alignItems={'center'}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                marginLeft: 2,
                marginRight: 2,
                backgroundColor: 'var(--color-primary-dark)',
              }}
            />
          }
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
          >
            {getTime()}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
          >
            {/* TODO: get the interview title */}
            {'Interview Title'}
          </Typography>
          <CountdownTimer />
        </Stack>
      </Grid>
      {userStartTalking && (
        <Grid>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: 'none',
              borderColor: 'var(--color-primary-dark)',
              color: 'var(--color-primary-dark)',
            }}
            endIcon={
              <SpaceBarIcon sx={{ color: 'var(--color-primary-dark)' }} />
            }
            onClick={handleEndResponse}
          >
            End Response
          </Button>
        </Grid>
      )}
      <Grid>
        <IconButton onClick={() => handleOnClick('info')}>
          <InfoIcon sx={{ color: 'var(--color-primary-dark)' }} />
        </IconButton>
        <IconButton onClick={() => handleOnClick('participants')}>
          <PeopleIcon sx={{ color: 'var(--color-primary-dark)' }} />
        </IconButton>
        <IconButton onClick={() => handleOnClick('transcript')}>
          <ChatIcon sx={{ color: 'var(--color-primary-dark)' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ControlBar;
