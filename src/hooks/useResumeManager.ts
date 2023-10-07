import { useContext } from 'react';

import { ResumeManagerContext } from '../contexts/ResumeManagerContext';
import { ResumeManager } from '../libs/ResumeManager';

export function useResumeManager(): Readonly<ResumeManager> {
  const rm = useContext(ResumeManagerContext);

  if (!rm) {
    throw new Error('useResumeManager must be used within a Provider');
  }

  return rm;
}
