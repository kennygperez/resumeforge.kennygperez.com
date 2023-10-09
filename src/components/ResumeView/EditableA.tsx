import { FunctionComponent } from 'react';

import { EditableProps, useEditable } from '../../hooks/useEditable';

const EditableA: FunctionComponent<EditableProps> = ({ resume, field }) => {
  const {
    editable,
    inputRef,
    onChangeHandler,
    onFinishCommand,
    toggleEditable,
  } = useEditable(resume.id, field);

  if (editable) {
    return (
      <input
        ref={inputRef}
        className="h-4 text-center"
        type="text"
        value={resume[field]}
        onChange={onChangeHandler}
        onKeyUp={onFinishCommand}
      />
    );
  } else {
    return (
      <span
        className="hover:underline hover:cursor-pointer"
        onDoubleClick={toggleEditable}
      >
        {resume[field]}
      </span>
    );
  }
};

export default EditableA;
