import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { InterviewState } from '@type/interview/interviewState';
import type { StateT } from '@type/Redux/state';

const usePreventNavigation = (): void => {
  const { isInInterview } = useSelector<StateT, InterviewState>(
    state => state.interview,
  );

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent): void => {
      if (isInInterview) {
        event.preventDefault();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return (): void => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isInInterview]);
};

export default usePreventNavigation;
