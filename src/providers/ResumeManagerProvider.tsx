import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react';

import {
  Resume,
  ResumeManager,
  ResumeManagerAction,
  ResumeSchema,
  createNewPopulatedResume,
} from '../libs/ResumeManager';
import { ResumeManagerContext } from '../contexts/ResumeManagerContext';
import { ResumeManagerDispatchContext } from '../contexts/ResumeManagerDispatchContext';

const initialResumeManager: Readonly<ResumeManager> = {
  loading: true,
  viewing: '',
  resumes: [],
};

const LOCAL_STORAGE_KEY = 'srf';
const SAVE_LIMIT = 5;

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
      let serializedResumes: string;

      // garbage was found and we need to fix it
      if (typeof potentiallySerializedResumes == 'string') {
        serializedResumes = potentiallySerializedResumes;
      } else {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
        serializedResumes = JSON.stringify([]);
      }

      let potentiallyResumes: unknown[] = [];
      const rm: ResumeManager = {
        loading: false,
        viewing: '',
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
        const resumes: Resume[] = [];

        for (const potentiallyResume of potentiallyResumes) {
          const result = ResumeSchema.safeParse(potentiallyResume);

          if (result.success) {
            resumes.push(result.data);
          }
        }

        rm.resumes = resumes;

        // if at least one resume from LS was safe get make it the default
        if (resumes.length >= 1) {
          rm.viewing = rm.resumes[0].id;
          rm.resumes = resumes;
        }

        // save the verified resumes
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resumes));
      }

      return rm;
    }
    case 'add-new-resume': {
      // dont update
      if (manager.resumes.length + 1 > SAVE_LIMIT) {
        return manager;
      }

      const newResume = createNewPopulatedResume(manager.resumes);
      const newManager: ResumeManager = {
        loading: manager.loading,
        viewing: newResume.id,
        resumes: [...manager.resumes, newResume],
      };

      window.localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newManager.resumes)
      );

      return newManager;
    }
    case 'view-resume': {
      const newManager: ResumeManager = {
        ...manager,
        viewing: action.resumeId,
      };

      return newManager;
    }
    case 'update-resume': {
      const newManager: ResumeManager = {
        ...manager,
        resumes: manager.resumes.map((resume) => {
          if (resume.id === action.resumeId) {
            return {
              ...resume,
              [action.key]: action.value,
            };
          } else {
            return resume;
          }
        }),
      };

      window.localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newManager.resumes)
      );

      return newManager;
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
