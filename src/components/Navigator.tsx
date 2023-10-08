import { FunctionComponent, PropsWithChildren } from 'react';
import cx from 'classnames';

import { useResumeManager } from '../hooks/useResumeManager';
import { useResumeManagerDispatch } from '../hooks/useResumeManagerDispatch';

const Tab: FunctionComponent<
  PropsWithChildren<{ selected?: boolean; onClick: () => void }>
> = ({ children, selected = false, onClick }) => {
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
      {children}
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
          >
            {r.title}
          </Tab>
        ))}

        {/* Add more */}
        <Tab onClick={() => rmd({ type: 'add-new-resume' })}>
          <p>+</p>
        </Tab>
      </ul>
    </nav>
  );
};

export default Navigator;
