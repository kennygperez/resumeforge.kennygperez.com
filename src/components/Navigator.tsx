import { FunctionComponent, PropsWithChildren } from 'react';
import cx from 'classnames';

import { useResumeManager } from '../hooks/useResumeManager';
import { useResumeManagerDispatch } from '../hooks/useResumeManagerDispatch';

const Tab: FunctionComponent<
  PropsWithChildren<{
    selected?: boolean;
    onClick: () => void;
    t?: string;
  }>
> = ({ selected = false, onClick, t }) => {
  return (
    <li
      className={cx(
        'h-8',
        'px-2',
        'bg-white',
        'rounded-t-md',
        'border border-r-0 last:border border-gray-400',
        'flex flex-col justify-center',
        'hover:cursor-pointer',
        selected ? 'bg-white border-b-white' : 'bg-gray-200'
      )}
      onClick={onClick}
    >
      {t && <p>{t}</p>}
    </li>
  );
};

const Navigator: FunctionComponent = () => {
  const rm = useResumeManager();
  const rmd = useResumeManagerDispatch();

  return (
    <nav>
      <ul className="flex">
        {/* switch between */}
        {rm.resumes.map((r) => (
          <Tab
            key={r.id}
            selected={rm.viewing === r.id}
            onClick={() => rmd({ type: 'view-resume', resumeId: r.id })}
            t={r.title}
          />
        ))}

        {/* Add more */}
        <Tab onClick={() => rmd({ type: 'add-new-resume' })} t={'+'} />
      </ul>
    </nav>
  );
};

export default Navigator;
