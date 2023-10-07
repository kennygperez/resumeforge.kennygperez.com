import { createContext } from 'react';

import { ResumeManager } from '../libs/ResumeManager';

export const ResumeManagerContext = createContext<ResumeManager | null>(null);
