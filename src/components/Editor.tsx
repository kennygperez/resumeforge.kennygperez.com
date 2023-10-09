import { FunctionComponent } from 'react';
import cx from 'classnames';

import { useResumeManager } from '../hooks/useResumeManager';
import Navigator from './Navigator';
import Placeholder from './Placeholder';
import { Resume } from './Resume';

const Editor: FunctionComponent = () => {
  const rm = useResumeManager();

  if (rm.loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {/* nav bar: where we can switch between resumes and add new ones */}
      <Navigator />

      {/* resume viewer and editor: here we can view the resume and change the items */}
      <div
        className={cx(
          'bg-white',
          'border border-t-0 border-gray-400',
          'rounded rounded-ss-none',
          'p-8 pt-10'
        )}
      >
        <div style={{ width: '8.5in', height: '11in' }} className="relative">
          {rm.resumes.length <= 0 ? <Placeholder /> : <Resume />}
        </div>
      </div>
    </div>
  );
};

export default Editor;
