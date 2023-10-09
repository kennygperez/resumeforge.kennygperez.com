import { FunctionComponent } from 'react';
import cx from 'classnames';

import { EditableProps, useEditable } from '../../hooks/useEditable';

const EditableP: FunctionComponent<EditableProps> = ({
  resume,
  field,
  className,
}) => {
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
        className="h-4 text-center bg-green-200 rounded"
        type="text"
        value={resume[field]}
        onChange={onChangeHandler}
        onKeyUp={onFinishCommand}
      />
    );
  } else {
    return (
      <span
        className={cx(className, 'hover:underline hover:cursor-pointer')}
        onClick={toggleEditable}
      >
        {resume[field]}
      </span>
    );
  }
};

export default EditableP;
