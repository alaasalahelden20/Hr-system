import { useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useDispatch, useSelector } from 'react-redux';

import {
  setSessionError,
  setSessionUrl,
  startInterview,
  endInterview,
} from '@Redux/slices/interview';
import type { StateT } from '@type/Redux/state';
import type { InterviewState } from '@type/interview/interviewState';

const useScreenRecorder = (): void => {
  const {
    error: recordingError,
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true, audio: true });

  const { isInInterview, permissionsGranted } = useSelector<
    StateT,
    InterviewState
  >(state => state.interview);

  const dispatch = useDispatch();

  useEffect(() => {
    if (permissionsGranted) {
      startRecording();
    }
  }, [permissionsGranted]);

  useEffect(() => {
    if (status === 'recording') {
      // TODO: change the ID
      dispatch(
        startInterview({
          id: 'interview-id',
          sessionDuration: 3600,
          permissionsDeniedDuration: 30,
        }),
      );
      dispatch(setSessionError(null));
    } else if (recordingError) {
      dispatch(endInterview());
      dispatch(setSessionError('Error starting screen recording'));
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (!isInInterview) {
      stopRecording();
    }
  }, [isInInterview]);

  useEffect(() => {
    if (mediaBlobUrl) {
      dispatch(setSessionUrl(mediaBlobUrl));
    }
  }, [mediaBlobUrl, dispatch]);
};

export default useScreenRecorder;
