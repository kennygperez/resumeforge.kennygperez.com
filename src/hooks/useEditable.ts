import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

import type { Resume, ResumeManager } from '../libs/ResumeManager';
import { useResumeManagerDispatch } from './useResumeManagerDispatch';

export interface EditableProps {
  resume: Readonly<Resume>;
  field: keyof Resume;
  className?: string;
}

export function useEditable(
  resumeId: ResumeManager['viewing'],
  field: keyof Resume
) {
  const rmd = useResumeManagerDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [editable, setEditable] = useState(false);

  // UX when editing is switched on, focus on input field
  useEffect(() => {
    if (editable && inputRef.current) {
      inputRef.current.select();
    }
  }, [editable]);

  // switch between resumes should reset the editing state
  useEffect(() => {
    setEditable(false);
  }, [resumeId]);

  const toggleEditable = () => setEditable((cv) => !cv);

  const onFinishCommand: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      toggleEditable();
    }
  };

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    rmd({
      type: 'update-resume',
      resumeId: resumeId,
      key: field,
      value: e.currentTarget.value,
    });
  };

  return {
    inputRef,
    editable,
    toggleEditable,
    onFinishCommand,
    onChangeHandler,
  };
}
