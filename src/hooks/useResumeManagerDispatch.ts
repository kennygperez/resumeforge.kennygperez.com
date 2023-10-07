import { useContext } from 'react';

import { ResumeManagerAction } from '../libs/ResumeManager';
import { ResumeManagerDispatchContext } from '../contexts/ResumeManagerDispatchContext';

export function useResumeManagerDispatch(): Readonly<
  React.Dispatch<ResumeManagerAction>
> {
  const rmDispatch = useContext(ResumeManagerDispatchContext);

  if (!rmDispatch) {
    throw new Error('useResumeManagerDispatch must be used within a Provider');
  }

  return rmDispatch;
}
