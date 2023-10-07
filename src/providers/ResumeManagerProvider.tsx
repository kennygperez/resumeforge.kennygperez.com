import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react';

import {
  ResumeManager,
  ResumeManagerAction,
  ResumeSchema,
} from '../libs/ResumeManager';
import { ResumeManagerContext } from '../contexts/ResumeManagerContext';
import { ResumeManagerDispatchContext } from '../contexts/ResumeManagerDispatchContext';

const initialResumeManager: Readonly<ResumeManager> = {
  loading: true,
  viewing: 'Your New Resume',
  resumes: [],
};

const LOCAL_STORAGE_KEY = 'srf';

const resumeMangerReducer: React.Reducer<ResumeManager, ResumeManagerAction> = (
  manager,
  action
) => {
  switch (action.type) {
    case 'init': {
      const isLocalStorageEmpty = window.localStorage.length <= 0;

      if (isLocalStorageEmpty) {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
      }

      const potentiallySerializedResumes =
        window.localStorage.getItem(LOCAL_STORAGE_KEY);
      let serializedResumes: string = '[]';

      // garbage was found and we need to fix it
      if (typeof potentiallySerializedResumes == 'string') {
        serializedResumes = potentiallySerializedResumes;
      } else {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
        serializedResumes = '[]';
      }

      let potentiallyResumes: unknown[] = [];
      const rm: ResumeManager = {
        loading: false,
        viewing: initialResumeManager.viewing,
        resumes: [],
      };

      // check the shape of the string from local storage
      try {
        potentiallyResumes = JSON.parse(serializedResumes);
      } catch (error) {
        console.error(error);

        // the string was not a valid shape of `Resume`s
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
      }

      // if the data is an array
      if (Array.isArray(potentiallyResumes) && potentiallyResumes.length >= 1) {
        for (const potentiallyResume of potentiallyResumes) {
          const result = ResumeSchema.safeParse(potentiallyResume);

          if (result.success) {
            rm.resumes.push(result.data);
          }
        }

        // if at least one resume from LS was safe get make it the default
        if (rm.resumes.length >= 1) {
          rm.viewing = rm.resumes[0].name;
        }

        // save the verified resumes
        window.localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(rm.resumes)
        );
      }

      return rm;
    }
  }

  return manager;
};

export const ResumeManagerProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    resumeMangerReducer,
    initialResumeManager
  );

  // onLoad, we need to grab the content from local storage
  useEffect(() => {
    dispatch({ type: 'init' });
  }, []);

  return (
    <ResumeManagerContext.Provider value={state}>
      <ResumeManagerDispatchContext.Provider value={dispatch}>
        {children}
      </ResumeManagerDispatchContext.Provider>
    </ResumeManagerContext.Provider>
  );
};
