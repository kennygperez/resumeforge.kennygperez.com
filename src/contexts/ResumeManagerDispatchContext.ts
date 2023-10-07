import { createContext } from 'react';

import { ResumeManagerAction } from '../libs/ResumeManager';

export const ResumeManagerDispatchContext =
  createContext<React.Dispatch<ResumeManagerAction> | null>(null);
