import { FunctionComponent } from 'react';

import { EditableProps, useEditable } from '../../hooks/useEditable';

const EditableH1: FunctionComponent<EditableProps> = ({ resume, field }) => {
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
        className="leading-none text-lg font-bold mb-3 h-6 text-center bg-green-200 rounded"
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
        onClick={toggleEditable}
      >
        {resume[field]}
      </h1>
    );
  }
};

export default EditableH1;
