import {
  ChangeEventHandler,
  FunctionComponent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Resume } from '../../libs/ResumeManager';
import { useResumeManagerDispatch } from '../../hooks/useResumeManagerDispatch';

interface EditableH1Props {
  resume: Readonly<Resume>;
  field: keyof Resume;
}

export const EditableH1: FunctionComponent<EditableH1Props> = ({
  resume,
  field,
}) => {
  const rmd = useResumeManagerDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (editable && inputRef.current) {
      inputRef.current.select();
    }
  }, [editable]);

  const toggleEditable = () => setEditable((cv) => !cv);

  const onFinishCommand: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      toggleEditable();
    }
  };

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    rmd({
      type: 'update-resume',
      resumeId: resume.id,
      key: field,
      value: e.currentTarget.value,
    });
  };

  if (editable) {
    return (
      <input
        ref={inputRef}
        className="leading-none text-lg font-bold mb-3 h-6 text-center"
        type="text"
        value={resume[field]}
        onChange={onChangeHandler}
        onKeyUp={onFinishCommand}
      />
    );
  } else {
    return (
      <h1
        className="leading-none text-lg font-bold mb-3 hover:underline hover:cursor-pointer"
        onDoubleClick={toggleEditable}
      >
        {resume[field]}
      </h1>
    );
  }
};
